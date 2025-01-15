const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.addEventListener("DOMContentLoaded", () => {
    const h1Element = document.querySelector("h1[data-value]");

    if (h1Element) {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            h1Element.innerText = h1Element.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return h1Element.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= h1Element.dataset.value.length) {
                clearInterval(interval);
                h1Element.style.fontSize = ""; // Reset to default font size
            }

            iteration += 1 / 2;
        }, 17);
    }
});
