const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  return {
    x: random(0, canvas.width),
    y: random(0, canvas.height / 2),
    radius: random(2, 5),
    color: `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`,
    speedX: random(-2, 2),
    speedY: random(-2, 2)
  };
}

let fireworks = [];

function startFireworks() {
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      fireworks.push(createFirework());
    }
  }, 500);
}

function updateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, index) => {
    fw.x += fw.speedX;
    fw.y += fw.speedY;
    fw.radius -= 0.05;

    if (fw.radius <= 0) {
      fireworks.splice(index, 1);
    } else {
      ctx.beginPath();
      ctx.arc(fw.x, fw.y, fw.radius, 0, Math.PI * 2);
      ctx.fillStyle = fw.color;
      ctx.fill();
    }
  });
  requestAnimationFrame(updateFireworks);
}

startFireworks();
updateFireworks();
