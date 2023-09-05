const inputText = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

inputText.addEventListener("input", (e) => {
  const size = inputText.value;
  text.style.fontSize = `${size}px`;
});
