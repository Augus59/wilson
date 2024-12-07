// seleccionamos el elemento cin id "titulo"
const titulo = document.getElementById("titulo");

// seleccionar el boton con id "cambiarTexto"
const  boton = document.getElementById("cambiarTexto");

// anadimos un evento al boton para que, al dar clik, cambie el texto.
boton.addEventListener("click", () => {
    titulo.innerText = "troliado putoooo";
})

boton.addEventListener("click", () => {
    titulo.innerText = "cambiadommm";
    titulo.style.color = "blue";
})

const entrada = document.getElementById("entradaTexto");
const botonActualizar = document.getElementById("actualizarTexto");

botonActualizar.addEventListener("click", () => {
    titulo.innerText = entrada.value;
})


const parrafo = document.getElementById("parrafo");
botonActualizar.addEventListener("click", () => {
    let cincoElementos = new Array(5).fill(null);
    let resultados = cincoElementos.map(() => entrada.value);
    parrafo.innerText = resultados.join("\n");
})