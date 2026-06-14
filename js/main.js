document.addEventListener('DOMContentLoaded', () => {
  // === Scroll Reveal ===
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // === Navigation Highlight ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-56px 0px -20% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));

  // === Timeline Stagger Animation ===
  const timeline = document.getElementById('timeline');
  if (timeline) {
    const timelineItems = timeline.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineItems.forEach((item, index) => {
              const delay = parseInt(item.getAttribute('data-delay')) || index;
              setTimeout(() => {
                item.classList.add('revealed');
              }, delay * 200);
            });
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineObserver.observe(timeline);
  }
});
