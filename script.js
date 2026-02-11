// ✨ CUSTOMIZE YOUR MESSAGES HERE! ✨
const fortunes = [
    "Remember when we laughed until we cried? That's the energy you bring to my life! 💖",
    "Distance means nothing when friendship means everything. You're always in my heart! 💙",
    "You're the friend who makes boring stuff fun and fun stuff unforgettable! 🎉",
    "Our inside jokes > everyone else's entire sense of humor 😎✨",
    "Thanks for being the person I can send random memes to at 3 AM 📱🌙",
    "You're not just a friend, you're my chosen family 💜🏠",
    "Even miles apart, you're always close to my heart ❤️🌍",
    "Can't wait for our next adventure together! 🚀🌟",
    "You make life brighter just by being you ✨😊",
    "Friendship level: We don't need to talk every day to know we're always there 🤝💫",
    "You're the reason I believe in good people 🌟👑",
    "Our friendship is like a good playlist - never gets old! 🎵🎶",
    "Thanks for being weird with me. Normal friends are overrated! 🤪🦄",
    "You're proof that the best things in life aren't things - they're people 🥰💝",
    "Every time I think of you, I smile. That's real friendship! 😊🌈",
    "You're the friend who knows all my stories but still wants to hear them again 📖💕",
    "Life gave me a best friend and I got YOU - total jackpot! 🎰✨",
    "Thanks for accepting my weirdness and raising the bar! 🚀😜",
    "You're like a human version of a warm hug 🤗💛",
    "Our friendship is the kind movies are made about 🎬⭐"
];

// Elements
const cookie = document.getElementById('cookie');
const cookieWrapper = document.getElementById('cookieWrapper');
const fortuneContainer = document.getElementById('fortuneContainer');
const fortuneText = document.getElementById('fortuneText');
const resetBtn = document.getElementById('resetBtn');
const stats = document.getElementById('stats');
const cookieCountEl = document.getElementById('cookieCount');
const sparklesContainer = document.getElementById('sparkles');

// Particle Canvas
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// State
let isCracked = false;
let cookieCount = 0;
let particles = [];

// Particle Class
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 4 + 2;
        this.velocity = {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
        };
        this.gravity = 0.15;
        this.friction = 0.99;
        this.opacity = 1;
        this.life = 100;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
    }
    
    update() {
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.velocity.y += this.gravity;
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        
        this.life--;
        this.opacity = this.life / 100;
        
        this.draw();
    }
}

// Create Particle Explosion
function createParticleExplosion(x, y) {
    const colors = ['#ff6b9d', '#c06dff', '#6bc5ff', '#ffd93d', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 80; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
    }
}

// Animate Particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
        if (particle.life <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    });
    
    requestAnimationFrame(animateParticles);
}
animateParticles();

// Create Sparkles
function createSparkles() {
    sparklesContainer.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const angle = (Math.PI * 2 * i) / 20;
            const distance = 150;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            sparkle.style.setProperty('--tx', `${tx}px`);
            sparkle.style.setProperty('--ty', `${ty}px`);
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 800);
        }, i * 30);
    }
}

// Crack Cookie
function crackCookie() {
    if (isCracked) return;
    
    isCracked = true;
    cookieCount++;
    cookieCountEl.textContent = cookieCount;
    
    // Add crack animation
    cookie.classList.add('cracked');
    
    // Create sparkles
    createSparkles();
    
    // Create particle explosion
    const rect = cookieWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    createParticleExplosion(centerX, centerY);
    
    // Show fortune after delay
    setTimeout(() => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneText.textContent = randomFortune;
        fortuneContainer.classList.add('show');
        
        // Create another particle burst
        createParticleExplosion(centerX, centerY);
    }, 800);
    
    // Show buttons and stats
    setTimeout(() => {
        resetBtn.classList.add('show');
        stats.classList.add('show');
    }, 1200);
}

// Reset Cookie
function resetCookie() {
    cookie.classList.remove('cracked');
    fortuneContainer.classList.remove('show');
    resetBtn.classList.remove('show');
    sparklesContainer.innerHTML = '';
    
    isCracked = false;
}

// Event Listeners
cookieWrapper.addEventListener('click', crackCookie);
resetBtn.addEventListener('click', resetCookie);

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!isCracked) {
            crackCookie();
        } else {
            resetCookie();
        }
    }
});

// Add hover sound effect (optional - uncomment to enable)
/*
cookieWrapper.addEventListener('mouseenter', () => {
    // You can add an audio file here
    // const hoverSound = new Audio('hover.mp3');
    // hoverSound.play();
});
*/

// Continuous star twinkling effect
function createTwinkle() {
    const twinkle = document.createElement('div');
    twinkle.style.position = 'fixed';
    twinkle.style.width = '2px';
    twinkle.style.height = '2px';
    twinkle.style.background = 'white';
    twinkle.style.borderRadius = '50%';
    twinkle.style.left = Math.random() * window.innerWidth + 'px';
    twinkle.style.top = Math.random() * window.innerHeight + 'px';
    twinkle.style.opacity = '0';
    twinkle.style.animation = 'twinkle 2s ease-in-out';
    twinkle.style.pointerEvents = 'none';
    twinkle.style.zIndex = '5';
    
    document.body.appendChild(twinkle);
    
    setTimeout(() => twinkle.remove(), 2000);
}

// Add CSS for twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Create random twinkles
setInterval(createTwinkle, 300);

// Create floating background stars
function createFloatingStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'floating-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(star);
    }
}

// Initialize floating stars on page load
createFloatingStars();

// Add cursor trail effect (optional)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Randomly create small particles following cursor
    if (Math.random() > 0.95) {
        particles.push(new Particle(mouseX, mouseY, '#ffffff'));
    }
});

// Console Easter Egg
console.log('%c✨ Fortune Cookie Magic! ✨', 'font-size: 20px; color: #ff6b9d; font-weight: bold;');
console.log('%cYou found the secret message! 🥠', 'font-size: 14px; color: #c06dff;');
console.log('%cShare this with your friends to spread the love! 💖', 'font-size: 12px; color: #6bc5ff;');
