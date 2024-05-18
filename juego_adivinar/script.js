//elegir un numero al azar 
// primero rendondeo hacia abajo , para que exista la posibilidad de que salga el 500 , o el 1 
let numeroAleatorio = Math.floor(Math.random()*500)+1 
// el numero que ingresa la persona 
let numeroEntrada = document.querySelector("#numeroEntrada");
let mensaje = document.querySelector("#mensaje");
//al hacer click en el boton verificar
function comprobarResultado(){
let numeroIngresado = parseInt(numeroEntrada.value ) 
if (numeroIngresado>500 || numeroIngresado < 1 || isNaN(numeroIngresado) ) {
    mensaje.textContent = "¡Error! Ingrese un número valido entre 1 y 500";
    mensaje.style.color = "red";
    mensaje.style.transition ="3s" ;
    return
}
if (numeroIngresado === numeroAleatorio) {
    mensaje.textContent = "¡Felicitaciones! Has acertado";
    mensaje.style.color = "green";
    //una vez que ganas queda desabilidado el numero de entrada 
    numeroEntrada.disabled = true;  
}else if (numeroIngresado < numeroAleatorio) {
    mensaje.textContent = "El número es más alto"
    mensaje.style.color = " red";
    mensaje.style.transition ="3s" ;
} else {
    mensaje.textContent = "El número es más bajo "
    mensaje.style.color = "red";
    mensaje.style.transition ="3s" ;
}}