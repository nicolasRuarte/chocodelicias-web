const buyButtons = document.querySelectorAll("buy");
const addToCartButtons = document.querySelectorAll("add-to-cart");

const products = document.querySelectorAll(".product");
const cartList = document.querySelector("cart-list");

console.log(document.querySelector(".product"))

for (const product of products) {
    product.addEventListener("click", (e) => {
        if(e.target.classList.includes("add-to-cart")) {
            console.log(product.childNodes())
        }
    })
}