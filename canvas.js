function tableroJuego() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(100, 0, 1200, 800);
    pincel.fill();
}
tableroJuego();

function letrasGanaste() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var texto = "Ganaste, felicidades!";
    pincel.beginPath();
    pincel.font = "italic 30px Arial";
    pincel.fillStyle = "green";
    pincel.fillText(texto, 870, 285);
}


