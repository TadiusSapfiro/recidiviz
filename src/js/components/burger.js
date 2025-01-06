const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.body;


function toggleMenu() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
  body.classList.toggle('disable-scroll');
}



// Update previous event listeners to use the new function
export function burgerMenu() {
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav--visible')) {
      toggleMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--visible')) {
      toggleMenu();
    }
  });


  // Replace burger click event with toggleMenu function
  burger.addEventListener('click', toggleMenu);
}

