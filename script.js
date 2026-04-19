const overlay = document.getElementById('start-overlay');
const audio = document.getElementById('birthday-song');

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    
    // Play the 1.mp3.m4a file
    audio.play().catch(error => {
        console.log("Audio play failed. Check if 1.mp3.m4a exists in the folder.");
    });
    
    // Start Effects
    setInterval(createHeart, 400);
    setInterval(createCracker, 150);
    startFlowerRain();
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-50px";
    
    const size = Math.random() * 0.8 + 0.5;
    heart.style.transform = `rotate(45deg) scale(${size})`;
    
    document.body.appendChild(heart);

    const duration = Math.random() * 3 + 4;
    heart.animate([
        { bottom: '-50px', opacity: 1 },
        { bottom: '110vh', opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    setTimeout(() => heart.remove(), duration * 1000);
}

function createCracker() {
    const cracker = document.createElement('div');
    cracker.className = 'cracker';
    cracker.style.left = Math.random() * 100 + "vw";
    cracker.style.bottom = "0px";
    document.body.appendChild(cracker);

    const destX = (Math.random() - 0.5) * 200;
    const destY = - (Math.random() * 200 + 100);

    cracker.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });

    setTimeout(() => cracker.remove(), 1000);
}

function startFlowerRain() {
    setInterval(() => {
        const flower = document.createElement('div');
        flower.innerHTML = "🌸";
        flower.style.position = "fixed";
        flower.style.top = "-50px";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.fontSize = "20px";
        flower.style.zIndex = "4";
        document.body.appendChild(flower);

        flower.animate([
            { transform: 'translateY(0) rotate(0deg)' },
            { transform: 'translateY(110vh) rotate(360deg)' }
        ], {
            duration: 5000,
            easing: 'linear'
        });

        setTimeout(() => flower.remove(), 5000);
    }, 500);
}
