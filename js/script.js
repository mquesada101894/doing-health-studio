
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      section.classList.add('visible');
    }
  });
});

tsParticles.load("tsparticles", {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        links: { opacity: 0.6 }
      }
    }
  },
  particles: {
    color: { value: "#34ff9f" },
    links: {
      color: "#34ff9f",
      distance: 130,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "out" },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      value: 80,
      density: { enable: true, area: 800 }
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
});
