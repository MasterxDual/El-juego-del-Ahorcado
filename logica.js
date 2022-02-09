var palabras = ["CORRER", "MEDICINA", "AMENAZA", "AVESTRUZ"];
var palabraNuevaCampo = document.getElementById("campoTexto");
var matriz = [];

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

//Contabilizamos el número de cada letra posicionada por el usuario tipeando el teclado;
function separarPalabraYSeleccion(tecla) {
    var indices = [];
    var lugaresTipeado = listaPalabraSeparada.indexOf(tecla);
    while(lugaresTipeado != -1) {
        indices.push(lugaresTipeado);
        lugaresTipeado = indices.indexOf(tecla, lugaresTipeado + 1);
    }
        return indices;
}

//Dibujando los guiones bajos de la palabra random
function guionesPalabras() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
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
    var tecla = document.getElementById("letra1").value;
    var codigoTecla = tecla.charCodeAt();
    if((codigoTecla > 64) && (codigoTecla < 91) || (codigoTecla > 96 && codigoTecla < 123)) {
        guionesPalabras();
        letrasCorrectas(tecla);
        console.log(tecla.toUpperCase());
    } 
}

//Graficando letras que están contenidas en la palabra secreta random
function letrasCorrectas(tecla) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var texto = tecla.toUpperCase();
    var lista = separarPalabraYSeleccion(tecla);
            for(i = 0; i < lista.length; i++) {
                    var a = 460 + (80 * lista[i]) + (16 * lista[i]);
                    pincel.beginPath();
                    pincel.font = "italic 48px Arial";
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(texto, a, 727 )
            }
}