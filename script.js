let startBtn = document.querySelector("#start");
let timeLeft =  document.querySelector("#time");
let falseBtn = document.querySelector("#falseBtn");
let trueBtn = document.querySelector("#trueBtn");
let questionEl = document.querySelector("#question");
let highscoreEl = document.querySelector("#highscore");
let initialsEl = document.querySelector("#initials");
let formInitials = document.querySelector("#formInitials");
let scoreListEl = document.querySelector("#highscoreList");
let inputInitials = document.querySelector("#initialInput");
let addScore = document.querySelector("#addHighscore");
let playAgainBtn = document.querySelector("#playAgain");
let score = 0;
let timer = 60;
let currentQuestion = 0;
let scoreList = [];

trueBtn.disabled = true;
falseBtn.disabled = true;
initialsEl.style.display = "none";
displayScores();


let quizQuestions = ["Dogs have 4 legs",
"Dogs can only see in black and white",
"Pomeranians are the smallest dog breed",
"Grapes are poisonous to dogs",
"Dogs sweat through their paws",
"Sit is the most taught trainging command to dogs",
"Chow chow dogs have a pink tongue",
"Dalmations are born with spots",
"A dog's most highly developed sense is their smell",
"Normal adult dogs have 24 teeth"]

function countdown() {
    let timerInterval = setInterval(function() {
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
    startBtn.disabled = false;
    addScore.disabled = false;
    initialsEl.style.display = "block";
    questionEl.textContent = "Game over! Score: " + score
}

function clearTime(){
    timer = 60;
    startGame();
    countdown();
}

function clearScore(){
    score = 0;
}

function storeScore(){
    localStorage.setItem("scoreList", JSON.stringify(scoreList))
}

function displayScores(){
    let allHighscores = JSON.parse(localStorage.getItem("scoreList"));

    if (allHighscores !== null) {
        scoreList = allHighscores
    }
}

addScore.addEventListener("click", function(event){
    event.preventDefault();

    let init = inputInitials.value.toUpperCase();
    scoreList.push({ initials: init, score: score});

    scoreList = scoreList.sort((a, b) =>{
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length;i++){
        let li = document.createElement("li")
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.appendChild(li);
    }

    storeScore();
    displayScores();
    addScore.disabled = true;
})

startBtn.addEventListener("click", function(){
    countdown();
    startGame();
})

playAgainBtn.addEventListener("click", function(){
    clearTime();
    clearScore();
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
    } else if (questionEl.textContent === quizQuestions[9]) {
        timer = timer - 5
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
    } else if (questionEl.textContent === quizQuestions[9]){
        score = score + 10;
        endGame();
    }
})