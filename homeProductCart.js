import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const templateProduct = document.querySelector("#templateProduct")
export const showProductContainer = (products)=>{
    if(!products){
        return false
    }

products.forEach(curProd => {
    const {id,name,category,brand,price,stock,description,image,actual_price} = curProd;

    const productClone = document.importNode(templateProduct.content,true)
    productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = image;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent =     `₹${price *4}`;

productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
    homeQuantityToggle(event,id,stock);
})


productClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
    addToCart(event,id,stock)
    
})
productContainer.append(productClone)
});



}