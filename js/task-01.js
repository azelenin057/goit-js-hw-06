const arrCategories = document.querySelectorAll("li.item");

const numberCategories = arrCategories.length;
console.log(`Number of categories: ${numberCategories}`);

arrCategories.forEach((category) => {
  const nameCategory = category.querySelector("h2").textContent;
  console.log(`Category: ${nameCategory}`);
  const numberElements = category.querySelectorAll("li").length;
  console.log(`Elements: ${numberElements}`);
});
