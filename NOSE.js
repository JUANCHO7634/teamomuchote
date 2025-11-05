const heartsContainer = document.querySelector('.hearts');
const symbols = ['💖','💞','💘','💝','💗','💕'];
const mensajes = ["Te Amo 💖", "Je t’aime 💞", "I Love You 💕", "사랑해 💜", "Ich liebe dich 💗"];

function createHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = `${Math.random() * 25 + 10}px`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

function createMensaje() {
  const msg = document.createElement('span');
  msg.classList.add('msg');
  msg.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];
  msg.style.left = Math.random() * 100 + '%';
  msg.style.animationDuration = `${5 + Math.random() * 3}s`;
  heartsContainer.appendChild(msg);
  setTimeout(() => msg.remove(), 7000);
}

setInterval(createHeart, 300);
setInterval(createMensaje, 3500);
