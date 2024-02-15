const nToC = {
    0: "s",
    1: "r",
    2: "p"
}
const cToK = {
    "s": "가위",
    "r": "바위",
    "p": "보"
}
const cToE = {
    "s": "scissors",
    "r": "rock",
    "p": "paper"
}

const rockEl = document.querySelector(".rock")
const scissorsEl = document.querySelector(".scissors")
const paperEl = document.querySelector(".paper")
const resultTextEl = document.querySelector(".result .text")
const cpuScoreEl = document.querySelector(".cpu-score")
const userScoreEl = document.querySelector(".user-score")
const cpuChooseEl = document.querySelector(".cpu-choose")
const userChooseEl = document.querySelector(".user-choose")

rockEl.addEventListener("click", () => rsp("r", nToC[getComputerChoice()]))
scissorsEl.addEventListener("click", () => rsp("s", nToC[getComputerChoice()]))
paperEl.addEventListener("click", () => rsp("p", nToC[getComputerChoice()]))

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function changeCpuChoose(cpu) {
    cpuChooseEl.innerHTML = /* html */ `
        <img src="./images/${cToE[cpu]}.svg" alt="${cToK[cpu]}">
    `
}
function changeUserChoose(user) {
    userChooseEl.innerHTML = /* html */ `
        <img src="./images/${cToE[user]}.svg" alt="${cToK[user]}">
    `
}

function rsp(user, cpu) {
    changeCpuChoose(cpu)
    changeUserChoose(user)
    switch(user + cpu) {
        case "ss":
        case "rr":
        case "pp":
            draw(user, cpu)
            break
        case "sr":
        case "rp":
        case "ps":
            lose(user, cpu)
            break
        case "rs":
        case "pr":
        case "sp":
            win(user, cpu)
            break
    }
}

function draw(user, cpu) {
    const text = `둘 다 ${cToK[user]}를 냈습니다. 비겼습니다.`
    cpuChooseEl.style.backgroundColor = "goldenrod"
    userChooseEl.style.backgroundColor = "goldenrod"
    resultTextEl.textContent = text;
}
function lose(user, cpu) {
    const text = `${cToK[user]}는 ${cToK[cpu]}를 이길 수 없습니다. 졌습니다.`
    cpuChooseEl.style.backgroundColor = "royalblue"
    userChooseEl.style.backgroundColor = "firebrick"
    resultTextEl.textContent = text;
    cpuScoreEl.textContent = Number(cpuScoreEl.textContent) + 1
}
function win(user, cpu) {
    const text = `${cToK[user]}는 ${cToK[cpu]}를 이길 수 있습니다. 이겼습니다.`
    cpuChooseEl.style.backgroundColor = "firebrick"
    userChooseEl.style.backgroundColor = "royalblue"
    resultTextEl.textContent = text;
    userScoreEl.textContent = Number(userScoreEl.textContent) + 1
}