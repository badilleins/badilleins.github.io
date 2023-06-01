document.getElementById("contact")
// let number = "0997831974"
function copyNumber() {
  // Crea un campo de texto "oculto"
  let aux = document.createElement("input");
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", "0997831974");
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy", swal("My number has been copied to the clipboard", "Contact me via WhatsApp"));
  // Elimina el campo de la página
  document.body.removeChild(aux);
}

function mandarCorreo(){
  window.open('mailto:badilleins@gmail.com');
}