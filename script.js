// Тоггл для меню
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-visible');
    menu.classList.toggle('menu-hidden');
  }
  
  // Параллакс-эффект
  document.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
  