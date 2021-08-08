let startBtn = document.querySelector("#start")
let timeLeft =  document.querySelector("#time")

function countdown() {
    let timer = 60

    var timerInterval = setInterval(function() {
        timer--;
        timeLeft.textContent = timer;
    }, 1000)
}

startBtn.addEventListener("click", countdown)