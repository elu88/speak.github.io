const quizData = [
 

    { word: " ዛሬ ምሳ ግብዣ እለብኝ", options: ["Today I have a lunch gathering", "Today I’m going home", "Today I’ll have a picnic"], correctAnswer: "Today I have a lunch gathering" },
    
    { word: "የዛሬ ቀጠሮ ተሰሪዘ", options: ["Today's appointment is canceled", "The party was canceled", "I don’t have time today"], correctAnswer: "Today's appointment is canceled" },
    
    { word: "ቀጠሮው ለነገ ከሰአት  ተቀየረ", options: ["The appointment was changed to tomorrow afternoon", "My uncle is coming from Georgia", "There are a lot of people here"], correctAnswer: "The appointment was changed to tomorrow afternoon" },
    
    { word: "እኔ  ሰአት  ማርፍድ  አልወድም", options: ["I don't like being late", "I’m on my way to school", "There’s no time to play"], correctAnswer: "I don't like being late" },
    { word: "እኔ መገኝት ምፈልገው በቀጠሮ  ሰአት  ነው", options: ["I want to be there at the appointment time", "The suitcase won’t fit anymore clothes", "It’s really hot during the day"], correctAnswer: "I want to be there at the appointment time" },
    { word: "እኔ በጣም ርቦኛል", options: ["I am very hungry", "My pillow is cold", "Everyone is busy today"], correctAnswer: "I am very hungry" },
    { word: "የደሞዝ  ጭማሪ  ተደረገ", options: ["The salary was increased", "I lose my shoe", "We need to go shopping"], correctAnswer: "The salary was increased" },
    { word: "ትምህርት መማር እፍልጋለው", options: ["I want to learn", "I want to eat", "My clothes don’t fit"], correctAnswer: "I want to learn" },
    { word: "እኔ  በጣም  ተ ቸግሪለው", options: ["I feel very troubled", "I feel so happy", "School is almost over"], correctAnswer: "I feel very troubled" },
      { word: "መኪና መግዛት እፍልጋለው", options: ["I want to buy a car", "The cat sat on the mat", "He ran to the store"], correctAnswer: "I want to buy a car" },
      { word: "መኪናው ተበላሸ", options: ["The car is ruined", "She loves reading books", "The sky is blue today"], correctAnswer: "The car is ruined" },
      { word: "አስተማሪው መጣ", options: ["The teacher came", "I need a new phone", "We went to the park"], correctAnswer: "The teacher came" },
      { word: "አስተማሪዋ መጣች", options: ["The teacher came", "They play soccer every day", "The cake tastes delicious"], correctAnswer: "The teacher came" },
      { word: "ተማሪዎቹ ረባሾች ንቸው", options: ["The students are disruptive", "He forgot his keys", "She sings beautifully"], correctAnswer: "The students are disruptive" },
      { word: "መኪናው ተበላሸአስተማሪው ከክፍል አባረረኝ", options: ["The teacher kicked me out of the class", "The sun is shining brightly", "He enjoys painting landscapes"], correctAnswer: "The teacher kicked me out of the class" },
      { word: "ወላጅ አምጣ ተባልኩኝ", options: ["I was told to bring a parent", "She always wears a hat", "They bought a new car"], correctAnswer: "I was told to bring a parent" },
      { word: "ዝናብ እየዘነበ ነው", options: ["It is raining", "The dog barked loudly", "I finished my homework"], correctAnswer: "It is raining" },
      { word: "ሱቁ ዝግነው", options: ["The shop is closed", "We watched a movie", "She likes to dance"], correctAnswer: "The shop is closed" },
      { word: "እኔ ልሄድ ነው", options: ["I’m going to go", "He plays the guitar well", "The baby is sleeping"], correctAnswer: "I’m going to go" },
      { word: "መስኮቱን ዝጌው", options: ["Close the window", "They went on vacation", "The flowers are blooming"], correctAnswer: "Close the window" },
      { word: "በሩን ክፍቺው", options: ["Open the door", "He cooks dinner every night", "She drives to work"], correctAnswer: "Open the door" },
      { word: "ዉሀ አምጭልኝ", options: ["Bring me water", "The book was interesting", "We love ice cream"], correctAnswer: "Bring me water" },
      { word: "ቡና ላፍላነው", options: ["I will make coffee", "He studies hard for exams", "She painted a mural"], correctAnswer: "I will make coffee" },
      { word: "ገበያ ልሄድ ነው", options: ["I’m going to the market", "The birds are chirping", "They built a treehouse"], correctAnswer: "I’m going to the market" },
      { word: "እኔ ሱቅ ልሄድ ነው", options: ["I am going to the store", "He enjoys hiking in the mountains", "She writes poetry"], correctAnswer: "I am going to the store" },
      { word: "ልጆች ከትምህርትቤት መጡ", options: ["The children came from school", "The river flows gently", "I need a nap"], correctAnswer: "The children came from school" },
      { word: "ልጄ ትምህርትቤት ሄዳለች", options: ["My daughter went to school", "We saw a shooting star", "She bakes amazing cookies"], correctAnswer: "My daughter went to school" },
      { word: "ልጆቼ ከትምህርትቤት ተመለሱ(መጡ)", options: ["My children came back from school", "He reads the newspaper daily", "They adopted a kitten"], correctAnswer: "My children came back from school" },
      { word: "ልብስ ማጠብ እፈልጋለው", options: ["I want to wash clothes", "The grass is green", "She swims every morning"], correctAnswer: "I want to wash clothes" },
      { word: "ሰራ እየፈለኩ ነው", options: ["I am looking for a job", "He planted a garden", "The snow is falling"], correctAnswer: "I am looking for a job" },
      { word: "ዛሬ ከሰአት ቀጠሮ አለኝ", options: ["I have an appointment this afternoon", "I lost my wallet", "We danced all night"], correctAnswer: "I have an appointment this afternoon" },
      { word: "ዛሬ ሰብሰባ ነበረብኝ", options: ["I had a meeting today", "She collects stamps", "He watches documentaries"], correctAnswer: "I had a meeting today" },
      { word: "የቤት ሰራተኛ እፈልጋለው", options: ["I want a housekeeper", "They love going to the beach", "The moon is full tonight"], correctAnswer: "I want a housekeeper" },
      { word: "ዛሬ በጣም ደስተኛኝ ነኝ", options: ["I’m very happy today", "She makes jewelry", "He listens to podcasts"], correctAnswer: "I’m very happy today" },
      { word: "ከእሰሪዬ ጋር ተጣላን", options: ["I had a fight with my employer", "The cat sat on the mat", "He ran to the store"], correctAnswer: "I had a fight with my employer" },
      { word: "ድመቷ ነጭ ናት", options: ["The cat is white", "She loves reading books", "The sky is blue today"], correctAnswer: "The cat is white" },
      { word: "24 ዓመቴ ነው", options: ["I am 24 years old", "I need a new phone", "We went to the park"], correctAnswer: "I am 24 years old" },
      { word: "ከኔ አጭር ነህ", options: ["You are shorter than me", "They play soccer every day", "The cake tastes delicious"], correctAnswer: "You are shorter than me" },
      { word: "ኮፍያህን ወድጄዋለሁ", options: ["I love your hat", "He forgot his keys", "She sings beautifully"], correctAnswer: "I love your hat" },
      { word: "አያቴ እየመጣች ነው", options: ["My grandma is coming", "The sun is shining brightly", "He enjoys painting landscapes"], correctAnswer: "My grandma is coming" },
      { word: "አበባ አመጣችልኝ", options: ["She brought flowers for me", "She always wears a hat", "They bought a new car"], correctAnswer: "She brought flowers for me" },
      { word: "በጣም ደብሮኛል", options: ["I’m so bored", "The dog barked loudly", "I finished my homework"], correctAnswer: "I’m so bored" },
      { word: "በኋላ እንብላ", options: ["Let’s eat later", "We watched a movie", "She likes to dance"], correctAnswer: "Let’s eat later" },
      { word: "አንድ ላይ እየሄድን ነው", options: ["We are leaving together", "He plays the guitar well", "The baby is sleeping"], correctAnswer: "We are leaving together" },
      { word: "ለ10 ደቂቃ እንሩጥ", options: ["Let’s run for 10 minutes", "They went on vacation", "The flowers are blooming"], correctAnswer: "Let’s run for 10 minutes" },
      { word: "ብዙ የቤት ስራ አለኝ", options: ["I have a lot of homework", "He cooks dinner every night", "She drives to work"], correctAnswer: "I have a lot of homework" },
      { word: "ወንድሜ እቤት ነው", options: ["My brother is at home", "The book was interesting", "We love ice cream"], correctAnswer: "My brother is at home" },
      { word: "በሚቀጥለው ሳምንት ትምህርት አለኝ", options: ["Next week I have school", "He studies hard for exams", "She painted a mural"], correctAnswer: "Next week I have school" },
      { word: "30 የልብስ መስቀያ አለኝ", options: ["I have 30 clothes hangers", "The birds are chirping", "They built a treehouse"], correctAnswer: "I have 30 clothes hangers" },
      { word: "ይህ በጣም የምወደው ዘፈን ነው", options: ["This is my favorite song", "He enjoys hiking in the mountains", "She writes poetry"], correctAnswer: "This is my favorite song" },
      { word: "እየነዳሁ አይደለም", options: ["I am not driving", "The river flows gently", "I need a nap"], correctAnswer: "I am not driving" },
      { word: "እንቁላል እየሠራሁ ነው", options: ["I’m making eggs", "We saw a shooting star", "She bakes amazing cookies"], correctAnswer: "I’m making eggs" },
      { word: "ፎቶዎቹን ላኩልኝ", options: ["Send me the photos", "He reads the newspaper daily", "They adopted a kitten"], correctAnswer: "Send me the photos" },
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