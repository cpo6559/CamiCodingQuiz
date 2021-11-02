document.getElementById("question").style.display = "none";
document.getElementById("option-container").style.display = "none";
document.getElementById("gamepoints").style.display = "none";
document.getElementById("timer").style.display = "none";
document.getElementById("timerName").style.display = "none";
document.getElementById("points").style.display = "none";
var timeLeft = 6;
var elem = document.getElementById('timer');

startbtn.addEventListener("click", function (event) {
  intro.remove();
  // evaluate.remove();
  // next.remove();//be sure to come back and define what needs to be removed
  event.preventDefault();
  document.getElementById("question").style.display = "block";
document.getElementById("option-container").style.display = "block";
// document.getElementById("gamepoints").style.display = "block";
document.getElementById("timer").style.display = "block";
document.getElementById("timerName").style.display = "block";
  if (start) {
    iterate("0");
    }
 
  var timerId = setInterval(countdown, 1000);
  function endgame(){
    document.getElementById("question").style.display = "none";
    document.getElementById("option-container").style.display = "none";
    document.getElementById("gamepoints").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("timerName").style.display = "none";
    event.preventDefault();
    var note = document.createElement("h1");
    note.innerText = "Times Up! Record Your Score Below"
      document.getElementById("panel").append(note)
      document.getElementById("points").style.display = "block";
      
  }
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      console.log("testing123")
      //function endgame that removes existing elements
      endgame();
      
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }}})


 // Questions will be asked
const Questions = [{
  id: 0,
  q: "_______ is the process of finding errors and fixing them within a program.",
  a: [{ text: "Compiling", isCorrect: false },
  { text: "Executing", isCorrect: false },
  { text: "Debugging", isCorrect: true },
  { text: "Scanning", isCorrect: false }
  ]
},
{
  id: 1,
  q: "What does HTML stand for?",
  a: [{ text: "Home Tool Markup Language", isCorrect: false, isSelected: false },
  { text: "Hyper Tele Marking Language", isCorrect: false },
  { text: "Hyperlinks and Text Markup Language", isCorrect: false },
  { text: "Hyper Text Markup Language", isCorrect: true }
  ]

},
{
  id: 2,
  q: "What does Which of the following is true about variable naming conventions in JavaScript?",
  a: [{ text: "JavaScript variable names must begin with a letter or the underscore character.", isCorrect: false, isSelected: false },
  { text: "Both of the above", isCorrect: true },
  { text: "JavaScript variable names are case sensitive.", isCorrect: false },
  { text: "None of the above", isCorrect: false },
  ]
}, 
{

  id: 3,
  q: "How can you make a list that lists the items with bullets?",
  a: [{ text: "DL", isCorrect: false },
  { text: "OL", isCorrect: false },
  { text: "UL", isCorrect: true },
  { text: "List", isCorrect: false },
  ]
}
]
// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "lightgoldenrodyellow";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op1.value;
  if (selected == "true") {
    result[0].innerHTML = "True";
    result[0].style.color = "green";
    if (id < 4) {
      id++;
      iterate(id);
      console.log(id);
    }
  } else {
    result[0].innerHTML = "False";
    result[0].style.color = "red";
    if (id < 4) {
      id++;
      iterate(id);
      console.log(id);
    }
  }
})

// Show selection for op2
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightgoldenrodyellow";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op2.value;
  if (selected == "true") {
    result[0].innerHTML = "True";
    result[0].style.color = "green";
    if (id < 4) {
      id++;
      iterate(id);
      console.log(id);
    }
  } else {
    result[0].innerHTML = "False";
    result[0].style.color = "red";
    if (id < 4) {
      id++;
      iterate(id);
      console.log(id);
    }
  }
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightgoldenrodyellow";
  op4.style.backgroundColor = "lightskyblue";
  selected = op3.value;
  if (selected == "true") {
    result[0].innerHTML = "True";
    result[0].style.color = "green";
    if (id < 4) {
      id++;
      iterate(id);
      console.log(id);
    }
  } else {
    result[0].innerHTML = "False";
    result[0].style.color = "red";
    if (id < 4) {
      id++;
      iterate(id);
      console.log(id);
    }
  }
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightgoldenrodyellow";
  selected = op4.value;
  if (selected == "true") {
    result[0].innerHTML = "True";
    result[0].style.color = "green";
    if (id < 4) {
           endgame();
    }
  } else {
    result[0].innerHTML = "False";
    result[0].style.color = "red";
    if (id < 5) {
     
      endgame();}
  }
 
})

// Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("evaluate");

// // Evaluate method (remove this section)
// evaluate[0].addEventListener("click", () => {
//   if (selected == "true") {
//     result[0].innerHTML = "True";
//     result[0].style.color = "green";
//   } else {
//     result[0].innerHTML = "False";
//     result[0].style.color = "red";
//   }
//   start = false;
// if (id < 4) {
//   id++;
//   iterate(id);
//   console.log(id);
// }
// })
// }

// if (start) {
// iterate("0");
}

// Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
// start = false;
// if (id < 4) {
//   id++;
//   iterate(id);
//   console.log(id);
// }

//})

if(timeLeft==1){

console.log("is this working?")
}
