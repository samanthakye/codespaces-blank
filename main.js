const letters = document.querySelectorAll('.welcome span');
let angle = 0;

function animate() {
  angle += 0.05; // wave speed
  letters.forEach((letter, i) => {
    const y = Math.sin(angle + i * 0.5) * 20; // wave effect
    letter.style.transform = `translateY(${y}px)`;
    letter.style.color = `hsl(${(angle * 50 + i * 40) % 360}, 100%, 60%)`;
  });
  requestAnimationFrame(animate);
}

animate();
