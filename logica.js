let palabras = ["TROTAR", "MEDICINA", "FUEGO", "AVESTRUZ"];
let palabraNuevaCampo = document.getElementById("campoTexto");
let desktop1 = document.getElementById("desktop1");
let desktop2 = document.getElementById("desktop2");
let desktop3y4 = document.getElementById("desktop3y4");
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
var arrHayLetra = [];
var arrNoHayLetra = [];

//Agrega una palabra nueva escrita por el usuario;
function agregarPalabraALista() {
    let palabraNueva = palabraNuevaCampo.value;
    let palabraNueva2 = palabraNueva.replace(/[^a-zA-Z]/g, "");
    palabras.push(palabraNueva2);
    localStorage.setItem("Agustin", palabras); //Guarda la palabra nueva en el almacenamiento local (junto con el array);
}

//Carga la palabra nueva guardada anteriormente en el setItem (junto con el array);
function cargarListaPalabras() {
    let palabras_str = localStorage.getItem("Agustin"); 
    palabras = palabras_str.split(","); //Divide la cadena a través del separador ",". Es decir, donde hay comas, el resultado es dividido en el array resultante. 
    palabras.pop();
    console.log(palabras);
}

//Para asegurarme de que no cargue algo cuando no haya agregado ninguna palabra
function init() {
    if(localStorage.getItem("Agustin") != null) {  
        cargarListaPalabras();
    } 
}
init();

//Dibuja el tablero del juego
function tableroJuego() {
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(100, 0, 1200, 800);
    pincel.fill();
}

//Elige una palabra del array al azar;
function palabraAlAzar() {
    let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    return palabraSecreta;
}

//Separando la palabra secreta al azar en una lista separando cada letra
let listaPalabraSeparada = palabraAlAzar().split("");
let longitudLista = listaPalabraSeparada.length;

console.log(listaPalabraSeparada);
console.log(longitudLista);

//Contabilizamos el número de cada letra posicionada por el usuario tipeando el teclado que está en la palabra secreta
function encontrarLetrasCoincidentes() {
    let letra = document.getElementById("inputLetra").value;
    let lugaresTipeado = listaPalabraSeparada.indexOf(letra);
    let noHayLetra = true;
    console.log(lugaresTipeado)
    while(lugaresTipeado != -1) {
            noHayLetra = false;
            arrHayLetra.push(letra);
            dibujarLetra(lugaresTipeado);
            lugaresTipeado = listaPalabraSeparada.indexOf(letra, lugaresTipeado + 1);
            console.log(arrHayLetra);
        }   if(lugaresTipeado === -1 && noHayLetra) {
                arrNoHayLetra.push(letra);
                noSeEncontro()
                console.log(arrNoHayLetra)
            }
}

//Devuelve true si en un array hay uno o mas elementos repetidos
function letrasRepetidas(array) {
    return new Set(array).size !== array.length
}

//Graficando letras que coinciden con la palabra secreta random
function dibujarLetra(indiceLetra) {
    let letra = document.getElementById("inputLetra").value;
    let texto = letra.toUpperCase();
    let a = 443 + (80 * indiceLetra) + (16 * indiceLetra);
    pincel.beginPath(); 
    pincel.font = "italic 60px Arial";
    pincel.fillStyle = "#0A3871";
    pincel.fillText(texto, a, 699)
        if(arrHayLetra.length == longitudLista) {
          letrasGanaste()
        } 
        if(letrasRepetidas(arrHayLetra)) {
            alert("Ya escribiste la letra " + letra + ", por favor intenta con otra");
            arrHayLetra.pop();
        }
}

//Graficando letras y tipo muerto cuando las primeras no coinciden con la palabra secreta random
function noSeEncontro() {
    let letra = document.getElementById("inputLetra").value.toUpperCase();
    for(let i = 0; i < arrNoHayLetra.length; i++) {
        if(arrNoHayLetra.includes(letra, i)) {
            let texto = arrNoHayLetra[i]
            let a = 900 + (30 * i) + (15 * i);
            pincel.beginPath();
            pincel.font = "italic 45px Arial";
            pincel.fillStyle = "#0A3871";
            pincel.fillText(texto, a, 380)
            if(letrasRepetidas(arrNoHayLetra)) {
                alert("Ya escribiste la letra " + letra + ", por favor intenta con otra");
                arrNoHayLetra.pop();
            }
            if(i == 0) {
                base()
            } else if(i == 1) {
                soporte1();
            } else if(i == 2) {
                soporte2();
            } else if(i == 3) {
                soporte3();
            } else if(i == 4) {
                cabeza();
            } else if(i == 5) {
                brazoDerecho();
            } else if(i == 6) {
                brazoIzquierdo();
            } else if(i == 7) {
                cuerpo()
            } else if(i == 8) {
                piernaDerecha();
            } else if(i == 9) {
                piernaIzquierda();
                letrasPerdiste();
            }

        }    
    }
}

//Dibujando los guiones bajos de la palabra secreta random
function guionesPalabras() {
    tableroJuego();
    aparecerElementos()
    window.scrollTo(0, 500);
    for(i = 0; i < longitudLista; i++) {
        for(j = 0; j < longitudLista; j++) {
            let a = 420 + (80 * i) + (16 * j);
            if(i == j) {
                i++;               
            } else if(i > j) {
                j++;
            }
            let b = 420 + (80 * i) + (16 * j);
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
    let letra = document.getElementById("inputLetra").value;
    let codigoTecla = letra.charCodeAt();
    if((codigoTecla > 64) && (codigoTecla < 91)) {
        console.log(letra.toUpperCase());
        encontrarLetrasCoincidentes();
        noSeEncontro();
    }
    
}

//Dibuja la base que sostiene al muñeco
function base() {
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(506, 503);
    pincel.lineTo(800, 503);
    pincel.stroke();
}

//Dibuja el palo vertical que sostiene al muñeco
function soporte1() {
    pincel.fillStyle = "#0A3871";
    pincel.lineWidth = 4.5;
    pincel.beginPath();
    pincel.moveTo(590, 503);
    pincel.lineTo(590, 143);
    pincel.stroke();
    pincel.fillStyle = "#0A3871";
}

//Dibuja el palo horizontal que sostiene al muñeco
function soporte2() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(588, 145);
    pincel.lineTo(759, 145);
    pincel.stroke();
    pincel.fillStyle = "#0A3871";
}

//Dibuja el palo cortito vertical que sostiene al muñeco
function soporte3() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(757, 146);
    pincel.lineTo(757, 205);
    pincel.stroke();
    
}

//Dibuja la cabeza del muñeco
function cabeza() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(757, 238, 35, 0, 2*3.14);
    pincel.stroke();
}

//Dibuja el brazo derecho del muñeco
function brazoDerecho() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(757, 272);
    pincel.lineTo(810, 340);
    pincel.stroke();
}

//Dibuja el brazo izquierdo del muñeco
function brazoIzquierdo() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(757, 272);
    pincel.lineTo(710, 340);
    pincel.stroke();
}

//Dibuja el cuerpo del muñeco
function cuerpo() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(757, 272);
    pincel.lineTo(759, 420);
    pincel.stroke();
}

//Dibuja la pierna izquierda el muñeco
function piernaIzquierda() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(759, 418);
    pincel.lineTo(725, 475);
    pincel.stroke();
}

//Dibuja la pierna derecha del muñeco
function piernaDerecha() {
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(760, 418);
    pincel.lineTo(796, 475);
    pincel.stroke();
}

//La horca completa dibujada
function horca() {
    base();
    soporte1();
    soporte2();
    soporte3();
    cabeza();
    brazoDerecho();
    brazoIzquierdo();
    cuerpo();
    piernaIzquierda()
    piernaDerecha();
}

//Hace desaparecer los elementos de las section segunda y tercera del html
function desaparecerElementos() {
    desktop2.style.display = "none";
    desktop3y4.style.display = "none";
}
desaparecerElementos();

//Hace aparecer los elementos de las section segunda y tercera del html
function aparecerElementos() {
    desktop2.style.display = "block";
    desktop3y4.style.display = "block";
}

//Dibuja el mensaje cuando perdés el juego
function letrasPerdiste() {
    horca();
    let palabraAStrComas = listaPalabraSeparada.toString();
    let palabraAStrSinComas = palabraAStrComas.replace(/,/g, "")
    let texto1 = "Fin del juego!";
    let texto2 =  "La palabra era:" 
    let texto3 = palabraAStrSinComas;
    pincel.beginPath();
    pincel.font = "italic 30px Arial";
    pincel.fillStyle = "red";
    pincel.fillText(texto1, 870, 250);
    pincel.fillText(texto2, 870, 285);
    pincel.fillStyle = "green";
    pincel.fillText(texto3, 870, 321);
}

//Dibuja el mensaje cuando ganás el juego
function letrasGanaste() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var texto = "Ganaste, felicidades!";
    pincel.beginPath();
    pincel.font = "italic 30px Arial";
    pincel.fillStyle = "green";
    pincel.fillText(texto, 870, 285);
}

