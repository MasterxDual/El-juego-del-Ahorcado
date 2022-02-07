var palabras = ["CORRER", "MEDICINA", "AMENAZA", "AVESTRUZ"];
var palabraNuevaCampo = document.getElementById("campoTexto");

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
console.log(longitudLista);

function separarPalabraYSeleccion() {
    //Seleccionando cada elemento (letra) de la lista de arriba
    for(i = 0; i < listaPalabraSeparada.length; i++) {
      var letras = console.log(listaPalabraSeparada[i]);  
    }    
    return letras;
}
console.log(separarPalabraYSeleccion());

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
guionesPalabras();
