/* ===== Clothing Store — app.js ===== */
(function(){
  'use strict';

  /* ---------- Scroll fade-in ---------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }});
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');
  if(burger && mobileMenu){
    burger.addEventListener('click', () => mobileMenu.classList.add('open'));
    if(mobileClose) mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.addEventListener('click', e => { if(e.target === mobileMenu) mobileMenu.classList.remove('open'); });
  }

  /* ---------- Tabs ---------- */
  document.querySelectorAll('.tabs-nav').forEach(nav => {
    const btns = nav.querySelectorAll('button');
    const container = nav.parentElement;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        container.querySelectorAll('.tab-pane').forEach(p => {
          p.classList.toggle('active', p.id === target);
        });
      });
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  /* ---------- Filter collapse ---------- */
  document.querySelectorAll('.filter-group h4').forEach(h => {
    h.addEventListener('click', () => {
      h.parentElement.classList.toggle('collapsed');
    });
  });

  /* ---------- Grid / List toggle ---------- */
  const gridBtn = document.querySelector('.view-grid');
  const listBtn = document.querySelector('.view-list');
  const productsGrid = document.querySelector('.products-grid');
  if(gridBtn && listBtn && productsGrid){
    gridBtn.addEventListener('click', () => {
      productsGrid.classList.remove('list-view');
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });
    listBtn.addEventListener('click', () => {
      productsGrid.classList.add('list-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
  }

  /* ---------- Cart quantity ---------- */
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrap = btn.closest('.cart-item-qty');
      const val = wrap.querySelector('.qty-value');
      let n = parseInt(val.textContent, 10);
      if(btn.classList.contains('qty-minus')){ n = Math.max(1, n - 1); }
      else { n = Math.min(99, n + 1); }
      val.textContent = n;
    });
  });

  /* ---------- Size selection ---------- */
  document.querySelectorAll('.size-options').forEach(group => {
    group.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  /* ---------- Color swatch selection ---------- */
  document.querySelectorAll('.color-options').forEach(group => {
    group.querySelectorAll('.color-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        group.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
      });
    });
  });

  /* ---------- Modal ---------- */
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.querySelector(trigger.dataset.modal);
      if(modal) modal.classList.add('open');
    });
  });
  document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', e => {
      if(e.target === el) el.closest('.modal-overlay')?.classList.remove('open') || el.classList.remove('open');
    });
  });

  /* ---------- City selector ---------- */
  const citySelect = document.querySelector('.city-select');
  if(citySelect){
    citySelect.addEventListener('change', () => {
      /* demo — just visual */
    });
  }

  /* ---------- Sort select (demo) ---------- */
  const sortSelect = document.querySelector('.sort-select');
  if(sortSelect){
    sortSelect.addEventListener('change', () => {
      /* demo sort — no real data */
    });
  }

  /* ---------- Quick view demo ---------- */
  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.getElementById('quickViewModal');
      if(modal) modal.classList.add('open');
    });
  });

  /* ---------- Gallery thumbs ---------- */
  document.querySelectorAll('.gallery-thumbs .thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const thumbs = thumb.parentElement.querySelectorAll('.thumb');
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  /* ---------- Profile tabs ---------- */
  document.querySelectorAll('.profile-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.profile-nav a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const target = link.dataset.section;
      if(target){
        document.querySelectorAll('.profile-section').forEach(s => {
          s.style.display = s.id === target ? 'block' : 'none';
        });
      }
    });
  });

  /* ---------- Sidebar mobile toggle ---------- */
  const filterToggle = document.querySelector('.filter-toggle');
  const sidebar = document.querySelector('.sidebar');
  if(filterToggle && sidebar){
    filterToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

})();
