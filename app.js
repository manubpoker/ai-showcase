(() => {
  const grid = document.getElementById('grid');
  const btt = document.getElementById('btt');

  let projects = [];

  async function init() {
    const res = await fetch('projects.json');
    projects = await res.json();
    render(projects);
    observeTiles();
  }

  function render(items) {
    grid.innerHTML = items.map((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const accent = p.accent || '#4d9fff';
      return `
      <div class="tile${p.thumbnail ? '' : ' no-thumb'}" data-id="${p.id}" style="--accent: ${accent}">
        <div class="tile-inner">
          <div class="tile-front">
            ${p.thumbnail
              ? `<img src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
              : `<div class="tile-fallback" data-color="${i % 9}"></div>`}
            <div class="tile-label"><span>${p.title}</span></div>
          </div>
          <div class="tile-back">
            ${p.thumbnail ? `<img class="tile-back-bg" src="${p.thumbnail}" alt="" aria-hidden="true">` : ''}
            <div class="tile-back-overlay"></div>
            <div class="tile-back-number">${num}</div>
            <button class="tile-back-close" aria-label="Flip back">&times;</button>
            <div class="tile-back-content">
              <div class="tile-back-line"></div>
              <h3 class="tile-back-title">${p.title}</h3>
              <p class="tile-back-desc">${p.description}</p>
              <div class="tile-back-tags">
                ${p.tags.map(t => `<span class="tile-back-tag">${t}</span>`).join('')}
              </div>
              <a class="tile-back-launch" href="${p.path}" target="_blank" rel="noopener"
                 onclick="event.stopPropagation()">Launch Project &rarr;</a>
            </div>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  // Scroll animations
  function observeTiles() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = `${e.target.dataset.delay}s`;
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tile').forEach((tile, i) => {
      tile.dataset.delay = (i % 2) * 0.1;
      observer.observe(tile);
    });
  }

  // Card flip
  grid.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.tile-back-close');
    const tile = e.target.closest('.tile');
    if (!tile) return;

    if (closeBtn) {
      e.stopPropagation();
      tile.classList.remove('flipped');
      return;
    }

    if (e.target.closest('.tile-back-launch')) return;

    tile.classList.toggle('flipped');
  });

  // Back to top
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  });
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  init();
})();
