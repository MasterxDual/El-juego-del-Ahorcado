function tableroJuego() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(100, 0, 1200, 800);
}

tableroJuego();