document.getElementById("switch-dark-light-mode").addEventListener("click", ModoOscuro);
ModoOscuro();


function ModoOscuro(){
    let checked = document.getElementById("switch-dark-light-mode").checked;

    //1. Debo chequear si el checkbox está tildado o no está tildado, si está tildado quiero que esté oscuro. 
    if (checked) {
        document.getElementById("body").classList.add("fondo_oscuro");
        document.getElementById("body").classList.remove("fondo_claro");    

        
        document.getElementById("encabezado-principal").classList.add("header_oscuro");
        document.getElementById("encabezado-principal").classList.remove("header_claro"); 

        document.getElementById("encabezado-principal__barra-navegacion").classList.add("nav_oscuro");
        document.getElementById("encabezado-principal__barra-navegacion").classList.remove("nav_claro");   
        
        //querySelectorAll devuelve una lista con todos los elementos que tengan esa clase que pusimos entre comillas. 
        //como es una lista de elemenetos hay que recorrer elemento a elemento. 
        document.getElementById("footer").classList.add("nav_oscuro");
        document.getElementById("footer").classList.remove("nav_claro");  



        /*document.querySelectorAll(".encabezado-principal__nav-lista-menu-item").classList.add("nav_items_oscuro");
        document.querySelectorAll(".encabezado-principal__nav-lista-menu-item").classList.remove("nav_items_claro");    */
        let items = document.querySelectorAll(".encabezado-principal__nav-lista-menu-item-a");
        for (let index = 0; index < items.length; index++) {
            element = items[index];
            element.classList.add("nav_items_oscuro");
            element.classList.remove("nav_items_claro");    
        }
        let items2 = document.querySelectorAll(".footer__a");
        for (let index = 0; index < items2.length; index++) {
            element = items2[index];
            element.classList.add("nav_items_oscuro");
            element.classList.remove("nav_items_claro");    
        }

 
    } else {
        document.getElementById("body").classList.add("fondo_claro");
        document.getElementById("body").classList.remove("fondo_oscuro"); 

        document.getElementById("encabezado-principal").classList.add("header_claro");
        document.getElementById("encabezado-principal").classList.remove("header_oscuro");    

        document.getElementById("encabezado-principal__barra-navegacion").classList.add("nav_claro");
        document.getElementById("encabezado-principal__barra-navegacion").classList.remove("nav_oscuro"); 



        document.getElementById("footer").classList.add("nav_claro");
        document.getElementById("footer").classList.remove("nav_oscuro");    

        /**/ 
        let items = document.querySelectorAll(".encabezado-principal__nav-lista-menu-item-a");
        
        for (let index = 0; index < items.length; index++) {
            element = items[index];
            element.classList.add("nav_items_claro");
            element.classList.remove("nav_items_oscuro");    
        }
        let items2 = document.querySelectorAll(".footer__a");
        for (let index = 0; index < items2.length; index++) {
            element = items2[index];
            element.classList.add("nav_items_claro");
            element.classList.remove("nav_items_oscuro");    
        }

    }
}