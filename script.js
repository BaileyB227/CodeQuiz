let startBtn = document.querySelector("#start")
let timeLeft =  document.querySelector("#time")
let falseBtn = document.querySelector("#falseBtn")
let trueBtn = document.querySelector("#trueBtn")
let questionEl = document.querySelector("#question")
let highscoreEl = document.querySelector("#highscore")
let initialsEl = document.querySelector("#initials")
let formInitials = document.querySelector("#formInitials")
let highscoreName = document.getElementById("#highscoreNames")
let highscoreScore = document.getElementById("#highscoreScore")
let highscoreBtn = document.createElement("button")
let score = 0
let timer = 60
let currentQuestion = 0

trueBtn.disabled = true;
falseBtn.disabled = true;
initialsEl.style.display = "none";


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
    initialsEl.style.display = "block";
    questionEl.textContent = "Game over! Score: " + score
    
    highscoreBtn.innerHTML = "Submit"

    formInitials.appendChild(highscoreBtn)
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

highscoreBtn.addEventListener("click", function(event){
    event.preventDefault();
    let savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    let currentUser = initialInput.value.trim();
    let currentHighscore = {
        name: currentUser, 
        score: score
    };

    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
})

function generateHighscores(){
    let highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        let nameSpan = document.createElement("li");
        let scoreSpan = document.createElement("li");
        nameSpan.textContent = highscores[i].name;
        scoreSpan.textContent = highscores[i].score;
        highscoreName.appendChild(nameSpan);
        highscoreScore.appendChild(scorespan);
    }
}