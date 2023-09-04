const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const getName = () => {
  if (inputName.value === "") {
    outputName.innerHTML = "Anonymous";
    // outputName.textContent = inputName.value;
  } else {
    // outputName.innerHTML = "Anonymous";
    outputName.textContent = inputName.value;
  }
};

inputName.addEventListener("input", getName);
