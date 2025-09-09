import '../css/styles.css';
import './index.js';

document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('#event-image');
  const galleryContainer = document.querySelector('#gallery-container');

  // Obtener número de evento desde la URL
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1); // ej: 8.html
  const eventNumber = parseInt(filename) || 1;

  // Asignar imagen principal
  if (img) {
    img.src = `assets/images/event${eventNumber}.png`; // ruta según CopyWebpackPlugin
  }

  // Cargar galería de 5 imágenes
  if (galleryContainer) {
    for (let i = 0; i < 5; i++) {
      const n = eventNumber + i;
      const imgEl = document.createElement('img');
      imgEl.src = `assets/images/event${n}.png`;
      imgEl.alt = `Event ${n}`;
      imgEl.loading = 'lazy';
      galleryContainer.appendChild(imgEl);
    }
  }
});

console.log('Hello from Connected.Ventures Events!');
