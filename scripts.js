const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// right btn functionality
rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSLide();
});

// left btn functionality
leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSLide();
});

setBgToBody();

//setting background img to activeSlide nr
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

//changing background img
function setActiveSLide() {
  slides.forEach((slide) => {
    //removing class active
    slide.classList.remove('active');
    //adding class active
    slides[activeSlide].classList.add('active');
  });
}
