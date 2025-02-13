// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Cerrar Sesión con confirmación
document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Muestra la sección seleccionada
    document.getElementById(targetId).classList.add("active");

    // Marca el enlace como activo
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Recuperar la fecha de aniversario desde el localStorage
  const anniversaryDate = localStorage.getItem("anniversaryDate");

  if (anniversaryDate) {
    const anniversary = new Date(anniversaryDate);
    const today = new Date();

    // Calcular la diferencia en años, meses y días
    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    // Si el mes actual es anterior al mes de aniversario, restamos 1 año
    if (months < 0) {
      years--;
      months += 12; // Ajustamos los meses a 12 si restamos un año
    }

    // Si el día actual es anterior al día de aniversario, restamos 1 mes
    if (days < 0) {
      months--;
      // Ajustamos los días al último día del mes anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Función para manejar singular o plural
    const yearText = years === 1 ? "año" : "años";
    const monthText = months === 1 ? "mes" : "meses";
    const dayText = days === 1 ? "día" : "días";

    // Mostrar el número de años, meses y días en el dashboard
    document.getElementById(
      "daysCount"
    //Oculto el numero de años para evitar el 0
    // ).innerText = `Ya han pasado ${years} ${yearText}, ${months} ${monthText} y ${days} ${dayText}, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
  ).innerText = `Ya han pasado ${months} ${monthText} y ${days} ${dayText}, desde que comenzó nuestra historia de amor. Me alegra mucho estar aún a tu lado y disfrutar cada momento, eres la persona que amaré de por vida. ¡Te Amoo❤️!`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".gallery-item");
  let showCount = 10;
  
  images.forEach((img, index) => {
      if (index >= showCount) img.style.display = "none";
  });

  document.getElementById("loadMore").addEventListener("click", function () {
      showCount += 10;
      images.forEach((img, index) => {
          if (index < showCount) img.style.display = "block";
      });

      if (showCount >= images.length) this.style.display = "none";
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/skeuomorphism/100/like.png", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

const mensajes = [
    "Eres mi razón de sonreír cada día. 💖",
    "Contigo, cada momento es muy especial. 🌟",
    "Tu amor es mi mayor tesoro. 🥰",
    "Eres mi hoy, mi mañana y mi siempre. 🌹",
    "Te amo más que ayer, pero menos que mañana. ❤️",
    "Gracias por darme tanta felicidad. 😊",
    "Te amo hoy, mañana y siempre. 😘",
    "Eres la mejor parte de mi día. ☀️",
    "Mi corazón late por ti. 💓",
    "Eres mi princesita preciosa. 👑",
    "Eres mi mujer mía y solo mía. 🫶",
    "Gracias por alegrar mis días. ❤️",
    "Eres mi solecito. ☀️",
    "¿Qué pasa calabacita? 🥹",
    "Si estás leyendo esto, quiero que sepas que eres la mujer que le devolvió el brillo a mis ojos. Gracias, gracias y gracias por ser tu, por ser especial conmigo y darme tantos momentos de alegría, juntos. Desde lo más profundo de mi corazón, mi ser y mi niño interior. Te amo. ❤️",
    "Te amo ❤️",
    "Tiburón, Elefante, Abeja, Mapache, Oso... 🫶 ",
    "Gracias a ti a tu familia por lo generosos y amigables que han sido conmigo. Estoy infinitamente agradecido por haberme brindado su hogar, su comida, haberme incluído como un miembro mas de la familia y lo más importante... Por haberme brindado su confianza. 🥹❤️",
    "Please tell me who... Who's getting all my love? (love). Who's getting all my love? Tell me who... Who's getting all my time? All of that used to be mine, oh... 🎵",
    "Cómo te extraño, mi amor. ¿por qué será? Me falta todo en la vida si no estás. Cómo te extraño, mi amor, ¿qué debo hacer? Te extraño tanto que voy a enloquecer... Ay, amooooooooooor, divinooo! Pronto tienes que volver a mí... 🎵",
    "¿No te cansas de alegrar mis días? 😊",
    "Te extraño... 🫠"
];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    mensajeTexto.textContent = mensajeAleatorio;
}

// Mostrar un mensaje aleatorio al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistItems = document.querySelectorAll('.playlist ul li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
        });
    });
});

// JavaScript para mostrar la sorpresa
document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});

