// Demostración del formulario: valida los campos y muestra una confirmación local.
// No envía ni almacena datos. Para recibir consultas reales hace falta un backend o servicio.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const nombre = document.getElementById("nombre").value.trim();
  const carrera = document.getElementById("carrera").value;

  formMessage.textContent = `¡Gracias, ${nombre}! Tu consulta de ejemplo sobre "${carrera}" está lista. Recordá que esta demostración no envía el mensaje.`;
  formMessage.classList.remove("text-danger");
  formMessage.classList.add("text-success", "fw-semibold");
  contactForm.reset();
});
