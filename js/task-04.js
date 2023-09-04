let counterValue = 0;

const value = document.querySelector("#value");
console.log(value);

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const clickOnDecrementBtn = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const clickOnIncrementBtn = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", clickOnDecrementBtn);
incrementBtn.addEventListener("click", clickOnIncrementBtn);
