const flashcard = document.getElementById("flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const counter = document.getElementById("counter");

const questions = [
    { question: "ሀ", answer: "he", cat: "Amharic" },
    { question: "ለ", answer: "le", cat: "Amharic" },
    { question: "መ", answer: "me", cat: "Amharic" },
    { question: "ሠ", answer: "se", cat: "Amharic" },
    { question: "ረ", answer: "re", cat: "Amharic" },
    { question: "ሰ", answer: "se", cat: "Amharic" },
    { question: "ሸ", answer: "sh'e", cat: "Amharic" },
    { question: "ቀ", answer: "qe", cat: "Amharic" },
    { question: "በ", answer: "be", cat: "Amharic" },
    { question: "ቨ", answer: "ve", cat: "Amharic" },
    { question: "ተ", answer: "te", cat: "Amharic" },
    { question: "ቸ", answer: "che", cat: "Amharic" },
    { question: "ኀ", answer: "ẖe", cat: "Amharic" },
    { question: "ነ", answer: "ne", cat: "Amharic" },
    { question: "ኘ", answer: "ñe", cat: "Amharic" },
    { question: "አ", answer: "eh", cat: "Amharic" },
    { question: "ከ", answer: "ke", cat: "Amharic" },
    { question: "ኸ", answer: "khe", cat: "Amharic" },
    { question: "ወ", answer: "we", cat: "Amharic" },
    { question: "ዐ", answer: "ʿeh", cat: "Amharic" },
    { question: "ዘ", answer: "ze", cat: "Amharic" },
    { question: "ዠ", answer: "zhe", cat: "Amharic" },
    { question: "የ", answer: "ye", cat: "Amharic" },
    { question: "ደ", answer: "de", cat: "Amharic" },
    { question: "ጀ", answer: "je", cat: "Amharic" },
    { question: "ገ", answer: "ge", cat: "Amharic" },
    { question: "ጠ", answer: "t'e", cat: "Amharic" },
    { question: "ጨ", answer: "ch’eh", cat: "Amharic" },
    { question: "ጰ", answer: "p’e", cat: "Amharic" },
    { question: "ጸ", answer: "ts’eh", cat: "Amharic" },
    { question: "ፀ", answer: "t͟s’eh", cat: "Amharic" },
    { question: "ፈ", answer: "fe", cat: "Amharic" },
    { question: "ፐ", answer: "pe", cat: "Amharic" }
];

let currentIndex = 0;

function populateFlashcard() {
    front.textContent = questions[currentIndex].question;
    back.textContent = questions[currentIndex].answer;
    counter.textContent = `(${currentIndex + 1}/${questions.length})`;
}

function flipAndUpdateCard(newIndex) {
    if (flashcard.classList.contains("flipped")) {
        flashcard.classList.remove("flipped");
        setTimeout(() => {
            currentIndex = newIndex;
            populateFlashcard();
        }, 600); // Wait for the flip animation to complete before updating content
    } else {
        currentIndex = newIndex;
        populateFlashcard();
    }
}

// Show first flashcard on load
window.onload = function() {
    populateFlashcard();
};

// Next flashcard
next.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        flipAndUpdateCard(currentIndex + 1);
    }
});

// Previous flashcard
prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        flipAndUpdateCard(currentIndex - 1);
    }
});

// Toggle flip
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});