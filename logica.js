var palabras = ["CORRER", "MEDICINA", "AMENAZA", "AVESTRUZ"];
var palabraNuevaCampo = document.getElementById("campoTexto");
var desktop1 = document.getElementById("desktop1");
var desktop2 = document.getElementById("desktop2");
var desktop3y4 = document.getElementById("desktop3y4");

//Agrega una palabra nueva escrita por el usuario;
function agregarPalabraALista() {
    var palabraNueva = palabraNuevaCampo.value;
    var palabraNueva2 = palabraNueva.replace(/[^a-zA-Z]/g, "");
    palabras.push(palabraNueva2);
    localStorage.setItem("Agus", palabras); //Guarda la palabra nueva en el almacenamiento local (junto con el array);
}

//Carga la palabra nueva guardada anteriormente en el setItem (junto con el array);
function cargarListaPalabras() {
    var palabras_str = localStorage.getItem("Agus"); 
    palabras = palabras_str.split(","); //Divide la cadena a través del separador ",". Es decir, donde hay comas, el resultado es dividido en el array resultante. 
    palabras.pop();
    console.log(palabras);
}

//Para asegurarme de que no cargue algo cuando no haya agregado ninguna palabra
function init() {
    if(localStorage.getItem("Agus") != null) {  
        cargarListaPalabras();
    } 
}
init();

//Elige una palabra del array al azar;
function palabraAlAzar() {
    var palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    return palabraSecreta;
}
console.log(palabraAlAzar());

//Separando la palabra secreta al azar en una lista separando cada letra
var listaPalabraSeparada = palabraAlAzar().split("");
var longitudLista = listaPalabraSeparada.length;

console.log(listaPalabraSeparada);
console.log(longitudLista);

//Contabilizamos el número de cada letra posicionada por el usuario tipeando el teclado que está en la palabra secreta
function verificarPalabraCorrecta() {
    var indicesTipeado = [];
    var tecla = document.getElementById("letra1").value;
    var lugaresTipeado = listaPalabraSeparada.indexOf(tecla);
    while(lugaresTipeado != -1) {
        indicesTipeado.push(lugaresTipeado);
        lugaresTipeado = listaPalabraSeparada.indexOf(tecla, lugaresTipeado + 1);
    }
        return indicesTipeado;
}

//Contabilizamos el número de cada letra posicionada que el usuario tipea y no está contenida en la palabra secreta
function verificarPalabraIncorrecta() {
    var indicesNoTipeado = [];
    var tecla = document.getElementById("letra1").value;
    var lugaresNoTipeado = listaPalabraSeparada.indexOf(tecla);
        if(lugaresNoTipeado === -1) {
            indicesNoTipeado.push(lugaresNoTipeado);
            lugaresNoTipeado = listaPalabraSeparada.indexOf(tecla, lugaresNoTipeado);
        }
        return indicesNoTipeado;
}

//Dibujando los guiones bajos de la palabra random
function guionesPalabras() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    aparecerElementos()
    window.scrollTo(0, 500);
    for(i = 0; i < longitudLista; i++) {
        for(j = 0; j < longitudLista; j++) {
            var a = 420 + (80 * i) + (16 * j);
            if(i == j) {
                i++;               
            } else if(i > j) {
                j++;
            }
            var b = 420 + (80 * i) + (16 * j);
            pincel.strokeStyle = "#0A3871";                 
            pincel.lineWidth = 4;
            pincel.beginPath();          
            pincel.moveTo(a, 711);
            pincel.lineTo(b, 711);
            pincel.stroke();     
        }
    }
}

//Verificamos si la letra presionada es una letra y no otro carácter
function teclaPresionada() {
        guionesPalabras();
    var tecla = document.getElementById("letra1").value;
    var codigoTecla = tecla.charCodeAt();
    if((codigoTecla > 64) && (codigoTecla < 91) || (codigoTecla > 96 && codigoTecla < 123)) {
        letrasCorrectas();
        letrasIncorrectas();
        console.log(tecla.toUpperCase());
    } 
}

//Graficando letras que están contenidas en la palabra secreta random
function letrasCorrectas() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var tecla = document.getElementById("letra1").value;
    var texto = tecla.toUpperCase();
    var lista = verificarPalabraCorrecta();
            for(i = 0; i < lista.length; i++) {
                    var a = 443 + (80 * lista[i]) + (16 * lista[i]);
                    pincel.beginPath();
                    pincel.font = "italic 60px Arial";
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(texto, a, 699 )
            }
}

//Graficando letras que no están contenidas en la palabra secreta random
function letrasIncorrectas() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var tecla = document.getElementById("letra1").value;
    var texto = tecla.toUpperCase();
    var lista2 = verificarPalabraIncorrecta();
        for(i = 0; i < lista2.length; i++) {
            var a = 900 + (20 * lista2[i]) + (5 * lista2[i]);
            pincel.beginPath();
            pincel.font = "italic 45px Arial";
            pincel.fillStyle = "#0A3871";
            pincel.fillText(texto, a, 380 )
        }
}

function base() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(506, 503);
    pincel.lineTo(800, 503);
    pincel.stroke();
}

function soporte1() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.lineWidth = 4.5;
    pincel.moveTo(590, 503);
    pincel.lineTo(590, 143);
    pincel.stroke();
    pincel.fillStyle = "#0A3871";
}

function soporte2() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(588, 145);
    pincel.lineTo(759, 145);
    pincel.stroke();
    pincel.fillStyle = "#0A3871";
}

function soporte3() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(757, 146);
    pincel.lineTo(757, 205);
    pincel.stroke();
    
}

function cabeza() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(757, 238, 35, 0, 2*3.14);
    pincel.stroke();
}

function brazoDerecho() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(757, 272);
    pincel.lineTo(810, 340);
    pincel.stroke();
}

function brazoIzquierdo() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(757, 272);
    pincel.lineTo(710, 340);
    pincel.stroke();
}

function cuerpo() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(757, 272);
    pincel.lineTo(759, 420);
    pincel.stroke();
}

function piernaIzquierda() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(759, 418);
    pincel.lineTo(725, 475);
    pincel.stroke();
}

function piernaDerecha() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(760, 418);
    pincel.lineTo(796, 475);
    pincel.stroke();
}
function horca() {
    base();
    soporte1();
    soporte2();
    soporte3();
    cabeza();
    brazoDerecho()
    brazoIzquierdo();
    cuerpo();
    piernaIzquierda();
    piernaDerecha();
}

function desaparecerElementos() {
    desktop2.style.display = "none";
    desktop3y4.style.display = "none";
}
desaparecerElementos();

function aparecerElementos() {
    desktop2.style.display = "block";
    desktop3y4.style.display = "block";
}


function letrasPerdiste() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    horca();
    var palabraAStrComas = listaPalabraSeparada.toString();
    var palabraAStrSinComas = palabraAStrComas.replace(/,/g, "")
    var texto1 = "Fin del juego!";
    var texto2 =  "La palabra era:" 
    var texto3 = palabraAStrSinComas;
    pincel.beginPath();
    pincel.font = "italic 30px Arial";
    pincel.fillStyle = "red";
    pincel.fillText(texto1, 870, 285);
    pincel.fillText(texto2, 870, 320);
    pincel.fillStyle = "green";
    pincel.fillText(texto3, 870, 356);
}
