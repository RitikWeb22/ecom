import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
const currentCardElement = document.querySelector(`#card${id}`)
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  if (!productQuantity || !productPrice) {
    console.error("Product quantity or price not found inside the card.");
    return;
  }

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProducts = getCartProductFromLS();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
  }

  if (event.target.classList.contains("cartIncrement")) {
    if (quantity < stock) {
      quantity += 1;
    }
  }

  if (event.target.classList.contains("cartDecrement")) {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = localCartProducts.map((curProd) =>
    curProd.id === id ? { id, quantity, price: localStoragePrice } : curProd
  );

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = `₹${localStoragePrice}`;

  updateCartProductTotal();
};
