const container = document.querySelector('.container');
const messages = ["Te Amo", "Je t'aime", "I Love You", "사랑해", "Ich liebe dich"]; // Puedes agregar más mensajes

function createBubble() {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    bubble.textContent = messages[Math.floor(Math.random() * messages.length)];

    const size = Math.random() * 20 + 10; // Tamaño aleatorio
    bubble.style.fontSize = `${size}px`;

    bubble.style.left = Math.random() * 100 + '%'; // Posición horizontal aleatoria
    bubble.style.animationDuration = Math.random() * 10 + 8 + 's'; // Duración aleatoria de la animación

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000); // Elimina la burbuja después de 5 segundos

}

setInterval(createBubble, 200); // Crea una nueva burbuja cada 200 milisegundos
