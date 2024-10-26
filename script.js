let tempo = 0;
let intervalo;

document.getElementById('iniciar').addEventListener('click', iniciar);
document.getElementById('pausar').addEventListener('click', pausar);
document.getElementById('reiniciar').addEventListener('click', reiniciar);

function iniciar() {
    intervalo = setInterval(() => {
        tempo++;
        atualizarTempo();
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
}

function reiniciar() {
    tempo = 0;
    atualizarTempo();
    pausar();
}

function atualizarTempo() {
    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('tempo').innerText = `${horas}:${minutos}:${segundos}`;
}

