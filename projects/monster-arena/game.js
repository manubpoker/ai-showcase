(() => {
  const API = window.location.origin;
  let player = null;
  let opponent = null;
  let round = 1;
  let wins = 0;
  let mutations = 0;
  let originalDescription = '';

  // ── DOM refs ──
  const $ = (id) => document.getElementById(id);
  const screens = document.querySelectorAll('.screen');

  const PRESETS = [
    'Crystal dragon with a molten core',
    'Shadow wolf made of living smoke',
    'Ancient stone golem covered in runes',
    'Electric jellyfish the size of a horse',
    'Frost phoenix with diamond feathers',
    'Void spider with constellation eyes',
  ];

  const OPPONENTS = [
    'A hulking lava troll with obsidian fists',
    'A spectral knight wielding a blade of moonlight',
    'A swarm of metallic hornets forming a humanoid shape',
    'A deep-sea leviathan with bioluminescent tendrils',
    'A clockwork bear with grinding gears and steam vents',
    'A fungal colossus releasing toxic spores',
    'A sandstorm djinn with glass shards orbiting its body',
    'A crystalline mantis with prismatic blade-arms',
    'A bone dragon assembled from ancient fossils',
    'A shadow hydra with heads made of pure darkness',
    'A thunder mammoth crackling with stored lightning',
    'A plague rat king fused into one massive beast',
    'A mirror golem reflecting everything around it',
    'A magma serpent with volcanic vents along its spine',
    'A celestial stag with antlers of pure starlight',
  ];

  const UPGRADES = [
    { name: 'Berserker Mutation', stat: 'attack', icon: '\u2694\uFE0F', mutation: 'larger claws, sharper teeth, and a more aggressive stance', desc: 'Greatly boosts attack power' },
    { name: 'Ironhide Mutation', stat: 'defense', icon: '\uD83D\uDEE1\uFE0F', mutation: 'thicker armored plating, scales, or a protective shell', desc: 'Greatly boosts defense' },
    { name: 'Quicksilver Mutation', stat: 'speed', icon: '\u26A1', mutation: 'sleeker body, extra wings or legs, and a more agile frame', desc: 'Greatly boosts speed' },
  ];

  // ── Init ──
  function init() {
    createParticles();
    renderPresets();

    $('btn-create').addEventListener('click', createMonster);
    $('monster-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') createMonster();
    });
    $('btn-fight').addEventListener('click', startFight);
    $('btn-restart').addEventListener('click', restart);
  }

  function createParticles() {
    const container = $('particles');
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-10px';
      p.style.animationDelay = Math.random() * 6 + 's';
      p.style.animationDuration = 4 + Math.random() * 4 + 's';
      container.appendChild(p);
    }
  }

  function renderPresets() {
    const row = $('presets');
    row.innerHTML = PRESETS.map(p =>
      `<button class="preset-btn">${p}</button>`
    ).join('');
    row.addEventListener('click', (e) => {
      if (e.target.classList.contains('preset-btn')) {
        $('monster-input').value = e.target.textContent;
      }
    });
  }

  function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
  }

  // ── Create Monster ──
  async function createMonster() {
    const desc = $('monster-input').value.trim();
    if (!desc) return;
    originalDescription = desc;

    showScreen('screen-loading');
    $('loading-text').textContent = 'Summoning your creature...';

    try {
      const res = await fetch(`${API}/api/monster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: desc, type: 'player' }),
      });

      if (!res.ok) throw new Error((await res.json()).error || 'Failed');
      player = await res.json();
      player.originalDescription = desc;
      player.maxHp = player.hp;

      // Generate first opponent
      await generateOpponent();
      showBattle();
    } catch (err) {
      alert('Error: ' + err.message);
      showScreen('screen-title');
    }
  }

  async function generateOpponent() {
    $('loading-text').textContent = 'A challenger approaches...';
    const desc = OPPONENTS[Math.floor(Math.random() * OPPONENTS.length)];
    const scaleFactor = 1 + (round - 1) * 0.15;

    const res = await fetch(`${API}/api/monster`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: `${desc} (power level: ${Math.round(scaleFactor * 100)}%)`, type: 'opponent' }),
    });

    if (!res.ok) throw new Error('Failed to generate opponent');
    opponent = await res.json();
    opponent.maxHp = opponent.hp;

    // Scale opponent stats
    if (round > 1) {
      opponent.hp = Math.round(opponent.hp * scaleFactor);
      opponent.maxHp = opponent.hp;
      opponent.attack = Math.round(opponent.attack * scaleFactor);
      opponent.defense = Math.round(opponent.defense * scaleFactor);
      opponent.speed = Math.round(opponent.speed * scaleFactor);
    }
  }

  function showBattle() {
    $('round-badge').textContent = `Round ${round}`;
    $('wins-badge').textContent = `Wins: ${wins}`;

    // Player card
    $('player-img').src = player.image;
    $('player-name').textContent = player.name;
    $('player-hp-bar').style.width = '100%';
    $('player-hp-bar').style.background = 'linear-gradient(90deg, var(--green), #4ade80)';
    $('player-atk').textContent = player.attack;
    $('player-def').textContent = player.defense;
    $('player-spd').textContent = player.speed;
    $('player-special').textContent = player.special;

    // Opponent card
    $('opponent-img').src = opponent.image;
    $('opponent-name').textContent = opponent.name;
    $('opponent-hp-bar').style.width = '100%';
    $('opponent-hp-bar').style.background = 'linear-gradient(90deg, var(--green), #4ade80)';
    $('opponent-atk').textContent = opponent.attack;
    $('opponent-def').textContent = opponent.defense;
    $('opponent-spd').textContent = opponent.speed;
    $('opponent-special').textContent = opponent.special;

    // Reset state
    $('player-card').className = 'monster-card';
    $('opponent-card').className = 'monster-card enemy';
    $('combat-log').classList.remove('visible');
    $('combat-log').innerHTML = '';
    $('btn-fight').style.display = 'block';
    $('btn-fight').disabled = false;
    $('btn-fight').textContent = 'Fight!';

    showScreen('screen-battle');
  }

  // ── Fight ──
  async function startFight() {
    $('btn-fight').disabled = true;
    $('btn-fight').textContent = 'Fighting...';
    $('combat-log').classList.add('visible');
    $('combat-log').innerHTML = '<p style="color:var(--muted)">The battle begins...</p>';

    try {
      // Clash animation
      const stage = $('battle-stage');
      stage.classList.add('clash');
      const flash = document.createElement('div');
      flash.className = 'impact-flash';
      document.body.appendChild(flash);
      await delay(500);
      stage.classList.remove('clash');
      flash.remove();

      const res = await fetch(`${API}/api/fight`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player, opponent }),
      });

      if (!res.ok) throw new Error('Combat failed');
      const result = await res.json();

      // Animate narrative
      $('combat-log').innerHTML = '';
      const lines = result.narrative || [];
      for (let i = 0; i < lines.length; i++) {
        await delay(600);
        const p = document.createElement('p');
        p.className = 'log-line';
        p.style.animationDelay = '0s';
        p.textContent = lines[i];
        $('combat-log').appendChild(p);
        $('combat-log').scrollTop = $('combat-log').scrollHeight;

        // Shake the card being hit
        const target = i % 2 === 0 ? 'opponent-card' : 'player-card';
        $(target).classList.add('shake');
        setTimeout(() => $(target).classList.remove('shake'), 500);
      }

      await delay(800);

      const playerWon = result.winner === 'player';

      // Animate HP bars
      if (playerWon) {
        $('opponent-hp-bar').style.width = '0%';
        $('opponent-hp-bar').style.background = 'linear-gradient(90deg, var(--red), #f87171)';
        const remainingPct = Math.max(20, 100 - (result.playerDamage / player.maxHp) * 100);
        $('player-hp-bar').style.width = remainingPct + '%';
        player.hp = Math.round(player.maxHp * remainingPct / 100);
      } else {
        $('player-hp-bar').style.width = '0%';
        $('player-hp-bar').style.background = 'linear-gradient(90deg, var(--red), #f87171)';
        $('opponent-hp-bar').style.width = '60%';
      }

      await delay(600);

      // Show winner/loser
      if (playerWon) {
        $('player-card').classList.add('winner');
        $('opponent-card').classList.add('loser');
        wins++;
        $('wins-badge').textContent = `Wins: ${wins}`;
      } else {
        $('opponent-card').classList.add('winner');
        $('player-card').classList.add('loser');
      }

      await delay(1200);

      if (playerWon) {
        showUpgrade();
      } else {
        showGameOver();
      }
    } catch (err) {
      $('combat-log').innerHTML = `<p style="color:var(--red)">Error: ${err.message}</p>`;
      $('btn-fight').disabled = false;
      $('btn-fight').textContent = 'Retry Fight';
    }
  }

  // ── Upgrade ──
  function showUpgrade() {
    const container = $('upgrade-options');
    container.innerHTML = UPGRADES.map((u, i) => `
      <div class="upgrade-card" data-index="${i}">
        <div class="upgrade-icon">${u.icon}</div>
        <div class="upgrade-name">${u.name}</div>
        <div class="upgrade-desc">${u.desc}</div>
        <div class="upgrade-stat">+${u.stat.toUpperCase()}</div>
      </div>
    `).join('');

    container.querySelectorAll('.upgrade-card').forEach(card => {
      card.addEventListener('click', () => applyUpgrade(UPGRADES[card.dataset.index]));
    });

    showScreen('screen-upgrade');
  }

  async function applyUpgrade(upgrade) {
    showScreen('screen-loading');
    $('loading-text').textContent = `Applying ${upgrade.name}...`;
    mutations++;

    try {
      const res = await fetch(`${API}/api/upgrade`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ monster: { ...player, originalDescription }, upgrade }),
      });

      if (!res.ok) throw new Error('Upgrade failed');
      const upgraded = await res.json();

      player.image = upgraded.image;
      player.name = upgraded.name;
      player.hp = upgraded.hp;
      player.maxHp = upgraded.hp;
      player.attack = upgraded.attack;
      player.defense = upgraded.defense;
      player.speed = upgraded.speed;
      player.special = upgraded.special;
      player.specialDesc = upgraded.specialDesc;

      // Next round
      round++;
      $('loading-text').textContent = 'A new challenger approaches...';
      await generateOpponent();
      showBattle();
    } catch (err) {
      alert('Upgrade error: ' + err.message);
      round++;
      showBattle();
    }
  }

  // ── Game Over ──
  function showGameOver() {
    $('gameover-img').src = player.image;
    $('gameover-name').textContent = player.name;
    $('go-wins').textContent = wins;
    $('go-round').textContent = round;
    $('go-mutations').textContent = mutations;
    showScreen('screen-gameover');
  }

  function restart() {
    player = null;
    opponent = null;
    round = 1;
    wins = 0;
    mutations = 0;
    originalDescription = '';
    $('monster-input').value = '';
    $('btn-fight').textContent = 'Fight!';
    showScreen('screen-title');
  }

  function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  init();
})();
