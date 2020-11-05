import './sass/main.scss';
import colors from './js/colors';

const startBtn = document.querySelector("[data-action='start']");
const endBtn = document.querySelector("[data-action='stop']");
const body = document.querySelector("body");

let switchSet;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const switchMe = () => {
    body.style.background = colors[randomIntegerFromInterval(0, 5)];
}

const switchColors = () => {
    endBtn.addEventListener('click', end, {once: true});
    switchSet = setInterval(switchMe, 1000);
}

const end = () => {
    clearInterval(switchSet);
    startBtn.addEventListener('click', switchColors, {once: true});
}

startBtn.addEventListener('click', switchColors, {once: true});


