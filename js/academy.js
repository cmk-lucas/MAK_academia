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


  const slider = document.getElementById('slider');
  let position = 0;
  const speed = 0.5; // vitesse en px par frame
  
  // largeur totale de la moitié des logos (une seule série)
  const singleWidth = slider.scrollWidth / 2;

  function step() {
    position -= speed;
    if (Math.abs(position) >= singleWidth) {
      position = 0; // reset pour boucle infinie
    }
    slider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(step);
  }

  step();

