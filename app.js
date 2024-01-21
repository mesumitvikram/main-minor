const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider img');
let currentItem = 0;
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
  sliderItems[currentItem].classList.remove('active');
  currentItem = (n + sliderItems.length) % sliderItems.length;
  sliderItems[currentItem].classList.add('active');
}

// const startSlideshow = () => {
//   slideInterval = setInterval(nextSlide, 2000000); 
// };

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % (images.length - 4);
  updateSlider();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + images.length - 4) % (images.length - 4); 
  updateSlider();
};

const updateSlider = () => {
  const windowWidth = window.innerWidth;
  let moveAmount;

  if (windowWidth > 1000) {
    moveAmount = 20; 
  } else {
    moveAmount = 300; 
  }

  slider.style.transform = `translateX(-${moveAmount * currentSlide}%)`; 
};

window.addEventListener('resize', () => {
  
  updateSlider();
});

if (currentItem === slide1) {
    prevBtn.disabled = true;
    console.log('Previous button disabled');
  } else {
    prevBtn.disabled = false;
    console.log('Previous button enabled');
  }
prevBtn.addEventListener('click', () => {
    if (currentItem > 1) {
        showSlide(currentItem - 1);

    }
});


if (currentItem === totalItems) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }

nextBtn.addEventListener('click', () => {
    if (currentItem < totalItems) {
        showSlide(currentItem + 1);

    }
});


showSlide(0);
startSlideshow();