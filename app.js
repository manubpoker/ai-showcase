(() => {
  const grid = document.getElementById('grid');
  const btt = document.getElementById('btt');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalLaunch = document.getElementById('modal-launch');

  let projects = [];

  async function init() {
    const res = await fetch('projects.json');
    projects = await res.json();
    render(projects);
    observeTiles();
  }

  function render(items) {
    grid.innerHTML = items.map((p, i) => `
      <div class="tile${p.thumbnail ? '' : ' no-thumb'}" data-id="${p.id}">
        ${p.thumbnail
          ? `<img src="${p.thumbnail}" alt="${p.title}" loading="lazy">`
          : `<div class="tile-fallback" data-color="${i % 9}"></div>`}
        <div class="tile-label"><span>${p.title}</span></div>
      </div>
    `).join('');
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

  // Modal
  function openModal(project) {
    modalImg.src = project.thumbnail || '';
    modalImg.alt = project.title;
    modalImg.style.display = project.thumbnail ? '' : 'none';
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalTags.innerHTML = project.tags
      .map(t => `<span class="modal-tag">${t}</span>`)
      .join('');
    modalLaunch.href = project.path;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const tile = e.target.closest('.tile');
    if (!tile) return;
    const project = projects.find(p => p.id === tile.dataset.id);
    if (project) openModal(project);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.modal-close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
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
