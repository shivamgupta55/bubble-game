
// let hit = 0; 
// let nScore = 0;
// let timing = 60;

// function bubblemaker(){
//     let savebubble = "";
//     for(i=1; i<=850; i++){
//     let random = Math.floor(Math.random()*10);
//     savebubble += `<div class="bubble">${random}</div>` ;
//      document.querySelector(".bottomdisplay").innerHTML = savebubble;
// }
// }
// bubblemaker();



// function countDown(){
//     let stopid = setInterval(() => {
//     if(timing>0){
//         timing--;
//     } else{
//         clearInterval(stopid);
//     }

//    document.querySelector("#timer").innerText = timing; 
// }, 1000);

// }
// countDown();


// function changehit(){
//     hit = Math.floor(Math.random()*10);
//     document.querySelector("#hitval").innerText = hit;
// }
// changehit();


// function score(){

//  nScore += 10;
//  document.querySelector("#score").innerText = nScore;
// }


// let bottom = document.querySelector(".bottomdisplay");

// bottom.addEventListener("click",function(dets){
//  let click = Number(dets.target.textContent);
//  if(click === hit){
//     score();
//     changehit();
//     bubblemaker();
//  }
// })

// Bubble Game - Professional Version

const BUBBLE_COUNT = 850;
const BUBBLE_RANGE = 10;
const INITIAL_TIME = 60;
const SCORE_INCREMENT = 10;

let hitValue = 0;
let scoreValue = 0;
let timeLeft = INITIAL_TIME;
let timerInterval = null;

// DOM Elements
const timerElem = document.getElementById("timer");
const hitElem = document.getElementById("hitval");
const scoreElem = document.getElementById("score");
const bottomDisplay = document.querySelector(".bottomdisplay");

// Utility to generate a random number in range [0, max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Render bubbles
function renderBubbles() {
    let bubblesHTML = "";
    for (let i = 0; i < BUBBLE_COUNT; i++) {
        const bubbleNum = getRandomInt(BUBBLE_RANGE);
        bubblesHTML += `<div class="bubble">${bubbleNum}</div>`;
    }
    bottomDisplay.innerHTML = bubblesHTML;
}

// Update the hit value
function updateHitValue() {
    hitValue = getRandomInt(BUBBLE_RANGE);
    hitElem.innerText = hitValue;
}

// Update the score
function updateScore() {
    scoreValue += SCORE_INCREMENT;
    scoreElem.innerText = scoreValue;
}

// Countdown timer logic
function startTimer() {
    timerElem.innerText = timeLeft;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElem.innerText = timeLeft;
        } else {
            clearInterval(timerInterval);
            timerElem.innerText = "Game Over";
            bottomDisplay.innerHTML = "<h2>Game Over!</h2>";
        }
    }, 1000);
}

// Bubble click handler
function onBubbleClick(event) {
    const clickedValue = Number(event.target.textContent);
    if (event.target.classList.contains("bubble") && clickedValue === hitValue) {
        updateScore();
        updateHitValue();
        renderBubbles();
    }
}

// Initialize game
function initGame() {
    scoreElem.innerText = scoreValue;
    updateHitValue();
    renderBubbles();
    startTimer();
    bottomDisplay.addEventListener("click", onBubbleClick);
}

// Start the game
initGame();