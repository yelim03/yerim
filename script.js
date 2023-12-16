//Intro
const introText = document.querySelector(".introText h1");

const texts = ["I WANT TO BE", "A CREATIVE", "DEVELOPER", "PUBLISHER"];
let currentIndex = 0;

const changeText = () => {
  introText.style.opacity = "0";

  setTimeout(() => {
    introText.innerText = texts[currentIndex];
    introText.style.opacity = "1";
    currentIndex = (currentIndex + 1) % texts.length;
  }, 200);
};
changeText();

const intervalId = setInterval(() => {
  if (currentIndex === texts.length - 1) {
    clearInterval(intervalId);
  }
  changeText();
}, 800);


