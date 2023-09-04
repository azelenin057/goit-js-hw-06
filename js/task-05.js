const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const getName = (name) => {
  if (name.value !== "") {
    outputName.textContent = inputName.value;
  } else {
    outputName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", getName);
