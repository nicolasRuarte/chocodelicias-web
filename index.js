const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains("hidden")) {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("aparecer");
        }

    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

export function createToggleThemeButton() {
    const darkModeButton = document.querySelector("#dark-mode-btn");
    let toggleDarkMode = false;

    darkModeButton.addEventListener("mousedown", () => {
        console.log("click");
        console.log(toggleDarkMode);
        if (!toggleDarkMode) {
            const whiteModeElements = document.querySelectorAll(".white-mode");

            for(const element of whiteModeElements) {
                element.classList.remove("white-mode");
                element.classList.add("dark-mode");
            }

            toggleDarkMode = true;
        } else {
            const darkModeElements = document.querySelectorAll(".dark-mode");

            for(const element of darkModeElements) {
                element.classList.remove("dark-mode");
                element.classList.add("white-mode");
            }

            toggleDarkMode = false;
        }
    });
}

createToggleThemeButton();
