document.addEventListener("DOMContentLoaded", () => {
  const titleText = "Programmes d'Excellence";
  const titleElement = document.getElementById("animated-title");
  const subtitleElement = document.getElementById("animated-subtitle");
  
  let i = 0;

  function typeWriter() {
    if (i < titleText.length) {
      titleElement.textContent += titleText.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // vitesse d'apparition par lettre
    } else {
      subtitleElement.style.opacity = 1; // fait apparaître le paragraphe
    }
  }

  typeWriter();
});
