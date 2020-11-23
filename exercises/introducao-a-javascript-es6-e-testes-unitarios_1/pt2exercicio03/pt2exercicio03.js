const clickCount = document.querySelector('.button');
let clicks = document.querySelector('.click-number');
let clickNumber = 0;

clickCount.addEventListener('click', () => {
  clickNumber += 1;
  clicks.innerHTML = clickNumber;
});

