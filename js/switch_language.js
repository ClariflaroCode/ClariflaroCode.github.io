const idiomaSeleccionado = document.getElementById("encabezado-principal__idioma-select");
idiomaSeleccionado.addEventListener("click", cambiarIdioma);

function cambiarIdioma(){
    if (idiomaSeleccionado.value = "ES") {
        console.log("español");
    } else {
        console.log("ingles");
    }
}