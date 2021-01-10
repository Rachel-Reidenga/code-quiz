// Start/Rules of Coding Quiz
var startButton = document.querySelector("#start")
var rules = document.querySelector("#rules");

// Quiz 
var quiz = document.querySelector("#quiz");
var timer = document.querySelector("#timer");

// Questions
var question = [];
var questionNumber = document.querySelector("#questionNumber");
var questionText = document.querySelector("#questionText");

// Answer List
var answer1 = document.querySelector("answer1");
var answer2 = document.querySelector("answer2");
var answer3 = document.querySelector("answer3");
var answer4 = document.querySelector("answer4");

// Answers Correct!/Wrong! 
// var correct_answer = document.querySelector("#correct_answer");
// var next_question = document.querySelector("#next_question");

// Results Time/Score
var result = document.querySelector("#result");
var score = document.querySelector("#score");
var submit = document.querySelector("#submit");

// Answer List
var answerList = document.querySelector("#answerList");
var answer_list = document.querySelector(".answer_list")

var index = 0;
var actual_time = 0;
var interval = 0;

// Final Score
var timeScore = 0;

// Store Total Time/Score Points
var userScore = undefined; 

// Click "Start Quiz" Button
startButton.addEventListener("click", ()=>{
    startButton.style.display = "none";
    // guide.style.display = "block";
});

// Timer
var timer = ()=> {
    if(actual_time === 60)
{
    clearInterval(interval);
}
else {
    actual_time++;
    timer.innerHTML = timer;
}
}
// setInterval(timer, 3000)


// Array of questions
var questions = [
    { question: "Commonly used data types DO NOT include:", 
    choice1: "1. strings",
    choice2: "2. booleans",
    choice3: "3. alerts",
    choice4: "4. numbers",
    answer: 3
},

{ question: "The condition in an if/else statment is enclosed with...", 
choice1: "1. quotes",
choice2: "2. curly brackets",
choice3: "3. parenthesis",
choice4: "4. square brackets",
answer: 2
},

{ question: "Arrays in JavaScript can be used to store...", 
choice1: "1. numbers and strings",
choice2: "2. other arrays",
choice3: "3. booleans",
choice4: "4. all of the above",
answer:  4
},

{ question: "String values must be enclosed within ____ when being assigned to variables.", 
choice1: "1. commas",
choice2: "2. curly brackets",
choice3: "3. quotes",
choice4: "4. parenthesis",
answer: 3
},

{ question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
choice1: "1. JavaScript",
choice2: "2. terminal/bash",
choice3: "3. for loops",
choice4: "4. console.log",
answer: 4
},
];

//setInterval (timer, 1000)
// var loadData = ()=>{
//     questionNumber.innerHTML = index + 10 + ". ";
//     questionText.innerHTML = questions[index].question;
//     choice1.innerHTML = questions[index].answer1;
//     choice2.innerHTML = questions[index].answer2;
//     choice3.innerHTML = questions[index].answer3;
//     choice4.innerHTML = questions[index].answer4;

//     // Timer Start
//     timer = 0;
// }

// loadData();


answer_list.forEach( (choices, questionNumber) => {
    choices.addEventListener("click", ()=> {
        choices.answerList.add("active");
        //check answer
        if(questionNumber === questions[index].answer)
        {
            correctAnswer++;
        }
        else {
            correctAnswer += 0;
        }
        // stop counter
        clearInterval(interval);

        // User select
        for (i = 0; i <= 3; i++)
        {
            answer_list[i].answerList.add("");
        }
    })
});

// Score of 0 to start
var score = 0;

// Loop over questions object
// for (var i =0; i < questions.length; i++) {
//     var correctAnswer = confirm(questions[i].question);

//     // Check answers
//     if (
//         (correctAnswer === 3. alerts)
//     )

// }



// Increase score

// Alert user

// Show final score