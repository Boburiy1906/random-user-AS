const body = document.querySelector('body');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

const modeLocal = localStorage.getItem('mode');
if (modeLocal) {
  body.classList.add('dark-mode');
}
const toggleModeFunction = () => {
  darkBtn.classList.toggle('hidden');
  lightBtn.classList.toggle('hidden');
  body.classList.toggle('dark-mode');
};

darkBtn.addEventListener('click', () => {
  toggleModeFunction();
  localStorage.setItem('mode', 'dark-mode');
});

lightBtn.addEventListener('click', () => {
  toggleModeFunction();
  localStorage.setItem('mode', '');
});