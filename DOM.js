let foto = document.querySelector('#fotoCronos')
let texto = document.querySelector('#nombreColor')

let botonNegro = document.querySelector('#Negro');
botonNegro.onmouseover = function(){
    foto.src = 'imagenes/cronosNegro.png'
    texto.textContent = 'Negro vulcano'
}
let botonRojo = document.querySelector('#Rojo');
botonRojo.onmouseover = function(){
    foto.src = 'imagenes/cronosRojo.png'
    texto.textContent = 'Rojo fuego'
}
let botonBlanco = document.querySelector('#Blanco');
botonBlanco.onmouseover = function(){
    foto.src = 'imagenes/cronosBlanco.png'
    texto.textContent = 'Blanco Alaska'
}