(function() {
    var questions = [
      {
      question: "How do you say ‘My grandma is coming’?",
      choices: ["እናቴ እየመጣች ነው", "አያቴ እየመጣች ነው", "ወንድሜ እየመጣች ነው"],
      correctAnswer: "አያቴ እየመጣች ነው"
    },
    {
      question: "How do you say ‘She brought flowers for me’?",
      choices: ["ወርቅ አመጣችልኝ", "አስፈላጊ አመጣችልኝ", "አበባ አመጣችልኝ"],
      correctAnswer: "አበባ አመጣችልኝ"
    },
    {
      question: "How do you say ‘I’m so bored’?",
      choices: ["በጣም ደብሮኛል", "በጣም ተስፋ ላይ ነኝ", "በጣም አስተማማኝ"],
      correctAnswer: "በጣም ደብሮኛል"
    },
    {
      question: "How do you say ‘Let’s eat later’?",
      choices: ["አሁን እንብላ", "በኋላ እንብላ", "እንደገና እንብላ"],
      correctAnswer: "በኋላ እንብላ"
    },
    {
      question: "How do you say ‘We are leaving together’?",
      choices: ["ሁላችንም እየሄድን ነው", "እኛ ብቻ እየሄድን ነው", "አንድ ላይ እየሄድን ነው"],
      correctAnswer: "አንድ ላይ እየሄድን ነው"
    },
    {
      question: "How do you say ‘Let’s run for 10 minutes’?",
      choices: ["ለ10 ደቂቃ እንሩጥ", "ለ5 ደቂቃ እንሩጥ", "ለ15 ደቂቃ እንሩጥ"],
      correctAnswer: "ለ10 ደቂቃ እንሩጥ"
    },
    {
      question: "How do you say ‘I have a lot of homework’?",
      choices: ["ብዙ ክፉ ስራ አለኝ", "ብዙ የቤት ስራ አለኝ", "ብዙ ጥሩ ስራ አለኝ"],
      correctAnswer: "ብዙ የቤት ስራ አለኝ"
    },
    {
      question: "How do you say ‘My brother is at home’?",
      choices: ["አባቴ እቤት ነው", "እንድሜ እቤት ነው", "ወንድሜ እቤት ነው"],
      correctAnswer: "ወንድሜ እቤት ነው"
    },
    {
      question: "How do you say ‘Next week I have school’?",
      choices: ["በቀጣዩ ሳምንት ትምህርት አለኝ", "በሚቀጥለው ሳምንት ትምህርት አለኝ", "በዚህ ሳምንት ትምህርት አለኝ"],
      correctAnswer: "በሚቀጥለው ሳምንት ትምህርት አለኝ"
    },
    {
      question: "How do you say ‘I have 30 clothes hangers’?",
      choices: ["30 የቤት መስቀያ አለኝ", "30 የሰው መስቀያ አለኝ", "30 የልብስ መስቀያ አለኝ"],
      correctAnswer: "30 የልብስ መስቀያ አለኝ"
    },
    {
      question: "How do you say ‘This is my favorite song’?",
      choices: ["ይህ በጣም የምወደው ዘፈን ነው", "ይህ በጣም የምወደው ጫማ ነው", "ይህ በጣም የምወደው መጽሐፍ ነው"],
      correctAnswer: "ይህ በጣም የምወደው ዘፈን ነው"
    },
    {
      question: "How do you say ‘I am not driving’?",
      choices: ["እየነዳሁ ነው", "እየነዳሁ አይደለም ", "እየነዳሁ አልነበር"],
      correctAnswer: "እየነዳሁ አይደለም"
    },
    {
      question: "How do you say ‘I’m making eggs’?",
      choices: ["እንቁላል እየጠበቁ ነው", "እንቁላል እየበላሁ ነው", "እንቁላል እየሠራሁ ነው"],
      correctAnswer: "እንቁላል እየሠራሁ ነው"
    },
    {
      question: "How do you say ‘Send me the photos’?",
      choices: ["ፎቶዎቹን ላኩልኝ", "ስራዎቹን ላኩልኝ", "ገናቶቹን ላኩልኝ"],
      correctAnswer: "ፎቶዎቹን ላኩልኝ"
    },
    {
      question: "How do you say ‘Cold’?",
      choices: ["እርዝተኛ", "ቀዝቃዛ", "የአየር ጥራት"],
      correctAnswer: "ቀዝቃዛ"
    },
    {
      question: "How do you say ‘Flower’?",
      choices: ["ሰማይ", "ጥርስ", "አበባ"],
      correctAnswer: "አበባ"
    },
    {
      question: "How do you say ‘White’?",
      choices: ["ነጭ", "ቀይ", "ሐምሌ"],
      correctAnswer: "ነጭ"
    },
    {
      question: "How do you say ‘Food’?",
      choices: ["ማግስት", "ምግብ", "ጠባብ"],
      correctAnswer: "ምግብ"
    },
    {
      question: "How do you say ‘Hot’?",
      choices: ["ጥሩ", "ቅንጣት", "ሙቅ"],
      correctAnswer: "ሙቅ"
    },
    {
      question: "How do you say ‘Car’?",
      choices: ["መኪና", "ቤት", "እናት"],
      correctAnswer: "መኪና"
    },
    {
      question: "How do you say ‘Sun’?",
      choices: ["አገልጋይ", "ፀሐይ", "ጠዋት"],
      correctAnswer: "ፀሐይ"
    },
    {
      question: "How do you say ‘Night’?",
      choices: ["እልቂት", "ቀን", "ሌሊት"],
      correctAnswer: "ሌሊት"
    },
    {
      question: "How do you say ‘Rain’?",
      choices: ["ዝናብ", "ሰማይ", "ጠፍሮ"],
      correctAnswer: "ዝናብ"
    },
    {
      question: "How do you say ‘Coffee’?",
      choices: ["ሚድያ", "ጠላ", "ቡና"],
      correctAnswer: "ቡና"
    },
    {
      question: "What is the sound for the letter 'ሀ'?",
     choices: ["a", "h", "e"],
      correctAnswer: "h"
    },
    {
      question: "What is the sound for the letter 'ሁ'?",
      choices: ["hi", "ha", "hu"],
      correctAnswer: "hu"
    },
    {
      question: "What is the sound for the letter 'ሂ'?",
      choices: ["hi", "hu", "ho"],
      correctAnswer: "hi"
    },
    {
      question: "What is the sound for the letter 'ሃ'?",
      choices: ["he", "ha", "hi"],
      correctAnswer: "ha"
    },
    {
      question: "What is the sound for the letter 'ሄ'?",
      choices: ["ha", "hu", "he"],
      correctAnswer: "he"
    },
    {
      question: "What is the sound for the letter 'ህ'?",
      choices: ["h", "hi", "hu"],
      correctAnswer: "h"
    },
    {
      question: "What is the sound for the letter 'ሆ'?",
      choices: ["he", "ho", "hu"],
      correctAnswer: "ho"
    },
    {
      question: "What is the sound for the letter 'ለ'?",
      choices: ["la", "le", "l"],
      correctAnswer: "l"
    },
    {
      question: "What is the sound for the letter 'ሉ'?",
      choices: ["lu", "le", "li"],
      correctAnswer: "lu"
    },
    {
      question: "What is the sound for the letter 'ሊ'?",
      choices: ["le", "li", "lu"],
      correctAnswer: "li"
    },
    {
      question: "What is the sound for the letter 'ላ'?",
     choices: ["le", "li", "la"],
      correctAnswer: "la"
    },
    {
      question: "What is the sound for the letter 'ሌ'?",
      choices: ["le", "la", "li"],
      correctAnswer: "le"
    },
    {
      question: "What is the sound for the letter 'ል'?",
      choices: ["li", "l", "lu"],
      correctAnswer: "l"
    },
    {
      question: "What is the sound for the letter 'ሎ'?",
      choices: ["le", "la", "lo"],
      correctAnswer: "lo"
    },
    {
      question: "What is the sound for the letter 'ሐ'?",
      choices: ["h", "ha", "he"],
      correctAnswer: "h"
    },
    {
      question: "What is the sound for the letter 'ሑ'?",
      choices: ["he", "hu", "ha"],
     correctAnswer: "hu"
    },
    {
      question: "What is the sound for the letter 'ሒ'?",
      choices: ["he", "hu", "hi"],
      correctAnswer: "hi"
    },
    {
      question: "What is the sound for the letter 'ሓ'?",
      choices: ["ha", "hi", "he"],
      correctAnswer: "ha"
    },
    {
      question: "What is the sound for the letter 'ሔ'?",
      choices: ["he", "hu", "ha"],
      correctAnswer: "he"
    },
    {
      question: "What is the sound for the letter 'ሕ'?",
      choices: ["he", "h", "hu"],
      correctAnswer: "h"
    },
    {
      question: "What is the sound for the letter 'ሖ'?",
      choices: ["ha", "he", "ho"],
      correctAnswer: "ho"
    },
    {
      question: "What is the sound for the letter 'መ'?",
      choices: ["m", "me", "ma"],
      correctAnswer: "m"
    },
    {
      question: "What is the sound for the letter 'ሙ'?",
      choices: ["me", "mu", "mi"],
      correctAnswer: "mu"
    },
    {
      question: "What is the sound for the letter 'ሚ'?",
      choices: ["mu", "me", "mi"],
      correctAnswer: "mi"
    },
    {
      question: "What is the sound for the letter 'ማ'?",
      choices: ["ma", "me", "mi"],
      correctAnswer: "ma"
    },
    {
      question: "What is the sound for the letter 'ሜ'?",
      choices: ["ma", "me", "mi"],
      correctAnswer: "me"
    },
    {
      question: "What is the sound for the letter 'ም'?",
      choices: ["mu", "mi", "m"],
      correctAnswer: "m"
    },
    {
      question: "What is the sound for the letter 'ሞ'?",
      choices: ["mo", "me", "mu"],
      correctAnswer: "mo"
    }
    ];
  
  
     var numQuestions = 15; // Desired number of questions
  
    // Function to shuffle the questions array
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    // Shuffle questions before slicing
    questions = shuffle(questions).slice(0, numQuestions);
  
    var questionCounter = 0; // Tracks question number
    var selections = []; // Array containing user choices
    var quiz = $('#quiz'); // Quiz div object
    var startButton = $('#start-test'); // Proficiency Test button
    var phoneFrame = $('#phone-frame'); // Phone frame
  
    // Function to start the quiz
    function startQuiz() {
      startButton.on('click', function() {
        phoneFrame.show(); // Show phone frame
        $('#quiz-container').show(); // Show quiz container
        $(this).hide(); // Hide the start button
        displayNext();
      });
    }
  
    // Click handler for the 'next' button
    $('#next').on('click', function(e) {
      e.preventDefault();
  
      if (quiz.is(':animated')) {
        return false;
      }
      choose();
  
      if (selections[questionCounter] === undefined) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
  
    // Click handler for the 'prev' button
    $('#prev').on('click', function(e) {
      e.preventDefault();
  
      if (quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    $(document).ready(function() {
      
   // Start test on button click
    $('#start-test').on('click', function() {
      startTest();
    });
  
    // Handle back button click
    $('#back').on('click', function(e) {
      e.preventDefault();
      $('#phone-frame').hide(); // Hide the phone frame
      $('#start-test').hide(); // Hide the start button again
    });
  
    // Other code ...
  });
  
    // Click handler for the 'Start Over' button
    $('#start').on('click', function(e) {
      e.preventDefault();
  
      if (quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      questions = shuffle(questions).slice(0, numQuestions); // Shuffle and slice questions again on restart
      displayNext();
      $('#start').hide();
    });
  
    // Animates buttons on hover
    $('.button').on('mouseenter', function() {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function() {
      $(this).removeClass('active');
    });
  
    // Creates and returns the div that contains the questions and answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
  
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
  
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
  
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
  
      return qElement;
    }
  
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      var choices = questions[index].choices;
      for (var i = 0; i < choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value="' + choices[i] + '" />';
        input += '<label>' + choices[i] + '</label>';
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
  
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = $('input[name="answer"]:checked').val();
    }
  
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
  
        if (questionCounter < questions.length) {
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
  
          if (selections[questionCounter] !== undefined) {
            $('input[value="' + selections[questionCounter] + '"]').prop('checked', true);
          }
  
          if (questionCounter === 1) {
            $('#prev').show();
          } else if (questionCounter === 0) {
            $('#prev').hide();
            $('#next').show();
          }
        } else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
  
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<p>', { id: 'question' });
  
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] == questions[i].correctAnswer) {
          numCorrect++;
        }
      }
  
      var percentage = (numCorrect / questions.length) * 100;
      var recommendation;
  
      if (percentage >= 90) {
        recommendation = 'Practice on sentences';
      } else if (percentage >= 70) {
        recommendation = 'Practice on words';
      } else if (percentage >= 50) {
        recommendation = 'Practice on letter vowels';
      } else {
        recommendation = 'Practice on letters';
      }
  
      score.append('You got ' + numCorrect + ' questions out of ' + questions.length + ' correct.<br>');
      score.append('Your score is ' + percentage.toFixed(2) + '%.<br>');
      score.append('Recommendation: ' + recommendation + '.');
  
      return score;
    }
  
    startQuiz();
  })();