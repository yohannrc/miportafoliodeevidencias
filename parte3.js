// Scripts para validación del formulario (si es necesario)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario para validación
    alert("Formulario enviado correctamente");
  });
  