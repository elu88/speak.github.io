const quizData = [
    { word: "ሀ", correctAnswer: "he", options: ["he", "pu", "lee"] },
    { word: "ሁ", correctAnswer: "hu", options: ["hu", "sa", "n’e"] },
    { word: "ሂ", correctAnswer: "hee", options: ["hee", "qu", "wo"] },
    { word: "ሃ", correctAnswer: "ha", options: ["ha", "ee", "r’u"] },
    { word: "ሄ", correctAnswer: "hae", options: ["hae", "ta", "yu"] },
    { word: "ህ", correctAnswer: "h’e", options: ["h’e", "ea", "na"] },
    { word: "ሆ", options: ["bu", "m’a", "ho"], correctAnswer: "ho" },
    { word: "ለ", options: ["hee", "su", "le"], correctAnswer: "le" },
    { word: "ሉ", options: ["na", "kh’a", "lu"], correctAnswer: "lu" },
    { word: "ሊ", options: ["ja", "t’u", "lee"], correctAnswer: "lee" },
    { word: "ላ", options: ["do", "g’u", "la"], correctAnswer: "la" },
    { word: "ሌ", options: ["so", "zhu", "lae"], correctAnswer: "lae" },
    { word: "ል", options: ["x’a", "bu", "l’e"], correctAnswer: "l’e" },
    { word: "ሎ", options: ["mu", "ya", "lo"], correctAnswer: "lo" },
    { word: "መ", options: ["wee", "ju", "me"], correctAnswer: "me" },
    { word: "ሙ", options: ["qe", "wo", "mu"], correctAnswer: "mu" },
    { word: "ሚ", options: ["r’u", "to", "mee"], correctAnswer: "mee" },
    { word: "ማ", options: ["yu", "oo", "ma"], correctAnswer: "ma" },
    { word: "ሜ", options: ["pa", "su", "mae"], correctAnswer: "mae" },
    { word: "ም", options: ["ae", "sa", "m’e"], correctAnswer: "m’e" },
    { word: "ሞ", options: ["du", "fa", "mo"], correctAnswer: "mo" },
    { word: "ሠ", options: ["g’u", "kh’a", "se"], correctAnswer: "se" },
    { word: "ሡ", options: ["tsa", "ch’a", "su"], correctAnswer: "su" },
    { word: "ሢ", options: ["cho", "sh’a", "see"], correctAnswer: "see" }, 
  { word: "ሣ", options: ["na", "kho", "sa"], correctAnswer: "sa" },
{ word: "ሤ", options: ["bo", "qu", "sae"], correctAnswer: "sae" },
{ word: "ሥ", options: ["fo", "ga", "s’e"], correctAnswer: "s’e" },
{ word: "ሦ", options: ["nu", "la", "so"], correctAnswer: "so" },
{ word: "ረ", options: ["pu", "mae", "re"], correctAnswer: "re" },
{ word: "ሩ", options: ["nae", "ja", "ru"], correctAnswer: "ru" },
{ word: "ሪ", options: ["ra", "bu", "ree"], correctAnswer: "ree" },
{ word: "ራ", options: ["qe", "j’ae", "ra"], correctAnswer: "ra" },
{ word: "ሬ", options: ["ha", "lo", "rae"], correctAnswer: "rae" },
{ word: "ር", options: ["wo", "ae", "r’e"], correctAnswer: "r’e" },
{ word: "ሮ", options: ["ta", "yae", "ro"], correctAnswer: "ro" },
{ word: "ሰ", options: ["ee", "p’e", "se"], correctAnswer: "se" },
{ word: "ሱ", options: ["ae", "sh’e", "su"], correctAnswer: "su" },
{ word: "ሲ", options: ["du", "fa", "see"], correctAnswer: "see" },
{ word: "ሳ", options: ["gee", "h’o", "sa"], correctAnswer: "sa" },
{ word: "ሴ", options: ["jo", "kh’e", "sae"], correctAnswer: "sae" },
{ word: "ስ", options: ["la", "zh’a", "s’e"], correctAnswer: "s’e" },
{ word: "ሶ", options: ["xa", "cho", "so"],  correctAnswer: "so" },
{ word: "ሸ", options: ["qae", "w’a", "sh'e"],  correctAnswer: "sh'e" },
{ word: "ሹ", options: ["oo", "ra", "shu"], correctAnswer: "shu" },
{ word: "ሺ", options: ["tsu", "yu", "see"], correctAnswer: "shee" },
{ word: "ሻ", options: ["po", "ae", "sha"], correctAnswer: "sha" },
{ word: "ሼ", options: ["s’u", "ga", "shae"], correctAnswer: "shae" },
{ word: "ሽ", options: ["dae", "f’u", "sh’ee"], correctAnswer: "sh’ee" },
{ word: "ሾ", options: ["gu", "ha", "sho"], correctAnswer: "sho" },
{ word: "ቀ", options: ["jo", "kh’ae", "qe"], correctAnswer: "qe" },
{ word: "ቁ", options: ["lu", "zh’ee", "qu"], correctAnswer: "qu" },
{ word: "ቂ", options: ["xh’a", "ch’ae", "qee"], correctAnswer: "qee" },
{ word: "ቃ", options: ["vo", "bae", "qa"], correctAnswer: "qa" },
{ word: "ቄ", options: ["nae", "mo", "qae"], correctAnswer: "qae" },
{ word: "ቅ", options: ["qo", "wa", "q’e"], correctAnswer: "q’e" },
{ word: "ቆ", options: ["ra", "tae", "qo"], correctAnswer: "qo" },
{ word: "በ", options: ["y’a", "kh’ee", "be"], correctAnswer: "be" },
{ word: "ቡ", options: ["ae", "so", "bu"], correctAnswer: "bu" },
{ word: "ቢ", options: ["d’e", "fo", "bee"], correctAnswer: "bee" },
{ word: "ባ", options: ["n’a", "gee", "ba"], correctAnswer: "ba" },
{ word: "ቤ", options: ["hee", "ja", "bae"], correctAnswer: "bae" },
{ word: "ብ", options: ["kh’a", "lo", "b’e"], correctAnswer: "b’e" },
{ word: "ቦ", options: ["za", "x’ee", "bo"], correctAnswer: "bo" },
{ word: "ቨ", options: ["cho", "r’e", "ve"], correctAnswer: "ve" },
{ word: "ቩ", options: ["q’e", "wo", "vu"], correctAnswer: "vu" },
{ word: "ቪ", options: ["ba", "n’a", "vee"], correctAnswer: "vee" },
{ word: "ቫ", options: ["mo", "q’ee", "va"], correctAnswer: "va" },
{ word: "ቬ", options: ["wo", "ra", "vae"], correctAnswer: "vae" },
{ word: "ቭ", options: ["to", "yu", "v’e"], correctAnswer: "v’e" },
 { word: "ቮ", options: ["sh’o", "da", "vo"], correctAnswer: "vo" },
{ word: "ተ", options: ["fee", "gh’o", "te"], correctAnswer: "te" },
{ word: "ቱ", options: ["yu", "ba", "tu"], correctAnswer: "tu" },
{ word: "ቲ", options: ["bo", "s’e", "tee"], correctAnswer: "tee" },
{ word: "ታ", options: ["ba", "fo", "ta"], correctAnswer: "ta" },
{ word: "ቴ", options: ["la", "ja", "tae"], correctAnswer: "tae" },
{ word: "ት", options: ["mae", "tu", "t’e"], correctAnswer: "t'e" },
{ word: "ቶ", options: ["m’e", "ta", "to"], correctAnswer: "to" },
 { word: "ቸ", options: ["wee", "whee", "che"], correctAnswer: "che" },
{ word: "ቹ", options: ["wu", "me", "chu"], correctAnswer: "chu" },
{ word: "ቺ", options: ["chu", "v’e", "chee"], correctAnswer: "chee" },
{ word: "ቻ", options: ["gha", "ghae", "cha"], correctAnswer: "cha" },
{ word: "ቼ", options: ["ghee", "ghu", "chae"], correctAnswer: "chae" },
{ word: "ች", options: ["fee", "gha", "ch’e"], correctAnswer: "ch’e" },
{ word: "ቾ", options: ["fu", "fa", "cho"], correctAnswer: "cho" },
{ word: "ኀ", options: ["tee", "fo", "ẖe"], correctAnswer: "ẖe" },
{ word: "ኁ", options: ["ta", "tu", "ẖu"], correctAnswer: "ẖu" },
{ word: "ኂ", options: ["ha", "ba", "ẖee"], correctAnswer: "ẖee" },
{ word: "ኃ", options: ["ma", "mee", "ẖa"], correctAnswer: "ẖa" },
{ word: "ኄ", options: ["xho", "mu", "ẖae"], correctAnswer: "ẖae" },
{ word: "ኅ", options: ["xh’e", "xhee", "ẖ’e"], correctAnswer: "ẖ’e" },
{ word: "ኆ", options: ["xhae", "xha", "ẖo"], correctAnswer: "ẖo" },
 { word: "ነ", options: ["xhaa", "xhu", "ne"], correctAnswer: "ne" },
{ word: "ኑ", options: ["vho", "vh’e", "nu"], correctAnswer: "nu" },
{ word: "ኒ", options: ["vhae", "vha", "nee"], correctAnswer: "nee" },
{ word: "ና", options: ["vhu", "vhee", "na"], correctAnswer: "na" },
{ word: "ኔ", options: ["bo", "vha", "nae"], correctAnswer: "nae" },
{ word: "ን", options: ["b’e", "bae", "n’e"], correctAnswer: "n’e" },
{ word: "ኖ", options: ["bee", "bha", "no"], correctAnswer: "no" },
{ word: "ኘ", options: ["bu", "vu", "ñe"], correctAnswer: "ñe" },
{ word: "ኙ", options: ["go", "ba", "ñu"], correctAnswer: "ñu" },
{ word: "ኚ", options: ["ga", "g’e", "ñee"], correctAnswer: "ñee" },
 { word: "ኛ", options: ["gae", "gee", "ña"], correctAnswer: "ña" },
{ word: "ኜ", options: ["gu", "ga", "ñae"], correctAnswer: "ñae" },
{ word: "ኝ", options: ["d’e", "do", "ñ’e"], correctAnswer: "ñ’e" },
{ word: "ኞ", options: ["dae", "da", "ño"], correctAnswer: "ño" },
{ word: "አ", options: ["dee", "du", "eh"], correctAnswer: "eh" },
{ word: "ኡ", options: ["tso", "da", "uh"], correctAnswer: "uh" },
{ word: "ኢ", options: ["ts’e", "tsae", "ee"], correctAnswer: "ee" },
{ word: "ኣ", options: ["tsee", "tsa", "ah"], correctAnswer: "ah" },
{ word: "ኤ", options: ["tsa", "tsu", "ae"], correctAnswer: "ae" },
{ word: "እ", options: ["fu", "fa", "e"], correctAnswer: "e" },
{ word: "ኦ", options: ["x’o", "x’e", "o"], correctAnswer: "o" },
{ word: "ከ", options: ["xae", "xa", "ke"], correctAnswer: "ke" },
{ word: "ኩ", options: ["xee", "xu", "ku"], correctAnswer: "ku" },
{ word: "ኪ", options: ["ae", "ah", "kee"], correctAnswer: "kee" },
{ word: "ካ", options: ["e", "ee", "ka"], correctAnswer: "ka" },
{ word: "ኬ", options: ["o", "tso", "kae"], correctAnswer: "kae" },
{ word: "ክ", options: ["au", "uh", "k’e"], correctAnswer: "k’e" },
{ word: "ኮ", options: ["n’e", "no", "ko"], correctAnswer: "ko" },
{ word: "ኸ", options: ["nae", "na", "khe"], correctAnswer: "khe"},
{ word: "ኹ", options: ["nee", "nu", "khu"], correctAnswer: "khu" },
{ word: "ኺ", options: ["ña", "na", "khee"], correctAnswer: "khee" },
{ word: "ኻ", options: ["ma", "ñu", "kha"], correctAnswer: "kha" },
{ word: "ኼ", options: ["cho", "ñee", "khae"], correctAnswer: "khae" },
{ word: "ኽ", options: ["ch’e", "chae", "kh’e"], correctAnswer: "kh’e" },
{ word: "ኾ", options: ["cha", "chee", "kho"], correctAnswer: "kho" },
{word: "ወ", options: ["chu", "zhu", "we"], correctAnswer: "we" },
{ word: "ዉ", options: ["s’e", "so", "wu"], correctAnswer: "wu" },
{ word: "ዊ", options: ["sae", "sa", "wee"], correctAnswer: "wee" },
{ word: "ዋ", options: ["cha", "see", "wa"], correctAnswer: "wa" },
    { word: "ዌ", options: ["sa", "su", "wae"], correctAnswer: "wae" },
    { word: "ው", options: ["bo", "b’e", "w’e"], correctAnswer: "w’e" },
    { word: "ዎ", options: ["bae", "ba", "wo"], correctAnswer: "wo" },
    { word: "ዐ", options: ["bu", "ba", "'eh"], correctAnswer: "'eh" },
    { word: "ዑ", options: ["bee", "lo", "'uh"], correctAnswer: "'uh" },
    { word: "ዒ", options: ["l’e", "lae", "'ee"], correctAnswer: "'ee" },
    { word: "ዓ", options: ["la", "lee", "'ah"], correctAnswer: "'ah" },
    { word: "ዔ", options: ["lu", "la", "'ae"], correctAnswer: "'ae" },
    { word: "ዕ", options: ["z’e", "zo", "'e"], correctAnswer: "'e" },
    { word: "ዖ", options: ["zae", "za", "'o"], correctAnswer: "'o"},
    { word: "ዘ", options: ["zee", "zu", "ze"], correctAnswer: "ze" },
    { word: "ዙ", options: ["za", "mo", "zu"], correctAnswer: "zu" },
    { word: "ዚ", options: ["mae", "m’e", "zee"], correctAnswer: "zee" },
    { word: "ዛ", options: ["ma", "mee", "za"], correctAnswer: "za" },
    { word: "ዜ", options: ["ma", "mu", "zae"], correctAnswer: "zae" },
    { word: "ዝ", options: ["ko", "k’e", "z’e"], correctAnswer: "z’e" },
    { word: "ዞ", options: ["kae", "ka", "zo"], correctAnswer: "zo" }, 
{ word: "ዠ", options: ["kee", "ku", "zhe"], correctAnswer: "zhe" },
{ word: "ዡ", options: ["ka", "ño", "zhu"], correctAnswer: "zhu" },
{ word: "ዢ", options: ["ñ’e", "ñae", "zhee"], correctAnswer: "zhee" },
{ word: "ዣ", options: ["ña", "ñee", "zha"], correctAnswer: "zha" },
{ word: "ዤ", options: ["ñu", "ña", "zha"], correctAnswer: "zha" },
{ word: "ዥ", options: ["qo", "q’e", "zh’e"], correctAnswer: "zh’e" },
{ word: "ዦ", options: ["qa", "qae", "zho"], correctAnswer: "zho" },
{ word: "የ", options: ["qee", "qu", "ye"], correctAnswer: "ye" },
{ word: "ዩ", options: ["qa", "go", "yu"], correctAnswer: "yu" },
{ word: "ዪ", options: ["gae", "g’e", "yee"], correctAnswer: "yee" },
{ word: "ያ", options: ["ga", "gee", "ya"], correctAnswer: "ya" },
{ word: "ዬ", options: ["gu", "ga", "yae"], correctAnswer: "yae" },
{ word: "ይ", options: ["j’e", "jo", "y’e"], correctAnswer: "y’e" },
{ word: "ዮ", options: ["jae", "ja", "yo"], correctAnswer: "yo" },
{ word: "ደ", options: ["jee", "ju", "de"], correctAnswer: "de" },
{ word: "ዱ", options: ["ja", "da", "du"],  correctAnswer: "du" },
{ word: "ዲ", options: ["vo", "pa", "du"],  correctAnswer: "dee" },
{ word: "ዳ", options: ["vae", "v’e", "da"], correctAnswer: "da" },
{ word: "ዴ", options: ["va", "vee", "dae"], correctAnswer: "dae" },
{ word: "ድ", options: ["va", "vu", "d’e"], correctAnswer: "d’e" },
{ word: "ዶ", options: ["t’e", "to", "do"], correctAnswer: "do" },
{ word: "ጀ", options: ["tae", "ta", "je"], correctAnswer: "je" },
{ word: "ጁ", options: ["tu", "tee", "ju"], correctAnswer: "ju" },
{ word: "ጂ", options: ["hu", "ta", "jee"], correctAnswer: "jee" },
{ word: "ጃ", options: ["ha", "yo", "ja"], correctAnswer: "ja" },
{ word: "ጄ", options: ["yae", "y’e", "jae"], correctAnswer: "jae" },
{ word: "ጅ", options: ["yee", "ya", "j’e"], correctAnswer: "j’e" },
{ word: "ጆ", options: ["ya", "yu", "jo"], correctAnswer: "jo" },
{ word: "ገ", options: ["pu", "pee", "ge"], correctAnswer: "ge" },
{ word: "ጉ", options: ["bo", "pa", "gu"], correctAnswer: "gu" },
{ word: "ጊ", options: ["b’e", "bae", "gee"], correctAnswer: "gee" },
{ word: "ጋ", options: ["ba", "bee", "ga"], correctAnswer: "ga" },
{ word: "ጌ", options: ["la", "bu", "gae"], correctAnswer: "gae" },
{ word: "ግ", options: ["ba", "bu", "g’e"], correctAnswer: "g’e" },
{ word: "ጎ", options: ["ko", "k’e", "go"], correctAnswer: "go" },
{ word: "ጠ", options: ["ka", "kae", "t’e"], correctAnswer: "t’e" },
{ word: "ጡ", options: ["ke", "ku", "t’u"], correctAnswer: "’t’u" },
{ word: "ጢ", options: ["kho", "ka", "t’ee"], correctAnswer: "t’ee" },
{ word: "ጣ", options: ["kh’e", "khae", "t’a"], correctAnswer: "t’a" },
{ word: "ጤ", options: ["kha", "khee", "t’ae"], correctAnswer: "t’ae" },
{ word: "ጥ", options: ["khu", "kha", "t’e"], correctAnswer: "t’e" },
{ word: "ጦ", options: ["m’e", "mo", "t’o"], correctAnswer: "t’o" },
{ word: "ጨ", options: ["mae", "ma", "ch’e"], correctAnswer: "ch’e" },
{ word: "ጩ", options: ["ma", "mee", "ch’u"], correctAnswer: "ch’u" },
{ word: "ጪ", options: ["ro", "mu", "ch’ee"], correctAnswer: "ch’ee" },
{ word: "ጫ", options: ["r’e", "rae", "ch’a"], correctAnswer: "ch’a" },
 { word: "ጬ", options: ["ree", "ra", "ch’ae"], correctAnswer: "ch’ae" },
{ word: "ጭ", options: ["ru", "ra", "ch’e"], correctAnswer: "ch’e" },
{ word: "ጮ", options: ["w’e", "wo", "ch’o"], correctAnswer: "ch’o" },
{ word: "ጰ", options: ["wa", "wae", "p’e"], correctAnswer: "p’e" },
{ word: "ጱ", options: ["wee", "wu", "p’u"], correctAnswer: "p’u" },
{ word: "ጲ", options: ["fo", "wa", "p’ee"], correctAnswer: "p’ee" },
{ word: "ጳ", options: ["f’e", "fae", "p’a"], correctAnswer: "p’a" },
{ word: "ጴ", options: ["fee", "fa", "p’ae"], correctAnswer: "p’ae" },
{ word: "ጵ", options: ["fa", "fu", "p’e"], correctAnswer: "p’e" },
 { word: "ጶ", options: ["’o", "na", "p’o"], correctAnswer: "p’o" },
{ word: "ጸ", options: ["’ee", "ee", "tse"], correctAnswer: "tse" },
{ word: "ጹ", options: ["ah", "uh", "tsu"], correctAnswer: "tsu" },
{ word: "ጺ", options: ["ክብ", "zh’ae", "tsee"], correctAnswer: "tsee" },
{ word: "ጻ", options: ["z’e", "zo", "tsa"], correctAnswer: "tsa" },
{ word: "ጼ", options: ["zae", "za", "tsae"], correctAnswer: "tsae" },
{ word: "ጽ", options: ["zu", "zee", "ts’e"], correctAnswer: "ts’e" },
{ word: "ጾ", options: ["vo", "za", "tso"], correctAnswer: "tso" },
{ word: "ፀ", options: ["vae", "v’e", "tse"], correctAnswer: "tse" },
{ word: "ፁ", options: ["vee", "va", "tsu"], correctAnswer: "tsu" },
{ word: "ፂ", options: ["va", "vu", "tsee"], correctAnswer: "tsee" },
{ word: "ፃ", options: ["cha", "o", "tsa"], correctAnswer: "tsa" },
{ word: "ፄ", options: ["yae", "lae", "tsae"], correctAnswer: "tsae" },
{ word: "ፅ", options: ["l’e", "b’e", "ts’e"], correctAnswer: "ts’e" },
 { word: "ፆ", options: ["ba", "ku", "tso"], correctAnswer: "tso" },
{ word: "ፈ", options: ["ka", "khee", "fe"], correctAnswer: "fe" },
{ word: "ፉ", options: ["su", "wa", "fu"], correctAnswer: "fu" },
{ word: "ፊ", options: ["ma", "wu", "fee"], correctAnswer: "fee" },
{ word: "ፋ", options: ["d’e", "gee", "fa"], correctAnswer: "fa" },
{ word: "ፌ", options: ["ga", "dee", "fae"], correctAnswer: "fae" },
{ word: "ፍ", options: ["du", "gu", "f’e"], correctAnswer: "f’e" },
{ word: "ፎ", options: ["ja", "jae", "fo"], correctAnswer: "fo" },
{ word: "ፐ", options: ["da", "yu", "pe"], correctAnswer: "pe" },
{ word: "ፑ", options: ["t’a", "t’e", "pu"], correctAnswer: "pu" },
{ word: "ፒ", options: ["nee", "nu", "pee"], correctAnswer: "pee" },
 { word: "ፓ", options: ["na", "hae", "pa"], correctAnswer: "pa" },
{ word: "ፔ", options: ["’e", "e", "pae"], correctAnswer: "pae" },
{ word: "ፕ", options: ["ha", "ah","p’e"], correctAnswer: "p’e" },
{ word: "ፖ", options: ["tsa", "tsu", "po"], correctAnswer: "po" },
{ word: "ሐ ", options: ["p’e", "pee", "he"], correctAnswer: "he" },
{ word: "ሑ ", options: ["zh’e", "fu", "hu"], correctAnswer: "hu" },
{ word: "ሒ ", options: ["chae", "lo", "hee"], correctAnswer: "hee" },
 { word: "ሓ", options: ["lu", "la", "ha"], correctAnswer: "ha" },
{ word: "ሔ", options: ["pa", "pu", "hae"], correctAnswer: "hae" },
{ word: "ሕ", options: ["chee", "ta", "h’e"], correctAnswer: "h’e" },
{ word: "ሖ", options: ["zha", "fa", "ho"], correctAnswer: "ho" },
];

let currentQuestion = 0;

function loadQuestion() {
    const currentData = quizData[currentQuestion];
    document.getElementById('word').textContent = currentData.word;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    // Shuffle answer options if available
    let answerOptions = currentData.options ? currentData.options.slice() : currentData.answers.slice();
    shuffleArray(answerOptions);

    answerOptions.forEach((optionValue, index) => {
        const optionLabel = document.createElement('label');
        optionLabel.classList.add('option');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = optionValue;
        const answerBox = document.createElement('div');
        answerBox.classList.add('answer-box');
        answerBox.textContent = optionValue;
        optionLabel.appendChild(input);
        optionLabel.appendChild(answerBox);
        optionsContainer.appendChild(optionLabel);
    });
    
    document.getElementById('result').textContent = '';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('nextBtn').style.display = 'none';
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const resultMessage = document.getElementById('result');
    const currentData = quizData[currentQuestion];

    if (selectedAnswer) {
        if (selectedAnswer.value === currentData.correctAnswer) {
            resultMessage.style.color = 'green';
            resultMessage.textContent = 'Correct!';
        } else {
            resultMessage.style.color = 'red';
            resultMessage.textContent = 'Wrong! Correct answer is: ' + currentData.correctAnswer;
        }
        document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'block';
    } else {
        resultMessage.style.color = 'red';
        resultMessage.textContent = 'Please select an answer.';
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
});

window.onload = loadQuestion;
// Function to shuffle array using Fisher-Yates (Knuth) shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the quizData array
shuffleArray(quizData);


djdjd
