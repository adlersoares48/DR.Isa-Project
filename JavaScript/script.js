document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    setTimeout(() => {
        header.classList.add("show");
    }, 600);

    let lastScroll = 0;
    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            // Se rolar para baixo, esconde o header
            header.classList.add("hide");
        } else {
            // Se rolar para cima, mostra o header
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });
});
