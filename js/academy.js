// Effet fade+slide au scroll avec Intersection Observer
  document.addEventListener('DOMContentLoaded', () => {
    const options = {
      threshold: 0.3
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-6');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(document.getElementById('encadrement-title'));
    observer.observe(document.getElementById('encadrement-text'));
  });
