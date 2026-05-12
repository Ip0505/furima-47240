const itemPrice = () => {
  const priceInput = document.getElementById("item-price");

  if (!priceInput) {
    return;
  }

  priceInput.addEventListener("input", () => {
    const inputValue = Number(priceInput.value);

    const addTaxDom = document.getElementById("add-tax-price");
    const profitDom = document.getElementById("profit");

    const tax = Math.floor(inputValue * 0.1);
    const profit = Math.floor(inputValue - tax);

    addTaxDom.innerHTML = tax;
    profitDom.innerHTML = profit;
  });
};

window.addEventListener("turbo:load", itemPrice);
window.addEventListener("turbo:render", itemPrice);