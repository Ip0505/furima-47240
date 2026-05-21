const price = () => {
  const priceInput = document.getElementById("item-price")
  if (!priceInput) return

  const addTaxPrice = document.getElementById("add-tax-price")
  const profit = document.getElementById("profit")
  if (!addTaxPrice || !profit) return

  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value

    if (inputValue === "") {
      addTaxPrice.innerHTML = ""
      profit.innerHTML = ""
      return
    }

    const tax = Math.floor(Number(inputValue) * 0.1)
    const salesProfit = Number(inputValue) - tax

    addTaxPrice.innerHTML = tax
    profit.innerHTML = salesProfit
  })
}

window.addEventListener("turbo:load", price)
window.addEventListener("turbo:render", price)