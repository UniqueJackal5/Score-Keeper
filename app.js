

const btnP1 = document.querySelector("#btnp1");
const btnP2 = document.querySelector("#btnp2");
const reset = document.querySelector("#reset");
let currentScore = document.querySelector("#currentScore");

let p1Score = 0;
let p2Score = 0;


btnP1.addEventListener("click", (e)=>{
    p1Score++;
    currentScore.innerHTML = `Current Score: <span class="text-primary">${p1Score}</span> - <span class="text-info">${p2Score}</span>`;
});

btnP2.addEventListener("click", (e)=>{
    p2Score++;
    currentScore.innerHTML = `Current Score: <span class="text-primary">${p1Score}</span> - <span class="text-info">${p2Score}</span>`;
});

reset.addEventListener("click", ()=>{
    p1Score = 0;
    p2Score = 0;
    currentScore.innerHTML = `Current Score: <span class="text-primary">${p1Score}</span> - <span class="text-info">${p2Score}</span>`;
})


