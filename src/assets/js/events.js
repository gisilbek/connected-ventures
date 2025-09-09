import '../css/styles.css';
import './index.js'; 


import event1 from '../img/events/event1.png';
import event2 from '../img/events/event2.png';
import event3 from '../img/events/event3.png';
import event4 from '../img/events/event4.png';
import event5 from '../img/events/event5.png';
import event6 from '../img/events/event6.png';
import event7 from '../img/events/event7.png';
import event8 from '../img/events/event8.png';
import event9 from '../img/events/event9.png';
import event10 from '../img/events/event10.png';
import event11 from '../img/events/event11.png';
import event12 from '../img/events/event12.png';
import event13 from '../img/events/event13.png';


const events = [event1, event2, event3, event4, event5, event6, event7, event8, event9,
                event10, event11, event12, event13];

export default events;

document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('#event-image');
  const galleryContainer = document.querySelector('#gallery-container'); // <-- agregar esto

  // Obtener el nombre del archivo de la URL
  const path = window.location.pathname; 
  const filename = path.substring(path.lastIndexOf('/') + 1); // 8.html
  const eventNumber = parseInt(filename);
  const index = eventNumber ? eventNumber - 1 : 0; 

  // Asignar la imagen principal
  if (img) {
    img.src = events[index] || events[0];
  }

  // Cargar galería
  if (galleryContainer) {
    const galleryImages = events.slice(index, index + 5);
    galleryImages.forEach(src => {
      const imgEl = document.createElement('img');
      imgEl.src = src;
      galleryContainer.appendChild(imgEl);
    });
  }
});


console.log('Hello from Connected.Ventures!')