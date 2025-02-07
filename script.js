let tempo = 25 * 60; // 25 minutos em segundos
let timerInterval;
let rodando = false;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function atualizarTimer() {
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;
    timerElement.textContent = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function iniciarTimer() {
    if (!rodando) {
        rodando = true;
        timerInterval = setInterval(() => {
            if (tempo > 0) {
                tempo--;
                atualizarTimer();
            } else {
                clearInterval(timerInterval);
                alert("Tempo acabou! Hora de descansar.");
            }
        }, 1000);
    }
}

function pausarTimer() {
    clearInterval(timerInterval);
    rodando = false;
}

function resetarTimer() {
    clearInterval(timerInterval);
    rodando = false;
    tempo = 25 * 60;
    atualizarTimer();
}

startButton.addEventListener("click", iniciarTimer);
pauseButton.addEventListener("click", pausarTimer);
resetButton.addEventListener("click", resetarTimer);

atualizarTimer();
