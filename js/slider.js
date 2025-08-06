let carrusel = document.querySelector(".estudios__contenedor");
const containerDimension = carrusel.getBoundingClientRect();
const containerWidth = containerDimension.width;
document.getElementById("slider-before-arrow").addEventListener("click", (e) => {
    carrusel.scrollLeft -= containerWidth; 
    console.log("anterior");
})
document.getElementById("slider-next-arrow").addEventListener("click", (e) => {
    carrusel.scrollLeft += containerWidth;
    console.log("siguiente");
    
})