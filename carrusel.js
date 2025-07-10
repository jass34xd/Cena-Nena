const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsNav = document.querySelector('.carousel-dots');

const cards = Array.from(track.children);
const cardWidth = cards[0].getBoundingClientRect().width;
let index = 0;

// Position cards next to each other
cards.forEach((card, i) => {
  card.style.left = `${cardWidth * i}px`;
});

// Create dots
cards.forEach((_, i) => {
  const button = document.createElement('button');
  if (i === 0) button.classList.add('active');
  dotsNav.appendChild(button);
});

const dots = Array.from(dotsNav.children);

const moveToSlide = (index) => {
  track.style.transform = `translateX(-${cardWidth * index}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

nextBtn.addEventListener('click', () => {
  index = (index + 1) % cards.length;
  moveToSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  moveToSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    moveToSlide(index);
  });
});

// Auto slide
setInterval(() => {
  index = (index + 1) % cards.length;
  moveToSlide(index);
}, 4000);
