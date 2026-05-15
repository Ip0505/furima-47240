const card = () => {
  const form = document.getElementById("charge-form")
  if (!form) return

  const numberForm = document.getElementById("number-form")
  const expiryForm = document.getElementById("expiry-form")
  const cvcForm = document.getElementById("cvc-form")

  if (!numberForm || !expiryForm || !cvcForm) return
  if (numberForm.hasChildNodes()) return

  const publicKey = gon.public_key
  if (!publicKey) return

  const payjp = Payjp(publicKey)
  const elements = payjp.elements()

  const numberElement = elements.create("cardNumber")
  const expiryElement = elements.create("cardExpiry")
  const cvcElement = elements.create("cardCvc")

  numberElement.mount("#number-form")
  expiryElement.mount("#expiry-form")
  cvcElement.mount("#cvc-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    payjp.createToken(numberElement).then((response) => {
      if (response.error) {
        form.submit()
        return
      }

      const token = response.id
      const tokenObj = `<input value="${token}" name="token" type="hidden">`
      form.insertAdjacentHTML("beforeend", tokenObj)
      form.submit()
    })
  })
}

window.addEventListener("turbo:load", card)
window.addEventListener("turbo:render", card)