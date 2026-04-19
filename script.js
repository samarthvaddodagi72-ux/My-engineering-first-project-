const overlay = document.getElementById('start-overlay');
const audio = document.getElementById('birthday-song');
const symbols = ["Δ", "□", "Σ", "π", "∞", "√", "∫", "▽", "+", "×"];

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    audio.play();
    
    // Start Page Flipping Logic
    startBookAnimation();
    
    // Environmental Effects
    setInterval(createHeart, 500);
    setInterval(createCracker, 200);
    setInterval(createMathSymbol, 400);
    startFlowerRain();
});

function startBookAnimation() {
    const pages = [
        document.getElementById('p1'),
        document.getElementById('p2'),
        document.getElementById('p3')
    ];
    let currentPage = 0;

    setInterval(() => {
        if (currentPage < pages.length) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
        } else {
            // Reset book after all pages flip
            setTimeout(() => {
                pages.forEach(p => p.classList.remove('flipped'));
                currentPage = 0;
            }, 2000);
        }
    }, 3000); // Flips every 3 seconds
}

function createMathSymbol() {
    const el = document.createElement('div');
    el.className = 'math-item';
    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(el);
    el.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 0 },
        { opacity: 0.5, offset: 0.5 },
        { transform: `translate(${Math.random()*150}px, ${Math.random()*150}px) rotate(360deg)`, opacity: 0 }
    ], { duration: 5000 });
    setTimeout(() => el.remove(), 5000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    const size = Math.random() * 10 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    document.body.appendChild(heart);
    heart.animate([{ bottom: '-20px', opacity: 1 }, { bottom: '110vh', opacity: 0 }], 
        { duration: Math.random() * 3000 + 4000 });
    setTimeout(() => heart.remove(), 7000);
}

function createCracker() {
    const c = document.createElement('div');
    c.className = 'cracker';
    c.style.left = Math.random() * 100 + "vw";
    c.style.bottom = "0";
    document.body.appendChild(c);
    c.animate([{ transform: 'translate(0,0)', opacity: 1 }, 
               { transform: `translate(${(Math.random()-0.5)*100}px, -200px)`, opacity: 0 }], 
              { duration: 1000 });
    setTimeout(() => c.remove(), 1000);
}

function startFlowerRain() {
    setInterval(() => {
        const f = document.createElement('div');
        f.innerHTML = "🌸";
        f.style.position = "fixed";
        f.style.left = Math.random() * 100 + "vw";
        f.style.top = "-20px";
        document.body.appendChild(f);
        f.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(105vh)' }], { duration: 6000 });
        setTimeout(() => f.remove(), 6000);
    }, 1000);
}
