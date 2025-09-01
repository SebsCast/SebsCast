let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

function nextSlide() {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.display = 'block';
}

// Inicializar el slider mostrando el primer slide
slides.forEach((slide, index) => {
  if (index !== currentIndex) {
    slide.style.display = 'none';
  }
});

// Cambiar de slide cada 3 segundos
setInterval(nextSlide, 3000);


// Validación de formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores de los campos
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar usuario
  if (!username) {
    document.getElementById('usernameError').style.display = 'block';
  } else {
    document.getElementById('usernameError').style.display = 'none';
  }

  // Validar contraseña
  if (!password) {
    document.getElementById('passwordError').style.display = 'block';
  } else {
    document.getElementById('passwordError').style.display = 'none';
  }

  // Si todo está correcto, enviar el formulario (por ahora solo muestra un mensaje)
  if (username && password) {
    alert('Formulario enviado');
    // Aquí puedes hacer la petición al backend para validar el login
  }
});

// Funcionalidad para mostrar/ocultar contraseña
const passwordInput = document.getElementById('password');
const togglePassword = document.createElement('span');
togglePassword.textContent = '👁️';
togglePassword.style.cursor = 'pointer';
passwordInput.parentNode.appendChild(togglePassword);

togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
});