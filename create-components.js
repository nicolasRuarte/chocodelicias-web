function createNavbar() {
    const body = document.getElementsByName("body");
    body.innerHTML = `
        <nav class="white-mode">
        <p id="titulo-pagina" class="white-mode">Chocodelicias</p>
        <button id="dark-mode-btn" class="white-mode cursive">Cambiar tema</button>
        </nav>
        `;
    console.log("creando navbar");
}
