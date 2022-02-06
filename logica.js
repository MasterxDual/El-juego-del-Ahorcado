var palabras = ["TORTICOLIS", "SUPERMERCADO", "GUERRILLERO", "AVESTRUZ"];
var palabraNuevaCampo = document.getElementById("campoTexto");

//Agrega una palabra nueva escrita por el usuario;
function agregarPalabraALista() {
    var palabraNueva = palabraNuevaCampo.value;
    var palabraNueva2 = palabraNueva.replace(/[^a-zA-Z]/g, "");
    palabras.push(palabraNueva2);
    localStorage.setItem("localAgus", palabras); //Guarda la palabra nueva en el almacenamiento local (junto con el array);
}

//Carga la palabra nueva guardada anteriormente en el setItem (junto con el array);
function cargarListaPalabras() {
    var palabras_str = localStorage.getItem("localAgus"); 
    palabras = palabras_str.split(","); //Divide la cadena a través del separador ",". Es decir, donde hay comas, el resultado es dividido en el array resultante. 
    palabras.pop();
    console.log(palabras);
}

//Para asegurarme de que no cargue algo cuando no haya agregado ninguna palabra
function init() {
    if(localStorage.getItem("localAgus") != null) {  
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






