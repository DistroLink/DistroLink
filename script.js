// Robust smooth scroll (href + data-scroll) with sticky-header offset
document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn'); const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => { const open = nav.style.display === 'flex'; nav.style.display = open ? 'none' : 'flex'; });

function smartScrollTo(targetSel) {
  const el = document.querySelector(targetSel);
  if (!el) return;
  const header = document.querySelector('.site-header');
  const h = header ? header.offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.pageYOffset - (h + 18);
  window.scrollTo({ top: y, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"], [data-scroll]').forEach(el => {
  el.addEventListener('click', (e) => {
    const sel = el.getAttribute('data-scroll') || el.getAttribute('href');
    if (!sel || sel === '#') return;
    if (document.querySelector(sel)) { e.preventDefault(); smartScrollTo(sel); }
  });
});
