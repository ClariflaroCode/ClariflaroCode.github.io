document.addEventListener("DOMContentLoaded", iniciarSwitchTheme);
function iniciarSwitchTheme() {
    const switchTheme = document.getElementById("switch-dark-light-mode")
    switchTheme.addEventListener("click", ModoOscuro);
    ModoOscuro();

    function ModoOscuro(){
        const linkedins = document.getElementsByClassName("linkedin");
        const githubs = document.getElementsByClassName("github");

        //1. Debo chequear si el checkbox está tildado o no está tildado, si está tildado quiero que esté oscuro. 
        if (switchTheme.checked) {
            document.getElementById("body").classList.add("fondo_oscuro");
            document.getElementById("body").classList.remove("fondo_claro");    
            document.getElementById("switch-img").src = "img/luna.webp";
            for (const elem of githubs){
                elem.src ="img/github-redondito-color.png";
            }
            for (const elem of linkedins){
                elem.src ="img/linkedin-neon.png";
            }
            
        } else {
            document.getElementById("body").classList.add("fondo_claro");
            document.getElementById("body").classList.remove("fondo_oscuro"); 
            document.getElementById("switch-img").src = "img/solcito.webp";
            for (const elem of githubs){
                elem.src ="img/github-redondo.png";
            }
            for (const elem of linkedins){
                elem.src ="img/linkedin.png";
            }
        }
    }
}

//document.getElementById("contacto__formulario").addEventListener("submit", enviar );
//document.getElementById("contacto__formulario").addEventListener("submit", function () {}); //funcion anonima
//document.getElementById("contacto__formuario").addEventListener("submit", () => { });

