// paginaprincipal.js

document.addEventListener("DOMContentLoaded", function() {
    var backgrounds = ["fondo1.png", "fondo2.png"];
    var index = 0;

    function changeBackground() {
        document.body.style.backgroundImage = "url('" + backgrounds[index] + "')";
        index = (index + 1) % backgrounds.length;
    }

    changeBackground(); // Cambiar fondo inicial

    setInterval(changeBackground, 65000); // Cambiar fondo cada 65 segundos
});
