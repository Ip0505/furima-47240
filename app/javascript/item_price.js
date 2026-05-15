const price = () => {
  const priceInput = document.getElementById("item-price")
  if (!priceInput) return

  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value
    const addTaxPrice = document.getElementById("add-tax-price")
    const profit = document.getElementById("profit")

    if (!addTaxPrice || !profit) return

    const tax = Math.floor(inputValue * 0.1)
    const salesProfit = Math.floor(inputValue - tax)

    addTaxPrice.innerHTML = tax
    profit.innerHTML = salesProfit
  })
}

window.addEventListener("turbo:load", price)