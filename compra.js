import { createToggleThemeButton } from "./index.js";

const products = document.querySelectorAll(".product");
const cartList = document.querySelector("#cart-list");
const buyButton = document.querySelector("#buy");
const total = document.querySelector("#total");
const mensajeCompra = document.querySelector("#mensaje-compra");


function addCartElement(product) {
    mensajeCompra.textContent = "";
    const productInfo = product.childNodes[3];
    console.log(productInfo.childNodes);

    const pTypeIndex = 1;
    const pPriceIndex = 3;

    let totalAmount = parseInt(total.textContent);
    totalAmount += parseInt(productInfo.childNodes[pPriceIndex].textContent);
    total.textContent = totalAmount;

    const cartElement = document.createElement("li");
    const cartElementText = document.createTextNode(`${productInfo.childNodes[pTypeIndex].textContent} $${productInfo.childNodes[pPriceIndex].textContent}`)
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
    mensajeCompra.textContent = "¡Compra realizada con éxito!";
    cartList.textContent = "";
    total.textContent = "0";
}

createToggleThemeButton();
