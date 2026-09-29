const form = document.querySelector("#add-to-cart-form");
const quantityInput = document.querySelector("#quantity");
const bagCount = document.querySelector("#bag-count");
const cartMessage = document.querySelector("#cart-message");

function setQuantity(nextQuantity) {
  const quantity = Math.min(10, Math.max(1, nextQuantity));
  quantityInput.value = quantity;
}

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.action === "increase" ? 1 : -1;
    setQuantity(Number(quantityInput.value) + direction);
  });
});

quantityInput.addEventListener("change", () => {
  setQuantity(Number(quantityInput.value) || 1);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const quantity = Number(quantityInput.value);
  const selectedSize = new FormData(form).get("size");
  bagCount.textContent = Number(bagCount.textContent) + quantity;
  cartMessage.textContent = `${quantity} ${quantity === 1 ? "unidad agregada" : "unidades agregadas"}, talla ${selectedSize}.`;
});