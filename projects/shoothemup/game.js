const WIDTH = 400;
const HEIGHT = 225;
const TWO_PI = Math.PI * 2;
const STORAGE_KEY = "star-reaper-86-high-score";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const ui = {
  score: document.getElementById("score"),
  best: document.getElementById("best"),
  wave: document.getElementById("wave"),
  shieldFill: document.getElementById("shieldFill"),
  lives: document.getElementById("lives"),
  bombs: document.getElementById("bombs"),
  controller: document.getElementById("controller"),
  overlay: document.getElementById("overlay"),
  overlayTitle: document.getElementById("overlayTitle"),
  overlayBody: document.getElementById("overlayBody"),
};

const keyState = Object.create(null);
const keyPressed = Object.create(null);

const palette = {
  player: "#6cf7ff",
  playerAccent: "#ffffff",
  enemyA: "#ff5b8d",
  enemyB: "#ffb347",
  enemyC: "#b6ff68",
  boss: "#ff4f4f",
  bullet: "#fff4b0",
  enemyBullet: "#ff8ba7",
  bomb: "#ffffff",
};

const gamepadState = {
  label: "Keyboard",
  prevBomb: false,
  prevStart: false,
};

const audio = createAudio();
const game = createInitialState();

window.addEventListener("keydown", (event) => {
  if ([
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Space",
    "Enter",
    "Escape",
  ].includes(event.code)) {
    event.preventDefault();
  }

  if (!keyState[event.code]) {
    keyPressed[event.code] = true;
  }

  keyState[event.code] = true;
  audio.unlock();
});

window.addEventListener("keyup", (event) => {
  keyState[event.code] = false;
});

window.addEventListener("gamepadconnected", (event) => {
  gamepadState.label = event.gamepad.id.includes("Xbox") ? "Xbox Controller" : "Gamepad";
  ui.controller.textContent = gamepadState.label;
});

window.addEventListener("gamepaddisconnected", () => {
  gamepadState.label = "Keyboard";
  ui.controller.textContent = gamepadState.label;
});

window.addEventListener("blur", () => {
  if (game.mode === "running") {
    pauseGame();
  }
});

function createInitialState() {
  return {
    mode: "title",
    score: 0,
    best: readBest(),
    wave: 1,
    player: createPlayer(),
    stars: createStars(),
    bullets: [],
    enemyBullets: [],
    enemies: [],
    particles: [],
    powerups: [],
    waveBanner: { text: "Press Start", timer: Infinity, color: palette.player },
    waveDelay: 0,
    combo: 1,
    comboTimer: 0,
    flash: 0,
    clock: 0,
  };
}

function createRunState(best) {
  return {
    mode: "running",
    score: 0,
    best,
    wave: 1,
    player: createPlayer(),
    stars: createStars(),
    bullets: [],
    enemyBullets: [],
    enemies: [],
    particles: [],
    powerups: [],
    waveBanner: { text: "Wave 01", timer: 2.1, color: palette.player },
    waveDelay: 0,
    combo: 1,
    comboTimer: 0,
    flash: 0,
    clock: 0,
  };
}

function createPlayer() {
  return {
    x: 56,
    y: HEIGHT / 2,
    radius: 10,
    speed: 194,
    cooldown: 0,
    fireRate: 0.13,
    shield: 100,
    maxShield: 100,
    lives: 3,
    bombs: 2,
    spread: 1,
    invulnerable: 0,
    hitFlash: 0,
  };
}

function createStars() {
  return Array.from({ length: 72 }, () => ({
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    size: 1 + Math.random() * 2,
    speed: 14 + Math.random() * 84,
    tint: Math.random() > 0.88 ? "#ff9fba" : Math.random() > 0.5 ? "#8ad8ff" : "#ffffff",
  }));
}

function startGame() {
  audio.unlock();
  Object.assign(game, createRunState(Math.max(game.best, readBest())));
  spawnWave(game.wave);
  updateHud();
  updateOverlay();
}

function pauseGame() {
  if (game.mode !== "running") {
    return;
  }

  game.mode = "paused";
  game.waveBanner = { text: "Paused", timer: Infinity, color: palette.bullet };
  updateOverlay();
}

function resumeGame() {
  if (game.mode !== "paused") {
    return;
  }

  game.mode = "running";
  game.waveBanner = {
    text: `Wave ${String(game.wave).padStart(2, "0")}`,
    timer: 0.9,
    color: palette.player,
  };
  updateOverlay();
}

function triggerGameOver() {
  game.player.shield = 0;
  game.mode = "gameover";
  game.best = Math.max(game.best, game.score);
  writeBest(game.best);
  game.waveBanner = { text: "Mission Failed", timer: Infinity, color: palette.enemyA };
  updateOverlay();
}

function spawnWave(wave) {
  if (wave % 5 === 0) {
    spawnBossWave(wave);
    return;
  }

  const rows = Math.min(5, 2 + Math.floor(wave / 2));
  const columns = 4 + Math.min(5, wave);
  const types = ["scout", "spinner", "tank"];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const type = types[(row + col + wave) % types.length];
      game.enemies.push(createEnemy(type, row, col, wave));
    }
  }
}

function createEnemy(type, row, col, wave) {
  const baseY = 40 + row * 28;
  const baseX = WIDTH + 52 + col * 30 + row * 12;

  if (type === "scout") {
    return {
      type,
      x: baseX,
      y: baseY,
      radius: 9,
      hp: 1,
      maxHp: 1,
      speed: 66 + wave * 4,
      amplitude: 10 + Math.random() * 12,
      phase: Math.random() * TWO_PI,
      fireInterval: 1.6,
      fireCooldown: 0.7 + Math.random() * 0.6,
      age: 0,
      score: 120,
      dead: false,
    };
  }

  if (type === "spinner") {
    return {
      type,
      x: baseX + 20,
      y: baseY,
      radius: 11,
      hp: 2 + Math.floor(wave / 4),
      maxHp: 2 + Math.floor(wave / 4),
      speed: 55 + wave * 3,
      amplitude: 18 + Math.random() * 12,
      phase: Math.random() * TWO_PI,
      fireInterval: 1.3,
      fireCooldown: 0.55 + Math.random() * 0.5,
      age: 0,
      score: 180,
      dead: false,
    };
  }

  return {
    type,
    x: baseX + 34,
    y: baseY,
    radius: 15,
    hp: 5 + Math.floor(wave / 2),
    maxHp: 5 + Math.floor(wave / 2),
    speed: 30 + wave * 2.5,
    amplitude: 8,
    phase: Math.random() * TWO_PI,
    fireInterval: 1.85,
    fireCooldown: 0.95 + Math.random() * 0.8,
    age: 0,
    score: 320,
    dead: false,
  };
}

function spawnBossWave(wave) {
  game.enemies.push({
    type: "boss",
    x: WIDTH + 96,
    y: HEIGHT / 2,
    radius: 34,
    hp: 90 + wave * 12,
    maxHp: 90 + wave * 12,
    speed: 22 + wave,
    amplitude: 42,
    phase: 0,
    fireInterval: 0.8,
    fireCooldown: 1.2,
    age: 0,
    score: 3000 + wave * 180,
    dead: false,
  });
  game.waveBanner = { text: "Dreadnought Incoming", timer: 2.8, color: palette.enemyA };
}

function updateGameplay(dt, input) {
  const player = game.player;
  const moveLength = Math.hypot(input.moveX, input.moveY);
  const moveX = moveLength > 0 ? input.moveX / moveLength : 0;
  const moveY = moveLength > 0 ? input.moveY / moveLength : 0;

  player.x = clamp(player.x + moveX * player.speed * dt, 20, WIDTH - 26);
  player.y = clamp(player.y + moveY * player.speed * dt, 18, HEIGHT - 18);
  player.cooldown = Math.max(0, player.cooldown - dt);
  player.invulnerable = Math.max(0, player.invulnerable - dt);
  player.hitFlash = Math.max(0, player.hitFlash - dt * 4);

  if (input.fire && player.cooldown <= 0) {
    spawnPlayerBullets();
    player.cooldown = Math.max(0.05, player.fireRate - (player.spread - 1) * 0.008);
  }

  if (input.bombPressed) {
    deployBomb();
    cleanupDestroyedEnemies();
  }

  updateBullets(dt);
  updateEnemies(dt);
  updatePowerups(dt);
  updateParticles(dt);
  resolveCollisions();
  cleanupDestroyedEnemies();

  if (game.mode === "running") {
    advanceWave(dt);
    updateCombo(dt);
  }
}

function spawnPlayerBullets() {
  const player = game.player;
  const offsets = getSpreadOffsets(player.spread);

  offsets.forEach((offset, index) => {
    const drift = (index - (offsets.length - 1) / 2) * 0.04;
    game.bullets.push({
      x: player.x + 14,
      y: player.y + offset,
      vx: 260,
      vy: drift * 260,
      radius: 3,
      damage: player.spread >= 4 ? 2 : 1,
      life: 1.4,
      color: palette.bullet,
    });
  });

  audio.play("shoot");
}

function getSpreadOffsets(spread) {
  if (spread <= 1) {
    return [0];
  }

  if (spread === 2) {
    return [-5, 5];
  }

  if (spread === 3) {
    return [-8, 0, 8];
  }

  return [-12, -4, 4, 12];
}

function deployBomb() {
  const player = game.player;
  if (player.bombs <= 0) {
    return;
  }

  player.bombs -= 1;
  game.flash = 0.65;
  game.enemyBullets = [];
  createBurst(player.x + 8, player.y, 46, palette.bomb, 110);
  game.waveBanner = { text: "Screen Clear", timer: 0.7, color: palette.bomb };
  audio.play("bomb");

  game.enemies.forEach((enemy) => {
    if (enemy.dead) {
      return;
    }

    enemy.hp -= enemy.type === "boss" ? 24 : 999;
    if (enemy.hp <= 0) {
      markEnemyDestroyed(enemy);
    }
  });
}

function updateBullets(dt) {
  game.bullets = game.bullets.filter((bullet) => {
    bullet.x += bullet.vx * dt;
    bullet.y += bullet.vy * dt;
    bullet.life -= dt;
    return bullet.life > 0 && bullet.x <= WIDTH + 10 && bullet.y >= -10 && bullet.y <= HEIGHT + 10;
  });

  game.enemyBullets = game.enemyBullets.filter((bullet) => {
    bullet.x += bullet.vx * dt;
    bullet.y += bullet.vy * dt;
    bullet.life -= dt;
    return bullet.life > 0 && bullet.x >= -12 && bullet.x <= WIDTH + 12 && bullet.y >= -12 && bullet.y <= HEIGHT + 12;
  });
}

function updateEnemies(dt) {
  game.enemies.forEach((enemy) => {
    if (enemy.dead) {
      return;
    }

    enemy.age += dt;
    enemy.fireCooldown -= dt;

    if (enemy.type === "scout") {
      enemy.x -= enemy.speed * dt;
      enemy.y += Math.sin(enemy.age * 4.8 + enemy.phase) * enemy.amplitude * dt * 2.1;
    } else if (enemy.type === "spinner") {
      enemy.x -= enemy.speed * dt;
      enemy.y += Math.sin(enemy.age * 5.8 + enemy.phase) * enemy.amplitude * dt * 2.8;
    } else if (enemy.type === "tank") {
      enemy.x -= enemy.speed * dt;
      enemy.y += Math.sin(enemy.age * 2 + enemy.phase) * enemy.amplitude * dt;
    } else {
      enemy.x = Math.max(WIDTH - 92, enemy.x - enemy.speed * dt);
      enemy.y = HEIGHT / 2 + Math.sin(enemy.age * 1.4) * enemy.amplitude;
    }

    if (enemy.type !== "boss" && enemy.x < -40) {
      enemy.dead = true;
      return;
    }

    if (enemy.x < WIDTH - 24 && enemy.fireCooldown <= 0) {
      fireEnemy(enemy);
      enemy.fireCooldown = Math.max(0.35, enemy.fireInterval - Math.min(0.55, game.wave * 0.02));
    }
  });
}

function fireEnemy(enemy) {
  const dx = game.player.x - enemy.x;
  const dy = game.player.y - enemy.y;
  const angle = Math.atan2(dy, dx);
  const speed = enemy.type === "boss" ? 118 : 100;
  const spread = enemy.type === "boss" ? [-0.34, -0.17, 0, 0.17, 0.34] : [0];

  spread.forEach((offset) => {
    game.enemyBullets.push({
      x: enemy.x - enemy.radius * 0.4,
      y: enemy.y,
      vx: Math.cos(angle + offset) * speed,
      vy: Math.sin(angle + offset) * speed,
      radius: enemy.type === "boss" ? 4 : 3,
      damage: enemy.type === "boss" ? 20 : 12,
      life: enemy.type === "boss" ? 4.2 : 3.2,
      color: palette.enemyBullet,
    });
  });
}

function updatePowerups(dt) {
  game.powerups = game.powerups.filter((powerup) => {
    powerup.x -= powerup.speed * dt;
    powerup.y += Math.sin(game.clock * 4 + powerup.phase) * 18 * dt;
    powerup.life -= dt;

    if (circleHit(powerup, game.player)) {
      collectPowerup(powerup);
      return false;
    }

    return powerup.life > 0 && powerup.x > -20;
  });
}

function collectPowerup(powerup) {
  const player = game.player;

  if (powerup.kind === "spread") {
    player.spread = Math.min(4, player.spread + 1);
    game.waveBanner = { text: "Spread Shot", timer: 1.2, color: palette.enemyC };
  } else if (powerup.kind === "shield") {
    player.shield = Math.min(player.maxShield, player.shield + 35);
    game.waveBanner = { text: "Shield Boost", timer: 1.2, color: palette.player };
  } else {
    player.bombs = Math.min(5, player.bombs + 1);
    game.waveBanner = { text: "Bomb Stock", timer: 1.2, color: palette.bomb };
  }

  createBurst(powerup.x, powerup.y, 16, palette.enemyC, 54);
  audio.play("power");
}

function updateParticles(dt) {
  game.particles = game.particles.filter((particle) => {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.life -= dt;
    particle.vx *= 0.99;
    particle.vy *= 0.99;
    return particle.life > 0;
  });

  game.flash = Math.max(0, game.flash - dt * 1.4);
}

function resolveCollisions() {
  game.bullets = game.bullets.filter((bullet) => {
    const enemy = game.enemies.find((candidate) => !candidate.dead && circleHit(bullet, candidate));
    if (!enemy) {
      return true;
    }

    enemy.hp -= bullet.damage;
    createBurst(bullet.x, bullet.y, 6, palette.bullet, 28);
    if (enemy.hp <= 0) {
      markEnemyDestroyed(enemy);
    }
    return false;
  });

  game.enemyBullets = game.enemyBullets.filter((bullet) => {
    if (game.player.invulnerable > 0 || !circleHit(bullet, game.player)) {
      return true;
    }

    damagePlayer(bullet.damage);
    return false;
  });

  game.enemies.forEach((enemy) => {
    if (enemy.dead || game.player.invulnerable > 0) {
      return;
    }

    if (circleHit(enemy, game.player)) {
      markEnemyDestroyed(enemy);
      damagePlayer(enemy.type === "boss" ? 30 : 24);
    }
  });
}

function markEnemyDestroyed(enemy) {
  if (enemy.dead) {
    return;
  }

  enemy.dead = true;

  if (enemy.type === "boss") {
    createBurst(enemy.x, enemy.y, 90, palette.enemyA, 180);
    game.enemyBullets = [];
    game.player.bombs = Math.min(5, game.player.bombs + 1);
    game.waveBanner = { text: "Dreadnought Down", timer: 2.2, color: palette.enemyA };
    audio.play("bossBoom");
  } else {
    createBurst(enemy.x, enemy.y, 18, enemy.type === "tank" ? palette.enemyC : palette.enemyA, 66);
    audio.play("boom");
  }

  maybeSpawnPowerup(enemy);
  game.score += Math.round(enemy.score * game.combo);
  game.combo = Math.min(5, game.combo + 0.15);
  game.comboTimer = 2.4;
  game.best = Math.max(game.best, game.score);
}

function maybeSpawnPowerup(enemy) {
  if (enemy.type === "boss" || Math.random() > 0.16) {
    return;
  }

  const kinds = ["spread", "shield", "bomb"];
  const kind = kinds[Math.floor(Math.random() * kinds.length)];

  game.powerups.push({
    kind,
    x: enemy.x,
    y: enemy.y,
    radius: 8,
    speed: 34,
    phase: Math.random() * TWO_PI,
    life: 7,
  });
}

function cleanupDestroyedEnemies() {
  game.enemies = game.enemies.filter((enemy) => !enemy.dead);
}

function damagePlayer(amount) {
  const player = game.player;
  player.shield -= amount;
  player.invulnerable = 1.1;
  player.hitFlash = 1;
  game.flash = 0.18;
  createBurst(player.x - 4, player.y, 20, palette.enemyBullet, 70);
  audio.play("hit");

  if (player.shield > 0) {
    return;
  }

  player.lives -= 1;
  if (player.lives <= 0) {
    triggerGameOver();
    return;
  }

  player.shield = player.maxShield;
  player.x = 56;
  player.y = HEIGHT / 2;
  player.invulnerable = 1.8;
  game.waveBanner = { text: "Interceptor Lost", timer: 1.5, color: palette.enemyA };
}

function advanceWave(dt) {
  if (game.enemies.length > 0) {
    game.waveDelay = 0;
    return;
  }

  game.waveDelay += dt;
  if (game.waveDelay < 1.05) {
    return;
  }

  game.wave += 1;
  game.waveDelay = 0;
  game.waveBanner = {
    text: `Wave ${String(game.wave).padStart(2, "0")}`,
    timer: 2.2,
    color: palette.player,
  };
  spawnWave(game.wave);
}

function updateCombo(dt) {
  game.comboTimer = Math.max(0, game.comboTimer - dt);
  if (game.comboTimer === 0) {
    game.combo = 1;
  }
}

function updateStars(dt) {
  game.stars.forEach((star) => {
    star.x -= star.speed * dt;
    if (star.x < -2) {
      star.x = WIDTH + 2;
      star.y = Math.random() * HEIGHT;
      star.size = 1 + Math.random() * 2;
      star.speed = 14 + Math.random() * 84;
    }
  });
}

function updateBanner(dt) {
  if (game.waveBanner.timer !== Infinity) {
    game.waveBanner.timer = Math.max(0, game.waveBanner.timer - dt);
  }
}

function createBurst(x, y, count, color, force) {
  for (let index = 0; index < count; index += 1) {
    const angle = (index / count) * TWO_PI + Math.random() * 0.32;
    const speed = force * (0.24 + Math.random());
    game.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color,
      life: 0.18 + Math.random() * 0.6,
      size: 1 + Math.random() * 2.6,
    });
  }
}

function readInput() {
  const pad = readGamepad();

  return {
    moveX: clamp(
      pad.moveX + (isDown("ArrowRight", "KeyD") ? 1 : 0) - (isDown("ArrowLeft", "KeyA") ? 1 : 0),
      -1,
      1
    ),
    moveY: clamp(
      pad.moveY + (isDown("ArrowDown", "KeyS") ? 1 : 0) - (isDown("ArrowUp", "KeyW") ? 1 : 0),
      -1,
      1
    ),
    fire: pad.fire || isDown("Space", "KeyJ"),
    bombPressed: pad.bombPressed || consumePress("KeyX", "KeyK", "ShiftLeft", "ShiftRight"),
    startPressed: pad.startPressed || consumePress("Enter", "Escape", "KeyP"),
  };
}

function readGamepad() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const pad = Array.from(pads).find((entry) => entry && entry.connected);

  if (!pad) {
    gamepadState.label = "Keyboard";
    ui.controller.textContent = gamepadState.label;
    gamepadState.prevBomb = false;
    gamepadState.prevStart = false;
    return { moveX: 0, moveY: 0, fire: false, bombPressed: false, startPressed: false };
  }

  const buttons = pad.buttons;
  const left = buttons[14]?.pressed ? -1 : 0;
  const right = buttons[15]?.pressed ? 1 : 0;
  const up = buttons[12]?.pressed ? -1 : 0;
  const down = buttons[13]?.pressed ? 1 : 0;
  const axisX = applyDeadZone(pad.axes[0] || 0);
  const axisY = applyDeadZone(pad.axes[1] || 0);
  const fire = Boolean(buttons[0]?.pressed || buttons[5]?.pressed || buttons[7]?.pressed);
  const bomb = Boolean(buttons[1]?.pressed || buttons[4]?.pressed);
  const start = Boolean(buttons[9]?.pressed);

  gamepadState.label = pad.id.includes("Xbox") ? "Xbox Controller" : "Gamepad";
  ui.controller.textContent = gamepadState.label;

  const result = {
    moveX: clamp(axisX + left + right, -1, 1),
    moveY: clamp(axisY + up + down, -1, 1),
    fire,
    bombPressed: bomb && !gamepadState.prevBomb,
    startPressed: start && !gamepadState.prevStart,
  };

  gamepadState.prevBomb = bomb;
  gamepadState.prevStart = start;
  return result;
}

function updateHud() {
  const shieldRatio = clamp(game.player.shield / game.player.maxShield, 0, 1);
  ui.score.textContent = String(game.score).padStart(6, "0");
  ui.best.textContent = String(Math.max(game.best, game.score)).padStart(6, "0");
  ui.wave.textContent = String(game.wave).padStart(2, "0");
  ui.shieldFill.style.width = `${shieldRatio * 100}%`;
  ui.lives.textContent = String(Math.max(0, game.player.lives));
  ui.bombs.textContent = String(game.player.bombs);
}

function updateOverlay() {
  if (game.mode === "title") {
    ui.overlay.classList.remove("hidden");
    ui.overlayTitle.textContent = "Press Start";
    ui.overlayBody.textContent = "Launch with Enter or the Xbox Start button, then hold Space or A to fire.";
    return;
  }

  if (game.mode === "paused") {
    ui.overlay.classList.remove("hidden");
    ui.overlayTitle.textContent = "Paused";
    ui.overlayBody.textContent = "Press Start, Esc, or P to resume the run.";
    return;
  }

  if (game.mode === "gameover") {
    ui.overlay.classList.remove("hidden");
    ui.overlayTitle.textContent = "Mission Failed";
    ui.overlayBody.textContent = `Final score ${String(game.score).padStart(6, "0")}. Press Start or Enter to launch another run.`;
    return;
  }

  ui.overlay.classList.add("hidden");
}

function render() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  drawBackdrop();
  drawStars();
  drawLaneGlow();
  drawPowerups();
  drawBullets(game.bullets);
  drawEnemyBullets(game.enemyBullets);
  drawEnemies();
  drawPlayer();
  drawParticles();
  drawBanner();
  drawCombo();

  if (game.flash > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${game.flash * 0.25})`;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }
}

function drawBackdrop() {
  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  gradient.addColorStop(0, "#0b1024");
  gradient.addColorStop(0.5, "#090814");
  gradient.addColorStop(1, "#030408");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const haze = ctx.createRadialGradient(270, 56, 0, 270, 56, 140);
  haze.addColorStop(0, "rgba(108, 247, 255, 0.18)");
  haze.addColorStop(0.45, "rgba(123, 56, 255, 0.12)");
  haze.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function drawStars() {
  game.stars.forEach((star) => {
    ctx.fillStyle = star.tint;
    ctx.fillRect(star.x, star.y, star.size, star.size);
    if (star.speed > 56) {
      ctx.fillRect(star.x + star.size, star.y, star.size, 1);
    }
  });
}

function drawLaneGlow() {
  ctx.save();
  ctx.globalAlpha = 0.24;
  ctx.strokeStyle = "#39dcff";
  ctx.lineWidth = 1;

  for (let index = 0; index < 5; index += 1) {
    const y = 36 + index * 38;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y + Math.sin(game.clock * 1.5 + index) * 3);
    ctx.stroke();
  }

  ctx.restore();
}

function drawPlayer() {
  const player = game.player;
  ctx.save();
  ctx.translate(player.x, player.y);

  if (player.invulnerable > 0 && Math.floor(player.invulnerable * 14) % 2 === 0) {
    ctx.globalAlpha = 0.42;
  }

  ctx.shadowBlur = 14;
  ctx.shadowColor = palette.player;
  ctx.fillStyle = player.hitFlash > 0 ? "#ffffff" : palette.player;
  ctx.beginPath();
  ctx.moveTo(13, 0);
  ctx.lineTo(-10, -8);
  ctx.lineTo(-4, 0);
  ctx.lineTo(-10, 8);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = palette.playerAccent;
  ctx.fillRect(-3, -3, 6, 6);
  ctx.fillStyle = "#ff5b8d";
  ctx.fillRect(-11, -2, 4, 4);
  ctx.restore();
}

function drawEnemies() {
  game.enemies.forEach((enemy) => {
    if (enemy.dead) {
      return;
    }

    ctx.save();
    ctx.translate(enemy.x, enemy.y);
    ctx.shadowBlur = enemy.type === "boss" ? 18 : 10;
    ctx.shadowColor = enemy.type === "boss" ? palette.boss : palette.enemyA;

    if (enemy.type === "scout") {
      ctx.fillStyle = palette.enemyA;
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(8, -7);
      ctx.lineTo(12, 0);
      ctx.lineTo(8, 7);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff1ff";
      ctx.fillRect(-3, -2, 5, 4);
    } else if (enemy.type === "spinner") {
      ctx.rotate(enemy.age * 4.6);
      ctx.fillStyle = palette.enemyB;
      ctx.fillRect(-9, -2, 18, 4);
      ctx.fillRect(-2, -9, 4, 18);
      ctx.fillStyle = "#fff7dd";
      ctx.fillRect(-3, -3, 6, 6);
    } else if (enemy.type === "tank") {
      ctx.fillStyle = palette.enemyC;
      ctx.fillRect(-14, -9, 28, 18);
      ctx.fillStyle = "#0b1024";
      ctx.fillRect(-8, -4, 12, 8);
      ctx.fillStyle = "#ffe7a6";
      ctx.fillRect(8, -2, 6, 4);
    } else {
      ctx.fillStyle = palette.boss;
      ctx.fillRect(-34, -18, 68, 36);
      ctx.fillStyle = "#1f0629";
      ctx.fillRect(-24, -10, 36, 20);
      ctx.fillStyle = "#ffe7a6";
      ctx.fillRect(18, -10, 12, 20);
      drawBossHealth(enemy);
    }

    ctx.restore();
  });
}

function drawBossHealth(enemy) {
  const ratio = Math.max(0, enemy.hp / enemy.maxHp);
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.fillRect(-35, -30, 70, 4);
  ctx.fillStyle = palette.enemyA;
  ctx.fillRect(-35, -30, 70 * ratio, 4);
}

function drawBullets(bullets) {
  bullets.forEach((bullet) => {
    ctx.fillStyle = bullet.color;
    ctx.fillRect(bullet.x - 2, bullet.y - 1, 7, 2);
    ctx.fillRect(bullet.x + 5, bullet.y, 3, 1);
  });
}

function drawEnemyBullets(bullets) {
  bullets.forEach((bullet) => {
    ctx.fillStyle = bullet.color;
    ctx.fillRect(bullet.x - bullet.radius, bullet.y - bullet.radius, bullet.radius * 2, bullet.radius * 2);
  });
}

function drawParticles() {
  game.particles.forEach((particle) => {
    ctx.globalAlpha = Math.max(0, particle.life * 1.8);
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
  });
  ctx.globalAlpha = 1;
}

function drawPowerups() {
  game.powerups.forEach((powerup) => {
    ctx.save();
    ctx.translate(powerup.x, powerup.y);
    ctx.rotate(game.clock * 2.6 + powerup.phase);
    ctx.shadowBlur = 12;
    ctx.shadowColor = powerup.kind === "spread" ? palette.enemyC : powerup.kind === "shield" ? palette.player : palette.bomb;
    ctx.strokeStyle = powerup.kind === "spread" ? palette.enemyC : powerup.kind === "shield" ? palette.player : palette.bomb;
    ctx.strokeRect(-7, -7, 14, 14);
    ctx.restore();
  });
}

function drawBanner() {
  if (game.waveBanner.timer <= 0) {
    return;
  }

  ctx.save();
  ctx.font = "bold 16px Consolas";
  ctx.textAlign = "center";
  ctx.fillStyle = game.waveBanner.color;
  ctx.shadowBlur = 18;
  ctx.shadowColor = game.waveBanner.color;
  ctx.fillText(game.waveBanner.text, WIDTH / 2, 28);
  ctx.restore();
}

function drawCombo() {
  if (game.combo <= 1.05 || game.comboTimer <= 0) {
    return;
  }

  ctx.save();
  ctx.font = "bold 11px Consolas";
  ctx.textAlign = "left";
  ctx.fillStyle = "#ffdd8f";
  ctx.fillText(`COMBO x${game.combo.toFixed(1)}`, 16, HEIGHT - 14);
  ctx.restore();
}

function isDown(...codes) {
  return codes.some((code) => keyState[code]);
}

function consumePress(...codes) {
  for (const code of codes) {
    if (keyPressed[code]) {
      keyPressed[code] = false;
      return true;
    }
  }

  return false;
}

function circleHit(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y) < a.radius + b.radius;
}

function applyDeadZone(value) {
  return Math.abs(value) < 0.2 ? 0 : value;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function readBest() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY) || 0);
  } catch {
    return 0;
  }
}

function writeBest(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value));
  } catch {
    return;
  }
}

function createAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  let context = null;

  function ensure() {
    if (!AudioContextClass) {
      return null;
    }

    if (!context) {
      context = new AudioContextClass();
    }

    if (context.state === "suspended") {
      context.resume();
    }

    return context;
  }

  function tone({ type, frequency, duration, volume, slide = 0 }) {
    const audioContext = ensure();
    if (!audioContext) {
      return;
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.linearRampToValueAtTime(frequency + slide, now + duration);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  return {
    unlock: ensure,
    play(kind) {
      if (kind === "shoot") {
        tone({ type: "square", frequency: 460, duration: 0.06, volume: 0.018, slide: 80 });
      } else if (kind === "boom") {
        tone({ type: "sawtooth", frequency: 150, duration: 0.22, volume: 0.04, slide: -80 });
      } else if (kind === "bossBoom") {
        tone({ type: "sawtooth", frequency: 96, duration: 0.42, volume: 0.06, slide: -64 });
      } else if (kind === "hit") {
        tone({ type: "triangle", frequency: 220, duration: 0.12, volume: 0.03, slide: -110 });
      } else if (kind === "power") {
        tone({ type: "square", frequency: 520, duration: 0.18, volume: 0.026, slide: 220 });
      } else if (kind === "bomb") {
        tone({ type: "sawtooth", frequency: 240, duration: 0.28, volume: 0.06, slide: -170 });
      }
    },
  };
}

let lastFrame = performance.now();

function frame(now) {
  const dt = Math.min(0.033, (now - lastFrame) / 1000);
  lastFrame = now;

  const input = readInput();
  game.clock += dt;
  updateStars(dt);
  updateBanner(dt);

  if (game.mode === "title") {
    if (input.startPressed) {
      startGame();
    }
  } else if (game.mode === "paused") {
    if (input.startPressed) {
      resumeGame();
    }
  } else if (game.mode === "gameover") {
    if (input.startPressed) {
      startGame();
    }
  } else if (input.startPressed) {
    pauseGame();
  } else {
    updateGameplay(dt, input);
  }

  updateHud();
  updateOverlay();
  render();
  requestAnimationFrame(frame);
}

updateHud();
updateOverlay();
requestAnimationFrame(frame);
