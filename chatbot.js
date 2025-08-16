import { createToggleThemeButton } from "./index.js";

const input = document.querySelector("#user-input");

function getBotResponse(input) {
    input = input.toLowerCase();

    let respuesta = "No entendí tu pregunta. ¿Podrías repetirla?"

    if (input.includes("hola")) respuesta = "¿Qué hacés, máquina?";
    if (input.includes("precio")) respuesta = `Los precios están dentro de la sección "Tienda"`;
    if (input.includes("nombre")) respuesta = "Me llamo Gallerobot. ¡Idéntico a los robots que aparecen en la película de Mi Villano Favorito!";
    if (input.includes("gracias")) respuesta = "¡De nada!";
    if (input.includes("comprar") || input.includes("pedido")) respuesta = "Podés usar el formulario de compras que se encuentra al final de la página principal";
    if (input.includes("creacion") || input.includes("proceso")) respuesta = `Podés ver el proceso de creación de nuestras galletas <a href="https://youtube.com">aquí</href>`;
    if (input.includes("puto") || input.includes("gay")) respuesta = `No generemos discordia, por favor.`;
    if (input.includes("hello")) respuesta = "こんにちは deaaaa";
    if (input.includes("chiste")) respuesta = "Ok, aquí va uno. Una vez quise conquistar a una programadora, pero no pude porque no sé de Java. Ja ja ja";
    if (input.includes("otro")) respuesta = "Ok, aquí va otro. Nunca dejes que un backend cocine el asado, porque siempre le sale CRUDo. Ja ja ja";

    return respuesta;
}

function sendMessage() {
    const chatBox = document.querySelector(".chat-box")
    const userText = input.value;

    if (userText.trim() === "") return;

    chatBox.innerHTML += `<p class="user"><strong>Vos:</strong> ${userText}</p>`;

    const botResponse = getBotResponse(userText);
    chatBox.innerHTML += `<p class="bot"><strong>Bot:</strong> ${botResponse}</p>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        sendMessage();
    }
});

createToggleThemeButton();
