
/* main.js — funcionalidades simples para proyecto académico */
// Año en el footer
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Toggle de navegación móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Validación simple del formulario de contacto (demostración)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }
    // Validación simple de email
    const emailOk = /.+@.+\..+/.test(email.value);
    if (!emailOk) {
      alert("Ingresa un email válido, por favor.");
      email.focus();
      return;
    }

    alert("¡Gracias! Tu mensaje se ha registrado localmente para revisión académica.");
    form.reset();
  });
}
