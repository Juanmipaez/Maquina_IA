const button = document.getElementById('toggleButton');
const mainContent = document.getElementById('mainContent');
let isOld = true;

button.addEventListener('click', () => {
  isOld = !isOld;
  mainContent.className = isOld ? 'old-version' : 'new-version';
  button.textContent = isOld ? 'Activar IA' : 'Volver al pasado';

  // Agrega una animación de filtro para transiciones suaves
  mainContent.style.filter = 'blur(4px)';
  setTimeout(() => {
    mainContent.style.filter = 'blur(0)';
  }, 400);
});

