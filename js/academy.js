document.addEventListener('DOMContentLoaded', () => {
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(document.getElementById('encadrement-title'));
    observer.observe(document.getElementById('encadrement-text'));
  });
