let startBtn = document.querySelector("#start")
let timeLeft =  document.querySelector("#time")
let falseBtn = document.querySelector("#falseBtn")
let trueBtn = document.querySelector("#trueBtn")
let questionEl = document.querySelector("#question")

let score = 0
let timer = 60

let quizQuestions = ["Are apples red",
"Do dogs have 6 legs",
"2+2=4",
"Dogs have 2 ears",
"Water is a liquid",
"Orange is a color",
"Cows can bark",
"Squid have 10 tentacles",
"Tennis balls are green",
"People have 4 eyes"]

let currentQuestion = 0

trueBtn.disabled = true;
falseBtn.disabled = true;

function countdown() {

    var timerInterval = setInterval(function() {
        timer--;
        timeLeft.textContent = timer;

        if(timer === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000)
}

function startGame() {
    startBtn.disabled = true;
    trueBtn.disabled = false;
    falseBtn.disabled = false;
    questionEl.textContent = quizQuestions[0];
}

function nextQuestion(){
    currentQuestion++;
    questionEl.textContent = quizQuestions[currentQuestion]
}

function endGame(){
    trueBtn.disabled = true;
    falseBtn.disabled = true;

    questionEl.textContent = "Game over! Score: " + score

    let highscoreBtn = document.createElement ("button");

    highscoreBtn.innrerHTML = "Highscores";

    document.questionEl.appendChild(highscoreBtn)
}

startBtn.addEventListener("click", function(){
    countdown();
    startGame();
})

trueBtn.addEventListener("click", function(){

    if (questionEl.textContent === quizQuestions[0] ||
        questionEl.textContent === quizQuestions[3] ||
        questionEl.textContent === quizQuestions[4] ||
        questionEl.textContent === quizQuestions[5] ||
        questionEl.textContent === quizQuestions[8]){
        score = score + 10;
        nextQuestion();
    } else if (questionEl.textContent === quizQuestions[1] ||
        questionEl.textContent === quizQuestions[2] ||
        questionEl.textContent === quizQuestions[6] ||
        questionEl.textContent === quizQuestions[7]){
        timer = timer - 5
        nextQuestion();
    } else {
        endGame();
    }
})

falseBtn.addEventListener("click", function(){

    if (questionEl.textContent === quizQuestions[1] ||
        questionEl.textContent === quizQuestions[2] ||
        questionEl.textContent === quizQuestions[6] ||
        questionEl.textContent === quizQuestions[7]){
        score = score + 10;
        nextQuestion();
    } else if (questionEl.textContent === quizQuestions[0] ||
        questionEl.textContent === quizQuestions[3] ||
        questionEl.textContent === quizQuestions[4] ||
        questionEl.textContent === quizQuestions[5] ||
        questionEl.textContent === quizQuestions[8]){
        timer = timer - 5
        nextQuestion();
    } else {
        endGame();
    }
})

// steps
// display questions in array
// have function pick each question out of array one at a time