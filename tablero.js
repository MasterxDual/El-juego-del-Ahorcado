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
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(506, 503);
    pincel.lineTo(800, 503);
    pincel.stroke();
    pincel.lineWidth = 4.5;
    pincel.moveTo(590, 503);
    pincel.lineTo(590, 143);
    pincel.stroke();
    pincel.moveTo(588, 145);
    pincel.lineTo(759, 145);
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
    pincel.moveTo(760, 418);
    pincel.lineTo(796, 475);
    pincel.stroke();
}
horca();

function guionesPalabras() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(420, 711);
    pincel.lineTo(500, 711);
    pincel.stroke();
    pincel.moveTo(516, 711);
    pincel.lineTo(596, 711);
    pincel.stroke();
    pincel.moveTo(612, 711);
    pincel.lineTo(692, 711);
    pincel.stroke();
    pincel.moveTo(708, 711);
    pincel.lineTo(788, 711);
    pincel.stroke();
    pincel.moveTo(804, 711);
    pincel.lineTo(884, 711);
    pincel.stroke();
}
guionesPalabras();