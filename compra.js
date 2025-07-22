const buyButtons = document.querySelectorAll("buy");
const addToCartButtons = document.querySelectorAll("add-to-cart");

const products = document.querySelectorAll(".product");
const cartList = document.querySelector("#cart-list");

function addCartElement() {
    const total = document.querySelector("#total");
    let totalAmount = parseInt(total.textContent);
    totalAmount += parseInt(product.childNodes[5].textContent);
    total.textContent = totalAmount;

    const cartElement = document.createElement("li");
    const cartElementText = document.createTextNode(`${product.childNodes[pTypeIndex].textContent} ${product.childNodes[pPriceIndex].textContent}`)
    cartElement.appendChild(cartElementText);

    cartList.appendChild(cartElement);
}

for (product of products) {
    const pTypeIndex = 3;
    const pPriceIndex = 5;
    console.log(product.childNodes)
    product.addEventListener("click", (e) => {
        const target = e.target;

        if (target.className === "add-to-cart") {
            addCartElement();
        }
    });
}
