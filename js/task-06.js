const validator = document.querySelector("#validation-input");

const dataLength = validator.dataset.length;

validator.addEventListener("blur", () => {
  if (validator.value.length == dataLength) {
    validator.classList.toggle("valid");
    if (validator.classList.contains("invalid")) {
      validator.classList.remove("invalid");
    }
  } else {
    if (validator.classList.contains("valid")) {
      validator.classList.remove("valid");
    }
    validator.classList.add("invalid");
  }
  console.log(validator.value.length);
  console.log(dataLength);
});
