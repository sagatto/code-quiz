var main = document.getElementById('main');
var timer = document.getElementById('timer');
var quizWrapper = document.getElementById('quiz-wrapper');
var askQuestion = document.getElementById('askQuestion');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var answerList = document.getElementById('answer-list');
var scoreForm = document.getElementById('scoreForm');
var finalScoreP = document.getElementById('finalScoreP');
var highScoreButton = document.getElementById('highscore-button');
var highScoreLister = document.getElementById('highScoreLister');
var highScoreInitialsLister = document.getElementById('highScoreInitialsLister');
var highScoreDiv = document.getElementById("highScoreDiv")
var saveScore = document.getElementById("saveScore")
var backToMain = document.getElementById("backToMain")

// //main page - quiz desctiption and button to start quiz
// var startPage = function () {
//     scoreForm.style.display = "none";
//     startButton.addEventListener("click", questionGame)
//     askQuestion.textContent = "Coding Quiz Challenge"
//     // answer1.textContent = "When you start the quiz, the timer will start counting down from 99 seconds."
//     // answer2.textContent = "Answer each question as quickly as you can."
//     // answer3.textContent = "Wrong answers will remove 10 seconds from your remaining time."
//     // answer4.textContent = "However much time is left when you complete will be your final score. Good luck!"
// }

//set timer variable globally
var timeLeft = 99;

var questionGame = function () {
    //hide start button and score form
    scoreForm.style.display = "none";

    //start timer
    var countdownTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("timer").innerHTML = "No time left!";
        } else {
            document.getElementById("timer").innerHTML = timeLeft;
        }
        timeLeft -= 1;
        console.log(timeLeft);
    }, 1000);

    var questionIndex = 0;
    
    askQuestion.textContent = quizQuestions[questionIndex].q;
    answer1.addEventListener("click", rightOrWrong); answer1.textContent = quizQuestions[questionIndex].answer1;
    answer2.addEventListener("click", rightOrWrong); answer2.textContent = quizQuestions[questionIndex].answer2;
    answer3.addEventListener("click", rightOrWrong); answer3.textContent = quizQuestions[questionIndex].answer3;
    answer4.addEventListener("click", rightOrWrong); answer4.textContent = quizQuestions[questionIndex].answer4;


    //main game functionality and high score page
    nextQuestion();
}

//Collection of 10 basic Javascript trivia questions
var quizQuestions = [
    {
        q: "How would you listen for an event i.e. a click?",
        answer1: '.addEventListener',
        answer2: 'style.display = "none"',
        answer3: 'document.getElementById',
        answer4: '.innerHTML',
        a: 'answer1'
    },
    {
        q: "How would you change the CSS display styling of a selected element?",
        answer1: '.addEventListener',
        answer2: 'style.display = "none"',
        answer3: 'document.getElementById',
        answer4: '.innerHTML',
        a: 'answer2'
    },
    {
        q: "How would you get and element by it's ID?",
        answer1: '.addEventListener',
        answer2: 'style.display = "none"',
        answer3: 'document.getElementById',
        answer4: '.innerHTML',
        a: 'answer3'
    },
    {
        q: "How would you set a selected element's HTML?",
        answer1: '.addEventListener',
        answer2: 'style.display = "none"',
        answer3: 'document.getElementById',
        answer4: '.innerHTML',
        a: 'answer4'
    },
    {
        q: "How would you define something to be logged in the console?",
        answer1: 'console.log()',
        answer2: 'window.alert()',
        answer3: 'window.prompt',
        answer4: 'window.confirm',
        a: 'answer1'
    },
    {
        q: "How would you make a window pop up that will contain alert text only?",
        answer1: 'console.log()',
        answer2: 'window.alert()',
        answer3: 'window.prompt',
        answer4: 'window.confirm',
        a: 'answer2'
    },
    {
        q: "How would you make a window pop up that will ask a user for text input?",
        answer1: 'console.log()',
        answer2: 'window.alert()',
        answer3: 'window.prompt',
        answer4: 'window.confirm',
        a: 'answer3'
    },
    {
        q: "How would you make a window pop up that will ask a OK or Cancel input?",
        answer1: 'console.log()',
        answer2: 'window.alert()',
        answer3: 'window.prompt',
        answer4: 'window.confirm',
        a: 'answer4'
    },
    {
        q: "How would you prevent the default action from occuring on an event?",
        answer1: 'event.preventDefault();',
        answer2: 'localStorage.getItem',
        answer3: 'localStorage.setItem',
        answer4: 'function()',
        a: 'answer1'
    },
    {
        q: "How would you retrieve something from local storage?",
        answer1: 'event.preventDefault();',
        answer2: 'localStorage.getItem()',
        answer3: 'localStorage.setItem()',
        answer4: 'function()',
        a: 'answer2'
    },
]
//set initial question index
var questionIndex = 0;

// show score page if no q's left or if time ran out, display questions and answers on the page with index listener if questions remain sent to right/wrong function
var nextQuestion = function () {
    if (quizQuestions[questionIndex] === undefined) {
        endGamePage();
    } else if (timeLeft <= 0) {
        window.alert("Time has run out!")
        endGamePage();
    } else {
        askQuestion.textContent = quizQuestions[questionIndex].q;
        answer1.addEventListener("click", rightOrWrong); answer1.textContent = quizQuestions[questionIndex].answer1;
        answer2.addEventListener("click", rightOrWrong); answer2.textContent = quizQuestions[questionIndex].answer2;
        answer3.addEventListener("click", rightOrWrong); answer3.textContent = quizQuestions[questionIndex].answer3;
        answer4.addEventListener("click", rightOrWrong); answer4.textContent = quizQuestions[questionIndex].answer4;
    };
};
// Right or Wrong Function - increase questionIndex for both - subtract time if wrong. 
var rightOrWrong = function (event) {
    var targetEl = event.target;
    if (targetEl.id === quizQuestions[questionIndex].a) {
        //next question
        questionIndex++;
        nextQuestion();
    } else if (targetEl.id !== quizQuestions[questionIndex].a) {
        //subtract time
        timeLeft = timeLeft - 10;
        //next question
        questionIndex++;
        nextQuestion();
    };
}

//End of game 
var endGamePage = function () {
    //hide timer
    timer.style.display = "none";
    //set timer to current score to compare to high score
    var currentScore = document.getElementById("timer").innerHTML;
    localStorage.setItem("currentScore", currentScore);

    //build page
    askQuestion.textContent = "All Done!";
    answerList.style.display = "none";
    scoreForm.style.display = "block";
    finalScoreP.textContent = "Your final score is " + currentScore;
}

//save high score to local storage if it beat the previous
saveScore.addEventListener("click", function (event) {
    event.preventDefault();
    var currentScore = localStorage.getItem("currentScore");
    var storedScore = localStorage.getItem("highScore");

    if (currentScore >= storedScore) {
    localStorage.setItem('highScore', currentScore);
    var input = document.getElementById("initials").value;
    localStorage.setItem("highScoreInitials", input);
    }
});

//return to main page from high score page
backToMain.addEventListener("click", startPage);

questionGame();