document.addEventListener("DOMContentLoaded", iniciarCambioIdioma);
function iniciarCambioIdioma() {
    const idiomaSeleccionado = document.getElementById("btn-idioma");
    idiomaSeleccionado.addEventListener("click", mostrarMenu);
    let idiomaEscogido = document.getElementById("idioma-elegido");
    let listaIdiomas = document.getElementById("menu-idioma");
    let idiomasDisponibles = document.querySelectorAll(".idioma");
    let idiomaDescripcion = document.getElementById("idioma-elegido-text");
    const texts = document.querySelectorAll('[data-i18n]');
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');

    let traducciones = {};
    const idiomaDelNavegador = navigator.language.split("-")[0].toUpperCase(); //el navegador le manda "es-113213810132" a los idiomas
    cargarTraducciones(idiomaDelNavegador);

    function cargarTraducciones (idioma) {
        console.log(idioma);
        if (idioma != 'ES' && idioma != 'EN') {
            idioma = 'EN';
        }

        //importo el json con las traducciones
        fetch(`../json/${idioma}.json`)
        .then(response => response.json())
        .then(data => {
            traducciones[idioma] = data[idioma];
        
            console.log(idioma);
            cambiarIdioma(idioma);


        })
        .catch(error=> console.error("error"));
    }




    for (const idioma of idiomasDisponibles) {
        idioma.addEventListener("click", (e) => {
            const idiomaClickeado = e.target;
            const idiomaSeleccionado = idiomaClickeado.dataset.lang;
            if (traducciones[idiomaSeleccionado]) {
                cambiarIdioma(idiomaSeleccionado);

            } 
            else {
                cargarTraducciones(idiomaSeleccionado);
            }
            listaIdiomas.classList.remove("show");
        })
    }
    function mostrarMenu(){
        listaIdiomas.classList.toggle("show");    
    }
    function cambiarIdioma(idiomaSeleccionado){
        if (!traducciones[idiomaSeleccionado]) {
            cargarTraducciones(idiomaSeleccionado);
            return;
        }
        console.log(idiomaSeleccionado);
        if (idiomaSeleccionado == "ES") {
            
            console.log("español");
            idiomaEscogido.src = "../img/bandera-argentina.webp";
            idiomaDescripcion.innerHTML = "ES";
        } else { //por defecto está en el idioma universal (?)
            console.log("inglés");
            idiomaEscogido.src = "../img/bandera-inglesa.webp";
            idiomaDescripcion.innerHTML = "EN";    
        }

        for (const text of texts) {
            const clave = text.dataset.i18n;
            if(traducciones[idiomaSeleccionado] && traducciones[idiomaSeleccionado][clave]) {
                text.textContent = traducciones[idiomaSeleccionado][clave];
            } 
            else {
                console.warn(`No se encontró traducción para clave '${clave}' en idioma '${idiomaSeleccionado}'`);
            }

        }
        //placeholders:
        for(const input of placeholders) {
            const clave = input.dataset.i18nPlaceholder; //dato curioso: los guiones que se usen luego de data- se vuelven camelCase en JavaScript
            if(traducciones[idiomaSeleccionado] && traducciones[idiomaSeleccionado][clave]) {
                input.placeholder = traducciones[idiomaSeleccionado][clave];
            } 
            else {
                console.warn(`No se encontró traducción para clave '${clave}' en idioma '${idiomaSeleccionado}'`);
            }
        }

    }
    
}
