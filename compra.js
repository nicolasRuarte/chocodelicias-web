import { createToggleThemeButton } from "./script.js";

const addToCartButtons = document.querySelectorAll("add-to-cart");
const products = document.querySelectorAll(".product");
const cartList = document.querySelector("#cart-list");
const buyButton = document.querySelector("#buy");
const total = document.querySelector("#total");


function addCartElement(product) {
    const productInfo = product.childNodes[3];
    console.log(productInfo.childNodes);

    const pTypeIndex = 1;
    const pPriceIndex = 3;

    let totalAmount = parseInt(total.textContent);
    totalAmount += parseInt(productInfo.childNodes[pPriceIndex].textContent);
    total.textContent = totalAmount;

    const cartElement = document.createElement("li");
    const cartElementText = document.createTextNode(`${productInfo.childNodes[pTypeIndex].textContent} ${product.childNodes[pPriceIndex].textContent}`)
    cartElement.appendChild(cartElementText);

    cartList.appendChild(cartElement);
}

for (const product of products) {
    product.addEventListener("click", (e) => {
        const target = e.target;

        if (target.className === "add-to-cart") {
            addCartElement(product);
        }
    });
}

buyButton.onclick = function () {

    cartList.textContent = "";
    total.textContent = "0";
}

createToggleThemeButton();
