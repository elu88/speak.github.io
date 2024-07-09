const characters = [
    "ሀ - he", "ሁ - hu", "ሂ - hee", "ሃ - ha", "ሄ - hae", "ህ - h'e", "ሆ - ho", "ለ - le", "ሉ - lu", "ሊ - lee", "ላ - la", "ሌ - lae", "ል - l'e", "ሎ - lo", "ሐ - he", "ሑ - hu", "ሒ - hee", "ሓ - ha", "ሔ - hae", "ሕ - h'e", "ሖ - ho", "መ - me", "ሙ - mu", "ሚ - mee", "ማ - ma", "ሜ - mae", "ም - m'e", "ሞ - mo", "ሠ - se", "ሡ - su", "ሢ - see", "ሣ - sa", "ሤ - sae", "ሥ - s'e", "ሦ - so", "ረ - re", "ሩ - ru", "ሪ - ree", "ራ - ra", "ሬ - rae", "ር - r'e", "ሮ - ro", "ሰ - se", "ሱ - su", "ሲ - see", "ሳ - sa", "ሴ - sae", "ስ - s'e", "ሶ - so", "ሸ - sh'e", "ሹ - shu", "ሺ - shee", "ሻ - sha", "ሼ - shae", "ሽ - sh'i", "ሾ - sho", "ቀ - qe", "ቁ - qu", "ቂ - qee", "ቃ - qa", "ቄ - qae", "ቅ - q'e", "ቆ - qo", "በ - be", "ቡ - bu", "ቢ - bee", "ባ - ba", "ቤ - bae", "ብ - b'e", "ቦ - bo", "ተ - te", "ቱ - tu", "ቲ - tee", "ታ - ta", "ቴ - tae", "ት - t'e", "ቶ - to", "ቸ - che", "ቹ - chu", "ቺ - chee", "ቻ - cha", "ቼ - chae", "ች - ch'e", "ቾ - cho", "ኀ - ẖe", "ኁ - ẖu", "ኂ - ẖee", "ኃ - ẖa", "ኄ - ẖae", "ኅ - ẖ'e", "ኆ - ẖo", "ነ - ne", "ኑ - nu", "ኒ - nee", "ና - na", "ኔ - nae", "ን - n'e", "ኖ - no", "ኘ - ñe", "ኙ - ñu", "ኚ - ñee", "ኛ - ña", "ኜ - ñae", "ኝ - ñ'e", "ኞ - ño", "አ - eh", "ኡ - uh", "ኢ - ee", "ኣ - ah", "ኤ - ae", "እ - e", "ኦ - o", "ከ - ke", "ኩ - ku", "ኪ - kee", "ካ - ka", "ኬ - kae", "ክ - k'e", "ኮ - ko", "ኸ - khe", "ኹ - khu", "ኺ - khee", "ኻ - kha", "ኼ - khae", "ኽ - kh'e", "ኾ - kho", "ወ - we", "ዉ - wu", "ዊ - wee", "ዋ - wa", "ዌ - wae", "ው - w'e", "ዎ - wo", "ዐ - ʿeh", "ዑ - ʿuh", "ዒ - ʿee", "ዓ - ʿah", "ዔ - ʿae", "ዕ - ʿe", "ዖ - ʿo", "ዘ - ze", "ዙ - zu", "ዚ - zee", "ዛ - za", "ዜ - zae", "ዝ - z'e", "ዞ - zo", "ዠ - zhe", "ዡ - zhu", "ዢ - zhee", "ዣ - zha", "ዤ - zhae", "ዥ - zh'e", "ዦ - zho", "የ - ye", "ዩ - yu", "ዪ - yee", "ያ - ya", "ዬ - yae", "ይ - y'e", "ዮ - yo", "ደ - de", "ዱ - du", "ዲ - dee", "ዳ - da", "ዴ - dae", "ድ - d'e", "ዶ - do", "ጀ - je", "ጁ - ju", "ጂ - jee", "ጃ - ja", "ጄ - jae", "ጅ - j'e", "ጆ - jo", "ገ - ge", "ጉ - gu", "ጊ - gee", "ጋ - ga", "ጌ - gae", "ግ - g'e", "ጎ - go", "ጠ - t'e", "ጡ - t'u", "ጢ - t'ee", "ጣ - t'a", "ጤ - t'ae", "ጥ - t'e", "ጦ - t'o", "ጨ - ch'e", "ጩ - ch'u", "ጪ - ch'ee", "ጫ - ch'a", "ጬ - ch'ae", "ጭ - ch'e", "ጮ - ch'o", "ጰ - p'e", "ጱ - p'u", "ጲ - p'ee", "ጳ - p'a", "ጴ - p'ae", "ጵ - p'e", "ጶ - p'o", "ጸ - tse", "ጹ - tsu", "ጺ - tsee", "ጻ - tsa", "ጼ - tsae", "ጽ - ts'e", "ጾ - tso", "ፀ - t͟se", "ፁ - t͟su", "ፂ - t͟see", "ፃ - t͟sa", "ፄ - t͟sae", "ፅ - t͟s'e", "ፆ - t͟so", "ፈ - fe", "ፉ - fu", "ፊ - fee", "ፋ - fa", "ፌ - fae", "ፍ - f'e", "ፎ - fo", "ፐ - pe", "ፑ - pu", "ፒ - pee", "ፓ - pa", "ፔ - pae", "ፕ - p'e", "ፖ - po"
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tracingArea = document.querySelector('.tracing-area');

canvas.width = tracingArea.offsetWidth;
canvas.height = tracingArea.offsetHeight;

let isTracing = false;
let lastX = 0;
let lastY = 0;
let currentChar = null;

ctx.setLineDash([5, 5]);
ctx.lineWidth = 2;
ctx.lineCap = 'round';

function getTouchCoords(e) {
    if (e.touches && e.touches.length) {
        return {
            x: e.touches[0].clientX - canvas.getBoundingClientRect().left,
            y: e.touches[0].clientY - canvas.getBoundingClientRect().top
        };
    } else {
        return {
            x: e.clientX - canvas.getBoundingClientRect().left,
            y: e.clientY - canvas.getBoundingClientRect().top
        };
    }
}

function startTracing(e) {
    e.preventDefault();
    isTracing = true;
    const coords = getTouchCoords(e);
    [lastX, lastY] = [coords.x, coords.y];
}

function trace(e) {
    e.preventDefault();
    if (!isTracing) return;
    const coords = getTouchCoords(e);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    [lastX, lastY] = [coords.x, coords.y];
}

function endTracing(e) {
    e.preventDefault();
    isTracing = false;
}

function drawCharacter(char) {
    currentChar = char;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, canvas.width / 2, canvas.height / 2);
    drawDottedLines();
    playAudio(char);
}

function drawDottedLines() {
    const path = new Path2D();
    ctx.font = '48px Arial';
    const metrics = ctx.measureText(currentChar);
    const halfWidth = metrics.width / 2;
    const halfHeight = 24;
    path.rect(canvas.width / 2 - halfWidth - 10, canvas.height / 2 - halfHeight - 10, metrics.width + 20, 48 + 20);

    ctx.setLineDash([5, 5]);
    ctx.stroke(path);
}

function playAudio(char) {
    const audio = document.getElementById(`audio-${char}`);
    if (audio) {
        audio.play();
    }
}

canvas.addEventListener('touchstart', startTracing);
canvas.addEventListener('touchmove', trace);
canvas.addEventListener('touchend', endTracing);

document.getElementById('clearBtn').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (currentChar) {
 currentChar = char;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(char, 10, 10);
    drawDottedLines();    }
});

document.getElementById('startBtn').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    drawCharacter(randomChar);
  
  function drawCharacter(char) {
    currentChar = char;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(char, 10, 10);
    drawDottedLines();
    playAudio(char);
}

function drawDottedLines() {
    const path = new Path2D();
    ctx.font = '48px Arial';
    const metrics = ctx.measureText(currentChar);
    path.rect(10 - 10, 10 - 10, metrics.width + 20, 48 + 20);

    ctx.setLineDash([5, 5]);
    ctx.stroke(path); 
  
}
});