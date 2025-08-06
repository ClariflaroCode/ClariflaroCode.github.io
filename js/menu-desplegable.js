document.addEventListener("DOMContentLoaded", startShowMenu);
function startShowMenu(){
    const menuButton = document.getElementById("menu-desplegable");
    menuButton.addEventListener("click", showMenu);
    const navList = document.getElementById("encabezado-principal__nav-lista-menu");
    const navListItem = document.getElementsByClassName("encabezado-principal__nav-lista-menu-item");
    for (const item of navListItem) {
        item.addEventListener ("click", () => {
            navList.classList.remove("show");
        }) 
    }
    function showMenu() {
        navList.classList.toggle("show");
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
        // Estás en desktop
            navList.classList.remove("show");
        }
    });
}
