
//Question bank
var questionBank = [
  {
    question: '_______ is the process of finding errors and fixing them within a program.',
    option: ['Compiling', 'Executing', 'Debugging', 'Scanning'],
    answer: 'Debugging'
  },
  {
    question: 'What does HTML stand for?',
    option: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyper Tele Marking Language ', 'Hyperlinks and Text Markup Language'],
    answer: 'Hyper Text Markup Language'
  },
  {
    question: 'How can you make a list that lists the items with bullets?',
    option: ['DL', 'UL', 'OL', 'List'],
    answer: 'UL'
  },
  {
    question: 'Which of the following is true about variable naming conventions in JavaScript?',
    option: ['JavaScript variable names must begin with a letter or the underscore character.', 'JavaScript variable names are case sensitive.', 'Both of the above.', 'None of the above.'],
    answer: 'Both of the above.'
  }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
// var next= document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

var timeLeft = 30;
  var elem = document.getElementById('timer');

  var timerId = setInterval(countdown, 1000);
// //On start 
startbtn.addEventListener("click", function (event) {
  introductionPage.remove();
  event.preventDefault();
  function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
      span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
  }
})
  //     //Set a timer
  var timeLeft = 30;
  var elem = document.getElementById('timer');

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
        } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }

  // display.myQuestions(event);
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      doSomething();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
      timerId.display();//not defined
    myQuestions();
 }

    //function to display questions
    function displayQuestion() {
      for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
      }
      question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
      option0.innerHTML = questionBank[i].option[0];
      option1.innerHTML = questionBank[i].option[1];
      option2.innerHTML = questionBank[i].option[2];
      option3.innerHTML = questionBank[i].option[3];
      stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
    }

    //function to calculate scores
    function calcScore(e) {
      if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
      }
      else {
        document.getElementById(e.id).style.background = 'tomato';
      }
      setTimeout(nextQuestion, 300);
    }

    //function to display next question
    function nextQuestion() {
      if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
      }
      else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';
      }
    }

    //click events to next button
    next.addEventListener('click', nextQuestion);

    //Back to Quiz button event
    function backToQuiz() {
      location.reload();
    }

    //function to check Answers
    function checkAnswer() {
      var answerBank = document.getElementById('answerBank');
      var answers = document.getElementById('answers');
      answerBank.style.display = 'block';
      scoreboard.style.display = 'none';
      for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
      }
    }


    displayQuestion();
  };
// // storage
// const quizContainer = document.getElementById('quizQs');
// const resultsContainer = document.getElementById('results');
// const startButton = document.getElementById('startbtn');
// // var playBtn = document.querySelector("#play");


// //   playBtn.addEventListener("click", function(event){
// //   playBtn.remove();
// //   event.preventDefault();    
// //   displayNextQuestion();
// //   });
// //array of questions
// const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Fill me in ",
//         b: "Fill me in please",
//         c: "Fill me in thank you"
//       }
//     }
//     ]}
