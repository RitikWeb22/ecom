import products from './api/Products.json'
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS'
import { getCartProductFromLS } from './getCartProducts'
import { incrementDecrement } from './incrementDecrement'
import { removeProdFromCart} from './removeProductFormCart'

let cartProducts = getCartProductFromLS()

let filterProduct = products.filter((curProd)=>{
return cartProducts.some((curElem)=>curElem.id === curProd.id)
})
console.log(filterProduct)

const cartElement = document.querySelector("#productCartContainer")
const templateContainer  = document.querySelector("#productCartTemplate")

const showCartProduct = ()=>{
    filterProduct.forEach((curProd)=>{
const {category, id, image, name, stock, price} = curProd;

let productClone = document.importNode(templateContainer.content,true);

const lSActualData =  fetchQuantityFromCartLS(id,price)

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

productClone.querySelector('.category').textContent = category;
productClone.querySelector('.productName').textContent = name;
productClone.querySelector('.productImage').src = image;
productClone.querySelector('.productPrice').textContent = lSActualData.price;
productClone.querySelector('.productQuantity').textContent = lSActualData.quantity;


productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
    incrementDecrement(event,id,stock,price)
})
productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=> removeProdFromCart(id))


cartElement.appendChild(productClone)
    })
}

showCartProduct()