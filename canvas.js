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

function letrasGanaste() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var texto = "Ganaste, felicidades!";
    pincel.beginPath();
    pincel.font = "italic 30px Arial";
    pincel.fillStyle = "green";
    pincel.fillText(texto, 870, 285);
}
letrasGanaste();

function letrasPerdiste() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var texto = "Fin del juego!";
    pincel.beginPath();
    pincel.font = "italic 30px Arial";
    pincel.fillStyle = "red";
    pincel.fillText(texto, 870, 285);
}
letrasPerdiste();

//Graficando letras que están contenidas en la palabra secreta random
function letrasCorrectas() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var tecla = document.getElementById("letra1").value.toUpperCase();
    var texto = tecla;
        if(tecla === separarPalabraYSeleccion()) {
            for(i = 0; i < longitudLista; i++) {
                for(j = 0; j < longitudLista; j++) {
                    var a = 460 + (80 * i) + (16 * i);
                    pincel.beginPath();
                    pincel.font = "italic 48px Arial";
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(texto, a, 727 )
                }
            }
        }
}