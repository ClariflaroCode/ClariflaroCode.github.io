document.addEventListener("DOMContentLoaded", start);
function start() {
  
  const form = document.getElementById("contacto__formulario");
  form.addEventListener("submit", verifyCaptcha);
  let modal = document.getElementById("modal-exito-fallo-envio");
  let mensajeExitoFracaso = document.getElementById("mensaje-exito-fracaso");
  mensajeExitoFracaso.innerHTML = "Cargando...";
  let img = document.getElementById("pusheen-response");
  img.src = "../img/gif/pusheen-escuchando.gif";

  let closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", () => {
    modal.close();
  });
  let index;
  const arr = [
    "gato",
    "perro",
    "colibri",
    "hamster",
    "burro",
    "delfin",
    "elefante",
    "jirafa",
    "leon",
    "conejo",
    "koala",
    "canguro",
    "hipopotamo",
    "mariposa",
    "murcielago",
    "aguila",
    "narval",
    "vombátido",
    "castor",
    "ornitorrinco",
    "mamut",
    "avestruz",
    "ciervo",
    "liebre",
    "mara",
    "ostrero",
    "tiburon",
    "ballena",
    "caballo",
    "polilla",
    "raton",
    "escarabajo",
    "foca",
    "pinguino",
    "gallina",
    "vaca",
    "gallo",
    "oveja",
    "toro",
    "camaleon",
    "iguana",
    "rinoceronte",
    "cebra",
    "hornero",
    "gorrion",
    "benteveo",
    "paloma",
    "zorro",
    "lobo",
    "tigre",
    "puma",
    "armadillo",
    "pantera",
    "carpincho",
    "cuis",
    "llama",
    "yaguarete",
    "hiena",
    "jabali",
    "oso hormiguero",
    "hormiga",
    "lechuza",
    "buho",
    "loro",
    "cotorra",
    "lemur",
    "topo",
    "comadreja",
    "zarigueya",
    "mono",
    "chimpance",
    "orangutan",
    "erizo",
    "tortuga",
    "abeja",
    "abejorro",
    "avispa",
    "pato",
    "cisne",
    "renacuajo",
    "rana",
    "sapo",
    "cangrejo",
    "pulpo",
    "estrella de mar",
    "pez linterna",
    "mariquita",
    "ajolote",
    "libelula",
    "cuervo",
    "condor",
    "oso",
    "panda",
    "remora",
    "pez espada",
    "caballito de mar",
    "dragon de komodo",
    "oruga",
    "gaviota",
    "cerdito",
    "camello",
    "caracol",
    "bicho bolita",
    "grillo",
    "saltamontes",
    "nutria",
    "ardilla",
    "alacran",
    "escorpion",
    "chinchilla",
    "mantarraya",
    "polilla atlas",
    "clamidosaurio",
  ];

  //#DATO CURIOSO: el clamidosaurio es el reptil en el que se basó uno de los dinosaurios de JURASSIC PARK.
  captchaGenerator();
  function captchaGenerator() {
    index = Math.floor(Math.random() * arr.length);
    console.log(index);
    console.log(arr[index]);
    document.getElementById("captcha-text").innerHTML = arr[index];
  }

  function verifyCaptcha(event) {
    event.preventDefault();
    console.log("entre a verify captcha");
    const userReply = document.getElementById("user-response-captcha").value; 
    if (arr[index] === userReply) {
      //ingresó el captcha correcto
      enviarMensaje();
    } else {
      //ingresó un captcha incorrecto
      document.getElementById("user-response-captcha").value = "";
      document.getElementById("error").innerHTML =
        "Captcha incorrecto. Vuelva a intentarlo";
      captchaGenerator(); //generamos un nuevo captcha
    }
  }
  function enviarMensaje() {
    console.log("entre a enviar mensaje");
    const formData = new FormData(form);
    const datos = new URLSearchParams();
    datos.append("username", formData.get("username"));
    datos.append("email", formData.get("email"));
    datos.append("mensaje", formData.get("mensaje"));

    

    modal.showModal();

    fetch(
      "https://script.google.com/macros/s/AKfycbyO47g7ktxABHRa2loqmH9a_dgqguEnYULfB9SoEPUdf3uA6T8sL5eQdQiaxdb2lrZ9pA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: datos.toString(), 
      }
    )
    .then((response) => {
      response.text().then((result) => {
        mensajeExitoFracaso.innerHTML = "Mensaje enviado con éxito";
        img.src = "../img/gif/pusheen-hi3.png";
        closeButton.classList.add("show");
        console.log("mensaje enviado");
        form.reset();
        captchaGenerator();

      });
    })
    .catch((error) => {
      mensajeExitoFracaso.innerHTML = "El mensaje no se pudo enviar";
      img.src = "../img/gif/pusheen-lluvia.gif";
      closeButton.classList.add("show");
      console.error("error al enviar");
      captchaGenerator();

    });
  }
}
