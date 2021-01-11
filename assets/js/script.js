// Array of questions
var questions = [
    { question: "Commonly used data types DO NOT include:", 
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},

{ question: "The condition in an if/else statment is enclosed with...", 
choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
answer: "curly brackets"
},

{ question: "Arrays in JavaScript can be used to store...", 
choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
answer:  "all of the above"
},

{ question: "String values must be enclosed within ____ when being assigned to variables.", 
choices: ["commas", "curly brackets", "quotes", "parenthesis"],
answer: "quotes"
},

{ question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
answer: "console.log"
},
];

// Start/Rules of Coding Quiz
var startButton = document.querySelector("#start")
var rules = document.querySelector("#rules");

// Quiz 
var quiz = document.querySelector("#quiz");
// var timer = document.querySelector("#timer");

// Questions
var question = [];
var questionNumber = document.querySelector("#questionNumber");
var questionText = document.querySelector("#questionText");
var currentQuestion =0;

// Answer List
// var answer1 = document.querySelector("answer1");
// var answer2 = document.querySelector("answer2");
// var answer3 = document.querySelector("answer3");
// var answer4 = document.querySelector("answer4");

// Answers Correct!/Wrong! 
var correctAnswer = 0;
// var next_question = document.querySelector("#next_question");

// Results Time/Score
var result = document.querySelector("#result");
var score = document.querySelector("#score");
var submit = document.querySelector("#submit");

// Answer List
var answerList = document.querySelector("#answerList");

var quizTimer = 60
var tempTime;

var index = 0;
var actual_time = document.querySelector("#actual_time");
var interval = 0;

// Final Score
var timeScore = 0;


// Store Total Time/Score Points
var userScore = 0; 

// Click "Start Quiz" Button
startButton.addEventListener("click", ()=>{
    startButton.style.display = "none";
    // guide.style.display = "block";
    tempTimer = setInterval(updateTimer, 1000);
    actual_time.textContent = quizTimer
    showQuestions();
    clickAnswer();
});

function updateTimer() {
    if(quizTimer <= 0) {
        clearInterval(tempTimer);
    }
    else{
        quizTimer -- ;
    }
    
    actual_time.textContent = quizTimer;
}

function showQuestions() {
    currentQuestion = questions[index];
    questionText.textContent = currentQuestion.question;
    answerList.innerHTML = ""

    currentQuestion.choices.forEach(function(choice, i){
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = i + 1 + " " + choice
        choiceButton.onclick = clickAnswer
        answerList.appendChild(choiceButton)
    })
}

//setInterval (timer, 1000)
// var loadData = ()=>{
//     questionNumber.innerHTML = index + 10 + ". ";
//     questionText.innerHTML = questions[index].question;
//     choices.innerHTML = questions[index].answer;

//     // Timer Start
//     timer = 0;
// }

// loadData();

function clickAnswer() {
    console.log(this.value);
    if(this.value === questions[index].answer)
        {
            
            console.log(questions[index].answer);
            correctAnswer++;
            score.textContent = correctAnswer
            // currentQuestion++;
        }
        else {
            correctAnswer += 0;
            if (quizTimer >= 10) {	
                quizTimer -= 10;} 
                else {	quizTimer = 0;}
            // currentQuestion++;
        
        };
    
      index++; 
      showQuestions(); 
}


// Alert user

// Show final score