// Get Elements from html doc
const gameCon = document.querySelector(".game");
const hiddenNumCon = document.getElementById("hiddenNum");
const inputNum = document.getElementById("inputNum");
const checkBtn = document.getElementById("checkBtn");
const msg = document.getElementById("msg");
const scoreCon = document.getElementById("score");
const highscoreCon = document.getElementById("highscore");
const againBtn = document.getElementById("againBtn");

//Set hidden Number
let hiddenNum = generateRandom();
console.log(hiddenNum);

//set The score
let score = 20;

//againBtn onclick
againBtn.addEventListener("click", restart);

//checkBtn onclick
checkBtn.addEventListener("click", checkNum);
scoreCon.textContent = `💯 Score: ${score}`;

let highscore = 0;
highscoreCon.textContent = `✌️ Highscore: ${highscore}`;

let i = 1;

//Check Number Function
function checkNum() {
    if (inputNum.value != '') {
        let guessedNum = parseInt(inputNum.value);
        if (guessedNum >= 1) {
            if (guessedNum==hiddenNum) {
                msg.innerHTML = '&#127942; correct Number';
                gameCon.style.backgroundColor = '#4BB543';
                hiddenNumCon.innerHTML = `${hiddenNum}`;
                hiddenNumCon.style.width = '140px';
                //If you win disable the check button
                checkBtn.setAttribute('disabled', '');
                if (i == 1) {
                    highscore = score;
                } else {
                    if (score > highscore) {
                        highscore = score;
                    }
                }
                i++;
                highscoreCon.textContent = `✌️ Highscore: ${highscore}`;

            } else if (guessedNum < hiddenNum) {
                msg.innerHTML = '&#128201;too low';
                score--;
                scoreCon.textContent = `💯 Score: ${score}`;
            } else {
                msg.innerHTML = '&#128200;too high';
                score--;
                scoreCon.textContent = `💯 Score: ${score}`;
            }
            lostGame();
        } else {
            msg.innerHTML = 'Enter number between 1 & 20';
        }
    }
}

//Lost Game Function
function lostGame() {
    if (score <= 0) {
        gameCon.style.backgroundColor = '#cc0000';
        msg.innerHTML = 'You lost the game';
        checkBtn.setAttribute('disabled','');
        hiddenNumCon.innerHTML = `${hiddenNum}`;
        hiddenNumCon.style.width = '140px';
    }
}


// Get Random Number between 1 & 20
function generateRandom() {
    return Math.floor(Math.random() * 20) + 1;
}

//Restart Function
function restart() {
    score = 20;
    scoreCon.textContent = `💯 Score: ${score}`;
    gameCon.style.backgroundColor = '#333';
    if (checkBtn.hasAttribute('disabled')) {
        checkBtn.removeAttribute('disabled');
    }
    hiddenNum = generateRandom();
    console.log(hiddenNum);
    inputNum.value = '';
    hiddenNumCon.innerHTML = '&quest;';
    msg.innerHTML = 'start guessing...';
}