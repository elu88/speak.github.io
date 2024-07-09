// Variables
const buttonContainer = document.getElementById("button-container");
const mainScreen = document.getElementById("main-screen");
const flashcardScreen = document.getElementById("flashcard-screen");
const flashcard = document.getElementById("flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const backButton = document.getElementById("back");

const questions = [
    { question: "ሀ", answer: "he", deck: 1 },
    { question: "ሁ", answer: "hu", deck: 1 },
    { question: "ሂ", answer: "hee", deck: 1 },
    { question: "ሃ", answer: "ha", deck: 1 },
    { question: "ሄ", answer: "hae", deck: 1 },
    { question: "ህ", answer: "h'e", deck: 1 },
    { question: "ሆ", answer: "ho", deck: 1 },
    { question: "ለ", answer: "le", deck: 2 },
    { question: "ሉ", answer: "lu", deck: 2 },
    { question: "ሊ", answer: "lee", deck: 2 },
    { question: "ላ", answer: "la", deck: 2 },
    { question: "ሌ", answer: "lae", deck: 2 },
    { question: "ል", answer: "l'e", deck: 2 },
    { question: "ሎ", answer: "lo", deck: 2 },
    { question: "መ", answer: "me", deck: 4 },
    { question: "ሙ", answer: "mu", deck: 4 },
    { question: "ሚ", answer: "mee", deck: 4 },
    { question: "ማ", answer: "ma", deck: 4 },
    { question: "ሜ", answer: "mae", deck: 4 },
    { question: "ም", answer: "m'e", deck: 4 },
    { question: "ሞ", answer: "mo", deck: 4 },
    { question: "ሠ", answer: "se", deck: 5 },
    { question: "ሡ", answer: "su", deck: 5 },
    { question: "ሢ", answer: "see", deck: 5 },
    { question: "ሣ", answer: "sa", deck: 5 },
    { question: "ሤ", answer: "sae", deck: 5 },
    { question: "ሥ", answer: "s'e", deck: 5 },
    { question: "ሦ", answer: "so", deck: 5 },
    { question: "ረ", answer: "re", deck: 6 },
    { question: "ሩ", answer: "ru", deck: 6 },
    { question: "ሪ", answer: "ree", deck: 6 },
    { question: "ራ", answer: "ra", deck: 6 },
    { question: "ሬ", answer: "rae", deck: 6 },
    { question: "ር", answer: "r'e", deck: 6 },
    { question: "ሮ", answer: "ro", deck: 6 },
    { question: "ሰ", answer: "se", deck: 7 },
    { question: "ሱ", answer: "su", deck: 7 },
    { question: "ሲ", answer: "see", deck: 7 },
    { question: "ሳ", answer: "sa", deck: 7 },
    { question: "ሴ", answer: "sae", deck: 7 },
    { question: "ስ", answer: "s'e", deck: 7 },
    { question: "ሶ", answer: "so", deck: 7 },

    { question: "ሸ", answer: "sh'e", deck: 8 },
    { question: "ሹ", answer: "shu", deck: 8 },
    { question: "ሺ", answer: "shee", deck: 8 },
    { question: "ሻ", answer: "sha", deck: 8 },
    { question: "ሼ", answer: "shae", deck: 8 },
    { question: "ሽ", answer: "sh'i", deck: 8 },
    { question: "ሾ", answer: "sho", deck: 8 },
    { question: "ቀ", answer: "qe", deck: 9 },
    { question: "ቁ", answer: "qu", deck: 9 },
    { question: "ቂ", answer: "qee", deck: 9 },
    { question: "ቃ", answer: "qa", deck: 9 },
    { question: "ቄ", answer: "qae", deck: 9 },
    { question: "ቅ", answer: "q'e", deck: 9 },
    { question: "ቆ", answer: "qo", deck: 9 },
    { question: "በ", answer: "be", deck: 10 },
    { question: "ቡ", answer: "bu", deck: 10 },
    { question: "ቢ", answer: "bee", deck: 10 },
    { question: "ባ", answer: "ba", deck: 10 },
    { question: "ቤ", answer: "bae", deck: 10 },
    { question: "ብ", answer: "b'e", deck: 10 },
    { question: "ቦ", answer: "bo", deck: 10 },
  
    { question: "ቨ", answer: "ve", deck: 27 },
    { question: "ቩ", answer: "vu", deck: 27 },
    { question: "ቪ", answer: "vee", deck: 27 },
    { question: "ቫ", answer: "va", deck: 27 },
    { question: "ቬ", answer: "vae", deck: 27 },
    { question: "ቭ", answer: "v'e", deck: 27 },
    { question: "ቮ", answer: "vo", deck: 27 },
  
    { question: "ተ", answer: "te", deck: 11 },
    { question: "ቱ", answer: "tu", deck: 11 },
    { question: "ቲ", answer: "tee", deck: 11 },
    { question: "ታ", answer: "ta", deck: 11 },
    { question: "ቴ", answer: "tae", deck: 11 },
    { question: "ት", answer: "t'e", deck: 11 },
    { question: "ቶ", answer: "to", deck: 11 },
    { question: "ቸ", answer: "che", deck: 12 },
    { question: "ቹ", answer: "chu", deck: 12 },
    { question: "ቺ", answer: "chee", deck: 12 },
    { question: "ቻ", answer: "cha", deck: 12 },
    { question: "ቼ", answer: "chae", deck: 12 },
    { question: "ች", answer: "ch'e", deck: 12 },
    { question: "ቾ", answer: "cho", deck: 12 },
    { question: "ኀ", answer: "ẖe", deck: 13 },
    { question: "ኁ", answer: "ẖu", deck: 13 },
    { question: "ኂ", answer: "ẖee", deck: 13 },
    { question: "ኃ", answer: "ẖa", deck: 13 },
    { question: "ኄ", answer: "ẖae", deck: 13 },
    { question: "ኅ", answer: "ẖ'e", deck: 13 },
    { question: "ኆ", answer: "ẖo", deck: 13 },
    { question: "ነ", answer: "ne", deck: 14 },
    { question: "ኑ", answer: "nu", deck: 14 },
    { question: "ኒ", answer: "nee", deck: 14 },
    { question: "ና", answer: "na", deck: 14 },
    { question: "ኔ", answer: "nae", deck: 14 },
    { question: "ን", answer: "n'e", deck: 14 },
    { question: "ኖ", answer: "no", deck: 14 },
    { question: "ኘ", answer: "ñe", deck: 15 },
    { question: "ኙ", answer: "ñu", deck: 15 },
    { question: "ኚ", answer: "ñee", deck: 15 },
    { question: "ኛ", answer: "ña", deck: 15 },
    { question: "ኜ", answer: "ñae", deck: 15 },
    { question: "ኝ", answer: "ñ'e", deck: 15 },
    { question: "ኞ", answer: "ño", deck: 15 },
    { question: "አ", answer: "eh", deck: 16 },
    { question: "ኡ", answer: "uh", deck: 16 },
    { question: "ኢ", answer: "ee", deck: 16 },
    { question: "ኣ", answer: "ah", deck: 16 },
    { question: "ኤ", answer: "ae", deck: 16 },
    { question: "እ", answer: "e", deck: 16 },
    { question: "ኦ", answer: "o", deck: 16 },
    { question: "ከ", answer: "ke", deck: 17 },
    { question: "ኩ", answer: "ku", deck: 17 },
    { question: "ኪ", answer: "kee", deck: 17 },
    { question: "ካ", answer: "ka", deck: 17 },
    { question: "ኬ", answer: "kae", deck: 17 },
    { question: "ክ", answer: "k'e", deck: 17 },
    { question: "ኮ", answer: "ko", deck: 17 },
    { question: "ኸ", answer: "khe", deck: 18 },
    { question: "ኹ", answer: "khu", deck: 18 },
    { question: "ኺ", answer: "khee", deck: 18 },
    { question: "ኻ", answer: "kha", deck: 18 },
    { question: "ኼ", answer: "khae", deck: 18 },
    { question: "ኽ", answer: "kh'e", deck: 18 },
    { question: "ኾ", answer: "kho", deck: 18 },
    { question: "ወ", answer: "we", deck: 19 },
    { question: "ዉ", answer: "wu", deck: 19 },
    { question: "ዊ", answer: "wee", deck: 19 },
    { question: "ዋ", answer: "wa", deck: 19 },
    { question: "ዌ", answer: "wae", deck: 19 },
    { question: "ው", answer: "w'e", deck: 19 },
    { question: "ዎ", answer: "wo", deck: 19 },
    { question: "ዐ", answer: "ʿeh", deck: 20 },
    { question: "ዑ", answer: "ʿuh", deck: 20 },
    { question: "ዒ", answer: "ʿee", deck: 20 },
    { question: "ዓ", answer: "ʿah", deck: 20 },
    { question: "ዔ", answer: "ʿae", deck: 20 },
    { question: "ዕ", answer: "ʿe", deck: 20 },
    { question: "ዖ", answer: "ʿo", deck: 20 },
    { question: "ዘ", answer: "ze", deck: 21 },
    { question: "ዙ", answer: "zu", deck: 21 },
    { question: "ዚ", answer: "zee", deck: 21 },
    { question: "ዛ", answer: "za", deck: 21 },
    { question: "ዜ", answer: "zae", deck: 21 },
    { question: "ዝ", answer: "z'e", deck: 21 },
    { question: "ዞ", answer: "zo", deck: 21 },
    { question: "ዠ", answer: "zhe", deck: 22 },
    { question: "ዡ", answer: "zhu", deck: 22 },
    { question: "ዢ", answer: "zhee", deck: 22 },
    { question: "ዣ", answer: "zha", deck: 22 },
    { question: "ዤ", answer: "zhae", deck: 22 },
    { question: "ዥ", answer: "zh'e", deck: 22 },
    { question: "ዦ", answer: "zho", deck: 22 },
    { question: "የ", answer: "ye", deck: 23 },
    { question: "ዩ", answer: "yu", deck: 23 },
    { question: "ዪ", answer: "yee", deck: 23 },
    { question: "ያ", answer: "ya", deck: 23 },
    { question: "ዬ", answer: "yae", deck: 23 },
    { question: "ይ", answer: "y'e", deck: 23 },
    { question: "ዮ", answer: "yo", deck: 23 },
    { question: "ደ", answer: "de", deck: 24 },
    { question: "ዱ", answer: "du", deck: 24 },
    { question: "ዲ", answer: "dee", deck: 24 },
    { question: "ዳ", answer: "da", deck: 24 },
    { question: "ዴ", answer: "dae", deck: 24 },
    { question: "ድ", answer: "d'e", deck: 24 },
    { question: "ዶ", answer: "do", deck: 24 },
    { question: "ጀ", answer: "je", deck: 25 },
    { question: "ጁ", answer: "ju", deck: 25 },
    { question: "ጂ", answer: "jee", deck: 25 },
    { question: "ጃ", answer: "ja", deck: 25 },
    { question: "ጄ", answer: "jae", deck: 25 },
    { question: "ጅ", answer: "j'e", deck: 25 },
    { question: "ጆ", answer: "jo", deck: 25 },
    { question: "ገ", answer: "ge", deck: 26 },
    { question: "ጉ", answer: "gu", deck: 26 },
    { question: "ጊ", answer: "gee", deck: 26 },
    { question: "ጋ", answer: "ga", deck: 26 },
    { question: "ጌ", answer: "gae", deck: 26 },
    { question: "ግ", answer: "g'e", deck: 26 },
    { question: "ጎ", answer: "go", deck: 26 },
    { question: "ጠ", answer: "t'e", deck: 28 },
    { question: "ጡ", answer: "t'u", deck: 28 },
    { question: "ጢ", answer: "t'ee", deck: 27 },
    { question: "ጣ", answer: "t'a", deck: 27 },
    { question: "ጤ", answer: "t'ae", deck: 28 },
    { question: "ጥ", answer: "t'e", deck: 28 },
    { question: "ጦ", answer: "t'o", deck: 28 },
    { question: "ጨ", answer: "ch'e", deck: 29 },
    { question: "ጩ", answer: "ch'u", deck: 29 },
    { question: "ጪ", answer: "ch'ee", deck: 29 },
    { question: "ጫ", answer: "ch'a", deck: 29 },
    { question: "ጬ", answer: "ch'ae", deck: 29 },
    { question: "ጭ", answer: "ch'e", deck: 29 },
    { question: "ጮ", answer: "ch'o", deck: 29 },

    { question: "ጰ", answer: "p'e", deck: 30 },
    { question: "ጱ", answer: "p'u", deck: 30 },
    { question: "ጲ", answer: "p'ee", deck: 30 },
    { question: "ጳ", answer: "p'a", deck: 30 },
    { question: "ጴ", answer: "p'ae", deck: 30 },
    { question: "ጵ", answer: "p'e", deck: 30 },
    { question: "ጶ", answer: "p'o", deck: 30 },

    { question: "ጸ", answer: "tse", deck: 31 },
    { question: "ጹ", answer: "tsu", deck: 31 },
    { question: "ጺ", answer: "tsee", deck: 31 },
    { question: "ጻ", answer: "tsa", deck: 31 },
    { question: "ጼ", answer: "tsae", deck: 31 },
    { question: "ጽ", answer: "ts'e", deck: 31 },
    { question: "ጾ", answer: "tso", deck: 31 },

    { question: "ፀ", answer: "t͟se", deck: 32 },
    { question: "ፁ", answer: "t͟su", deck: 32 },
    { question: "ፂ", answer: "t͟see", deck: 32 },
    { question: "ፃ", answer: "t͟sa", deck: 32 },
    { question: "ፄ", answer: "t͟sae", deck: 32 },
    { question: "ፅ", answer: "t͟s'e", deck: 32 },
    { question: "ፆ", answer: "t͟so", deck: 32 },

    { question: "ፈ", answer: "fe", deck: 33 },
    { question: "ፉ", answer: "fu", deck: 33 },
    { question: "ፊ", answer: "fee", deck: 33 },
    { question: "ፋ", answer: "fa", deck: 33 },
    { question: "ፌ", answer: "fae", deck: 33 },
    { question: "ፍ", answer: "f'e", deck: 33 },
    { question: "ፎ", answer: "fo", deck: 33 },

    { question: "ሐ", answer: "he", deck: 3 },
    { question: "ሑ", answer: "hu", deck: 3 },
    { question: "ሒ", answer: "hee", deck: 3 },
    { question: "ሓ", answer: "ha", deck: 3 },
    { question: "ሔ", answer: "hae", deck: 3 },
    { question: "ሕ", answer: "h'e", deck: 3 },
    { question: "ሖ", answer: "ho", deck: 3 },
  
    { question: "ፐ", answer: "pe", deck: 34 },
    { question: "ፑ", answer: "pu", deck: 34 },
    { question: "ፒ", answer: "pee", deck: 34 },
    { question: "ፓ", answer: "pa", deck: 34 },
    { question: "ፔ", answer: "pae", deck: 34 },
    { question: "ፕ", answer: "p'e", deck: 34 },
    { question: "ፖ", answer: "po", deck: 34 }




    // Add more questions and ensure to assign them to the correct deck
];

// Amharic translations for deck labels
const amharicDeckLabels = [
    "ሀ", "ለ", "ሐ", "መ", "ሠ", "ረ", "ሰ", "ሸ", "ቀ", "በ",
    "ተ", "ቸ", "ኀ", "ነ", "ኘ", "አ", "ከ", "ኸ", "ወ", "ዐ",
    "ዘ", "ዠ", "የ", "ደ", "ጀ", "ገ", "ቨ", "ጠ", "ጨ", "ጰ",
    "ጸ", "ፀ", "ፈ", "ፐ"
];

let currentDeck = [];
let currentIndex = 0;

// Create buttons
for (let i = 1; i <= 34; i++) {
    const button = document.createElement("button");
    button.textContent = amharicDeckLabels[i - 1];
    button.addEventListener("click", () => showDeck(i));
    buttonContainer.appendChild(button);
}

// Show deck of flashcards
function showDeck(deckNumber) {
    mainScreen.classList.add("hidden");
    flashcardScreen.classList.remove("hidden");
    currentDeck = questions.filter(q => q.deck === deckNumber);
    currentIndex = 0;
    if (currentDeck.length > 0) {
        resetFlashcard();
        populateFlashcard();
    } else {
        front.textContent = "No questions in this deck.";
        back.textContent = "";
    }
}

// Populate flashcard
function populateFlashcard() {
    front.textContent = currentDeck[currentIndex].question;
    back.textContent = currentDeck[currentIndex].answer;
}

// Reset flashcard to initial state (blank front and back)
function resetFlashcard() {
    flashcard.classList.remove("flipped");
    front.textContent = "";
    back.textContent = "";
    setTimeout(() => {
        flashcard.classList.remove("flipped");
        front.textContent = currentDeck[currentIndex].question;
        back.textContent = currentDeck[currentIndex].answer;
    }, 200); // Adjust timing to ensure the card is fully flipped before repopulating
}

// Next flashcard
nextButton.addEventListener("click", () => {
    if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
        resetFlashcard();
    }
});

// Previous flashcard
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        resetFlashcard();
    }
});

// Toggle flip
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

// Back to main screen
backButton.addEventListener("click", () => {
    flashcardScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
});