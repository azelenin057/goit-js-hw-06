function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const span = document.querySelector("span.color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", (e) => {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});
