// ✨ CUSTOMIZE YOUR MESSAGES HERE! ✨

// Inside Jokes - Add your own!
const insideJokes = [
    "remember that time we {joke}?",
    "still can't believe we {joke}!",
    "{joke} - classic us!",
    "the {joke} incident will never be forgotten 😂"
];

// Replace with your actual inside jokes
const jokes = [
    "couldn't stop laughing at that meme",
    "had that epic food adventure",
    "stayed up all night talking",
    "made that ridiculous plan",
    "tried to cook and failed spectacularly",
    "went on that crazy adventure",
    "did the thing we said we'd never do",
    "created our secret handshake"
];

// Mood-based Fortunes with {name} placeholder
const moodFortunes = {
    happy: [
        "Hey {name}! Your smile is contagious and today proves it! Keep shining! ✨",
        "{name}, your happiness is making the world brighter! Love seeing you this joyful! 🌟",
        "Yay {name}! This energy? It's what makes our friendship amazing! 🎉",
        "{name}, you're radiating good vibes and I'm here for it! Keep it up! 💫",
        "Dear {name}, happiness looks SO good on you! Never change! 😊",
        "{name}, your joy is literally infectious! Spreading smiles everywhere! 🌈"
    ],
    sad: [
        "{name}, tough days don't last but our friendship does. Here for you always 💙",
        "Hey {name}, it's okay to not be okay. Want to talk? I'm just a text away 🤗",
        "{name}, sending you the biggest virtual hug right now. You're stronger than you know 💪",
        "Listen {name}, bad days happen but you're not alone in this. I got you! 💕",
        "{name}, remember: this too shall pass. And I'll be right here with you 🌈",
        "{name}, even on cloudy days, you're still a star. Hang in there! ⭐"
    ],
    excited: [
        "{name}!! YOUR EXCITEMENT IS CONTAGIOUS! What's got you so hyped?! 🚀",
        "OMG {name}! I can feel your energy through the screen! LOVE IT! 🤩",
        "{name}, this is YOUR moment! Go crush whatever you're excited about! 🔥",
        "YESSS {name}! Channel that excitement into something AMAZING! ⚡",
        "{name}, your enthusiasm makes everything more fun! Never lose that! 🎊",
        "WOOHOO {name}! Ride this wave of excitement all the way! 🌊"
    ],
    stressed: [
        "{name}, take a deep breath. You've got this. I believe in you! 🌸",
        "Hey {name}, stress is temporary but your strength is permanent. You're doing great! 💪",
        "{name}, remember to be kind to yourself. You're handling more than anyone knows 💙",
        "Listen {name}, one step at a time. You don't have to do it all at once 🌿",
        "{name}, even on your worst day, you're still amazing. Don't forget that! ✨",
        "{name}, pause, breathe, and know that you're crushing it even when it doesn't feel like it! 🧘"
    ],
    missing: [
        "{name}, distance can't dim our friendship! Missing you SO much right now! 🥺",
        "Hey {name}, thinking of you and all our amazing memories together! Come back soon! 💕",
        "{name}, miles apart but always close at heart. Can't wait for our next adventure! 🌍",
        "Dear {name}, our friendship is worth every mile between us. Miss your face! 😊",
        "{name}, counting down the days until we're together again! You're irreplaceable! 💫",
        "{name}, no amount of distance can break what we have. See you soon! ❤️"
    ],
    chill: [
        "{name}, loving the chill vibes! Sometimes just existing together is enough 😎",
        "Hey {name}, not every moment needs to be epic. This is nice too! 🌊",
        "{name}, your calm energy is exactly what I needed today. Thanks for being you! ☁️",
        "Yo {name}, just vibing with your vibe. This is what friendship is about! 🎵",
        "{name}, peaceful moments with you >>> everything else. Keep being awesome! 🌙",
        "{name}, sometimes the best times are the quiet ones. This is perfect! 🍃"
    ]
};

// Special Message Types
const memoryLane = [
    "Remember when we {memory}, {name}? Those were the days! 🌟",
    "{name}, thinking about the time we {memory} - still makes me smile! 😊",
    "Hey {name}, never forget when we {memory} together! Pure gold! ✨",
    "{name}, that moment when we {memory}? Peak friendship right there! 💫"
];

const memories = [
    "had that epic adventure",
    "laughed until we cried",
    "made those crazy plans at 2 AM",
    "discovered that amazing place",
    "shared our biggest secrets",
    "pulled that all-nighter",
    "went on that spontaneous trip",
    "had the best conversation ever"
];

const compliments = [
    "{name}, the way you {trait}? Absolutely incredible! 🌟",
    "You know what {name}? Your ability to {trait} is genuinely inspiring! 💖",
    "{name}, never stop being someone who can {trait} - it's your superpower! ⚡",
    "Dear {name}, watching you {trait} reminds me why you're amazing! ✨"
];

const traits = [
    "light up every room",
    "stay true to yourself",
    "make everyone feel special",
    "never give up on your dreams",
    "spread kindness everywhere you go",
    "always find the silver lining",
    "lift others up",
    "stay authentic no matter what"
];

const futurePredictions = [
    "{name}, I predict we'll be causing trouble together for at least 50 more years! 🚀",
    "Future forecast for {name}: More laughs, more adventures, more unforgettable memories! 🌈",
    "Prediction: {name} and I are going to have the BEST stories to tell someday! 📖",
    "{name}, crystal ball says: our friendship only gets better from here! 🔮",
    "Fortune sees {name} and I living our best lives together! The future is BRIGHT! ☀️"
];

const gratitudeMoments = [
    "{name}, grateful for you today and every day. You make life better! 🙏",
    "Thank you for being YOU, {name}. My life is richer because you're in it! 💕",
    "{name}, just wanted to say: I appreciate you more than words can express! ✨",
    "Dear {name}, thankful doesn't even begin to cover it. You're a gift! 🎁",
    "{name}, in a world of chaos, you're my constant. Thank you for existing! 💙"
];

// Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const moodScreen = document.getElementById('moodScreen');
const cookieScreen = document.getElementById('cookieScreen');
const nameInput = document.getElementById('nameInput');
const continueBtn = document.getElementById('continueBtn');
const displayName = document.getElementById('displayName');
const moodBtns = document.querySelectorAll('.mood-btn');
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
let userName = '';
let userMood = '';
let isCracked = false;
let cookieCount = 0;
let particles = [];

// Name Input Handler
nameInput.addEventListener('input', () => {
    continueBtn.disabled = nameInput.value.trim().length === 0;
});

continueBtn.addEventListener('click', () => {
    userName = nameInput.value.trim();
    if (userName) {
        displayName.textContent = userName;
        welcomeScreen.classList.add('hidden');
        moodScreen.classList.remove('hidden');
    }
});

// Allow Enter key to continue
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !continueBtn.disabled) {
        continueBtn.click();
    }
});

// Mood Selection
moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        userMood = btn.dataset.mood;
        moodScreen.classList.add('hidden');
        cookieScreen.classList.remove('hidden');
        stats.classList.add('show');
    });
});

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

// Generate Personalized Fortune
function generateFortune() {
    let fortune = '';
    const messageTypes = ['mood', 'memory', 'compliment', 'prediction', 'gratitude', 'inside-joke'];
    const randomType = messageTypes[Math.floor(Math.random() * messageTypes.length)];
    
    switch(randomType) {
        case 'mood':
            const moodMessages = moodFortunes[userMood] || moodFortunes.happy;
            fortune = moodMessages[Math.floor(Math.random() * moodMessages.length)];
            break;
            
        case 'memory':
            const memTemplate = memoryLane[Math.floor(Math.random() * memoryLane.length)];
            const memory = memories[Math.floor(Math.random() * memories.length)];
            fortune = memTemplate.replace('{memory}', memory);
            break;
            
        case 'compliment':
            const compTemplate = compliments[Math.floor(Math.random() * compliments.length)];
            const trait = traits[Math.floor(Math.random() * traits.length)];
            fortune = compTemplate.replace('{trait}', trait);
            break;
            
        case 'prediction':
            fortune = futurePredictions[Math.floor(Math.random() * futurePredictions.length)];
            break;
            
        case 'gratitude':
            fortune = gratitudeMoments[Math.floor(Math.random() * gratitudeMoments.length)];
            break;
            
        case 'inside-joke':
            const jokeTemplate = insideJokes[Math.floor(Math.random() * insideJokes.length)];
            const joke = jokes[Math.floor(Math.random() * jokes.length)];
            fortune = jokeTemplate.replace('{joke}', joke);
            break;
    }
    
    // Replace {name} with actual user name
    return fortune.replace(/{name}/g, userName);
}

// Crack Cookie
function crackCookie() {
    if (isCracked) return;
    
    isCracked = true;
    cookieCount++;
    cookieCountEl.textContent = cookieCount;
    
    cookie.classList.add('cracked');
    createSparkles();
    
    const rect = cookieWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    createParticleExplosion(centerX, centerY);
    
    setTimeout(() => {
        const personalizedFortune = generateFortune();
        fortuneText.textContent = personalizedFortune;
        fortuneContainer.classList.add('show');
        createParticleExplosion(centerX, centerY);
    }, 800);
    
    setTimeout(() => {
        resetBtn.classList.add('show');
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
        if (!isCracked && cookieScreen && !cookieScreen.classList.contains('hidden')) {
            crackCookie();
        } else if (isCracked) {
            resetCookie();
        }
    }
});

// Twinkle effect
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

const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);

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

createFloatingStars();

// Console Easter Egg
console.log('%c✨ Fortune Cookie Magic! ✨', 'font-size: 20px; color: #ff6b9d; font-weight: bold;');
console.log('%cYou found the secret message! 🥠', 'font-size: 14px; color: #c06dff;');
console.log('%cShare this with your friends to spread the love! 💖', 'font-size: 12px; color: #6bc5ff;');
