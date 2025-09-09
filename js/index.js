import '../css/styles.css';

// Código para manejar el DOM después de que la página haya cargado
document.addEventListener('DOMContentLoaded', () => {
  // Profile picture
  const imgEl = document.querySelector('.profile-pic');
  if (imgEl) {
    imgEl.src = '/img/avatar/natalia-loza.png'; // ruta copiada por CopyWebpackPlugin
  }

  // Mostrar logos en scroll horizontal
  const logosContainer = document.getElementById('logos-container');
  const logos = Array.from({ length: 30 }, (_, i) => `/img/logo_partner/logo${i + 1}.png`);

  function addLogos(container, logosArray) {
    logosArray.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Logo partner';
      container.appendChild(img);
    });
  }

  if (logosContainer) {
    addLogos(logosContainer, logos);
    addLogos(logosContainer, logos); // duplicar para scroll infinito
  }

  // Menu toggle para dispositivos móviles
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

console.log('Hello from Connected.Ventures!');
