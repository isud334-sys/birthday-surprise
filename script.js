const startButton = document.getElementById("start-surprise");
const heartLayer = document.getElementById("heart-layer");
const moreHeartsButton = document.getElementById("more-hearts");

document.getElementById("year").textContent = new Date().getFullYear();

function releaseHearts(count = 28) {
  const symbols = ["♥", "♡", "💕", "💗", "✦"];
  for (let i = 0; i < count; i++) {
    window.setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "heart-float";
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${14 + Math.random() * 25}px`;
      heart.style.color = ["#ff8fba", "#ffd0e2", "#ff5c9a", "#fff0f6"][Math.floor(Math.random() * 4)];
      heart.style.setProperty("--duration", `${4 + Math.random() * 3}s`);
      heart.style.setProperty("--drift", `${Math.round(Math.random() * 130 - 65)}px`);
      heartLayer.appendChild(heart);
      window.setTimeout(() => heart.remove(), 7500);
    }, i * 90);
  }
}

startButton.addEventListener("click", () => {
  document.querySelectorAll(".hidden-section").forEach((section, index) => {
    window.setTimeout(() => section.classList.add("revealed"), index * 250);
  });
  startButton.textContent = "Surprise opened ♥";
  startButton.disabled = true;
  startButton.style.opacity = "0.75";
  releaseHearts(55);
  window.setTimeout(() => document.getElementById("story").scrollIntoView({ behavior: "smooth" }), 250);
});

moreHeartsButton.addEventListener("click", () => releaseHearts(45));
