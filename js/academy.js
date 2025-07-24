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


  window.addEventListener('load', () => {
    const slider = document.getElementById('slider');
    let position = 0;
    let speed = 0.5;

    // Attendre que les images soient chargées
    function waitForImages(callback) {
      const images = slider.querySelectorAll('img');
      let loaded = 0;
      images.forEach((img) => {
        if (img.complete) {
          loaded++;
        } else {
          img.onload = () => {
            loaded++;
            if (loaded === images.length) callback();
          };
        }
      });
      if (loaded === images.length) callback();
    }

    waitForImages(() => {
      const width = slider.scrollWidth / 2;

      function animate() {
        position -= speed;
        if (Math.abs(position) >= width) {
          position = 0;
        }
        slider.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      }

      animate();
    });
  });
