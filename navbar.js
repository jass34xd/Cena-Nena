document.getElementById("navbar").innerHTML = `
  <nav class="navbar">
    <div class="logo">
      <img src="imagenes/logo.jpg" alt="Logo">
    </div>
    <div class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nav-links" id="nav-links">
      <a href="index.html">Inicio</a>
      <a href="menu.html">Menú</a>
      <a href="quienessomos.html">Quiénes somos</a>
      <a href="nuestroservicio.html">Servicios</a>
      <a href="contactos.html">Contacto</a>
    </div>
  </nav>
`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
