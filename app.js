const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir navegación' : 'Cerrar navegación');
  primaryNav?.classList.toggle('is-open', !isOpen);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir navegación');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const form = document.querySelector('#interest-form');
const feedback = document.querySelector('#form-feedback');
const CONTACT_EMAIL = '';

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!feedback) return;
  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const lines = [
    `Nombre: ${formData.get('name')}`,
    `Correo: ${formData.get('email')}`,
    `Empresa: ${formData.get('organization') || 'No indicada'}`,
    `Interés: ${formData.get('interest')}`,
    `Mensaje: ${formData.get('message') || 'Sin mensaje adicional'}`,
  ];
  const subject = encodeURIComponent('Consulta sobre ASTRAI Capital');
  const body = encodeURIComponent(lines.join('\n'));

  if (CONTACT_EMAIL) {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    feedback.textContent = 'Se abrió tu aplicación de correo para que revises y envíes la consulta.';
  } else {
    feedback.textContent = 'La recepción de solicitudes se habilita al conectar el correo de ASTRAI.';
  }
});
