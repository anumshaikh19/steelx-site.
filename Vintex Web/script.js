const cursor = document.querySelector('.cursor');
if (cursor && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = Math.min(index * 35, 280) + 'ms';
  revealObserver.observe(element);
});

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1200, 1);
      element.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    observer.unobserve(element);
  });
}, { threshold: 0.8 });

document.querySelectorAll('[data-count]').forEach((element) => counterObserver.observe(element));

const nav = document.querySelector('.nav');
let previousY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.transform = y > previousY && y > 120 ? 'translateY(-100%)' : 'translateY(0)';
  nav.style.transition = 'transform .35s ease, background .35s ease';
  nav.style.background = y > 30 ? 'rgba(244,240,232,.72)' : 'transparent';
  nav.style.backdropFilter = y > 30 ? 'blur(14px)' : 'none';
  previousY = y;
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
