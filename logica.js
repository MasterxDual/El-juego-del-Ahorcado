var palabras = ["CORRER", "MEDICINA", "AMENAZA", "AVESTRUZ"];
var palabraNuevaCampo = document.getElementById("campoTexto");
var desktop2 = document.getElementById("desktop2")

//Agrega una palabra nueva escrita por el usuario;
function agregarPalabraALista() {
    var palabraNueva = palabraNuevaCampo.value;
    var palabraNueva2 = palabraNueva.replace(/[^a-zA-Z]/g, "");
    window.scrollTo(0, 300);
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
    window.scrollTo(0, 300);
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

function horca() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var lista2 = verificarPalabraIncorrecta();
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

function desaparecerElementos() {
    desktop2.style.display = "none";
}
desaparecerElementos()

function aparecerElementos() {
    if(desktop2.style.display == "none") {
        desktop2.style.display = "block"
    }
}