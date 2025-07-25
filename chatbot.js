function getBotResponse(input) {
    input = input.toLowerCase();

    let respuesta = "No entendí tu pregunta. ¿Podrías repetirla?"

    if (input.includes("hola")) respuesta = "¡Hola!, ¿Cómo estás?";
    if (input.includes("precio")) respuesta = `Los precios están dentro de la sección "Tienda"`;
    if (input.includes("nombre")) respuesta = "Me llamo ROB-erto. Pero puedes llamarme ROB";
    if (input.includes("gracias")) respuesta = "¡De nada!";
    if (input.includes("comprar") || input.includes("pedido")) respuesta = "Podés usar el formulario de compras que se encuentra al final de la página principal";
    if (input.includes("creación") || input.includes("creacion")) respuesta = `Podés ver el proceso de creación de nuestras galletas <a href="https://youtube.com">aquí</href>`

    return respuesta;
}

function sendMessage() {
    const chatBox = document.querySelector(".chat-box")
    const input = document.querySelector("#user-input");
    const userText = input.value;

    if (userText.trim() === "") return;

    chatBox.innerHTML += `<p class="user"><strong>Vos:</strong> ${userText}</p>`;

    const botResponse = getBotResponse(userText);
    chatBox.innerHTML += `<p class="bot"><strong>Bot:</strong> ${botResponse}</p>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
