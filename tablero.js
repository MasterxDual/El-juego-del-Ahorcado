function tableroJuego() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(100, 0, 1200, 800);
    pincel.fill();
}
tableroJuego();
function horca() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(506, 503);
    pincel.lineTo(800, 503);
    pincel.stroke();
    pincel.moveTo(590, 503);
    pincel.lineTo(590, 143);
    pincel.stroke();
    pincel.moveTo(590, 146);
    pincel.lineTo(760, 146);
    pincel.stroke();
    pincel.moveTo(757, 146);
    pincel.lineTo(757, 205);
    pincel.stroke();
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(757, 238, 35, 0, 2*3.14);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(757, 272);
    pincel.lineTo(810, 340);
    pincel.stroke();
    pincel.moveTo(757, 272);
    pincel.lineTo(710, 340);
    pincel.stroke();
    pincel.moveTo(757, 272);
    pincel.lineTo(759, 420);
    pincel.stroke();
    pincel.moveTo(759, 418);
    pincel.lineTo(725, 475);
    pincel.stroke();
    pincel.moveTo(759, 418);
    pincel.lineTo(793, 475);
    pincel.stroke();
}
horca();
