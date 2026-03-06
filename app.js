(() => {
  const grid = document.getElementById('grid');
  const btt = document.getElementById('btt');

  async function init() {
    const res = await fetch('projects.json');
    const projects = await res.json();
    render(projects);
  }

  function render(projects) {
    grid.innerHTML = projects.map((p, i) => `
      <a class="tile" href="${p.path}" target="_blank" rel="noopener">
        ${p.thumbnail
          ? `<img src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
          : `<div class="tile-fallback" data-color="${i % 5}"></div>`}
        <div class="tile-label"><span>${p.title}</span></div>
      </a>
    `).join('');
  }

  // Back to top
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  });
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  init();
})();
