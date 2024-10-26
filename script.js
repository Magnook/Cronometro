let cronometroTempo = 0;
let cronometroInterval;
let cronometroAtivo = false;

let temporizadorTempo = 0;
let temporizadorInterval;
let temporizadorAtivo = false;

// Funções do Cronômetro
document.getElementById('play-pause').addEventListener('click', () => {
    if (!cronometroAtivo) {
        iniciarCronometro();
    } else {
        pausarCronometro();
    }
});
document.getElementById('reset').addEventListener('click', reiniciarCronometro);

function iniciarCronometro() {
    cronometroInterval = setInterval(() => {
        cronometroTempo++;
        document.getElementById('tempo').innerText = formatarTempo(cronometroTempo);
    }, 1000);
    cronometroAtivo = true;
    document.getElementById('play-pause').innerHTML = '<i class="fas fa-pause"></i>';
}

function pausarCronometro() {
    clearInterval(cronometroInterval);
    cronometroAtivo = false;
    document.getElementById('play-pause').innerHTML = '<i class="fas fa-play"></i>';
}

function reiniciarCronometro() {
    clearInterval(cronometroInterval);
    cronometroTempo = 0;
    cronometroAtivo = false;
    document.getElementById('tempo').innerText = '00:00:00';
    document.getElementById('play-pause').innerHTML = '<i class="fas fa-play"></i>';
}

// Funções do Temporizador
document.getElementById('temporizador-play-pause').addEventListener('click', () => {
    if (!temporizadorAtivo) {
        iniciarTemporizador();
    } else {
        pausarTemporizador();
    }
});
document.getElementById('temporizador-reset').addEventListener('click', reiniciarTemporizador);

function iniciarTemporizador() {
    temporizadorTempo = parseInt(document.getElementById('temporizador-input').value);
    if (isNaN(temporizadorTempo) || temporizadorTempo <= 0) {
        document.getElementById('temporizador-tempo').innerText = 'Insira um valor válido!';
        return;
    }
    temporizadorInterval = setInterval(() => {
        temporizadorTempo--;
        document.getElementById('temporizador-tempo').innerText = formatarTempo(temporizadorTempo);
        if (temporizadorTempo <= 0) {
            clearInterval(temporizadorInterval);
            document.getElementById('temporizador-tempo').innerText = 'Tempo esgotado!';
            temporizadorAtivo = false;
            document.getElementById('temporizador-play-pause').innerHTML = '<i class="fas fa-play"></i>';
        }
    }, 1000);
    temporizadorAtivo = true;
    document.getElementById('temporizador-play-pause').innerHTML = '<i class="fas fa-pause"></i>';
}

function pausarTemporizador() {
    clearInterval(temporizadorInterval);
    temporizadorAtivo = false;
    document.getElementById('temporizador-play-pause').innerHTML = '<i class="fas fa-play"></i>';
}

function reiniciarTemporizador() {
    clearInterval(temporizadorInterval);
    temporizadorTempo = 0;
    temporizadorAtivo = false;
    document.getElementById('temporizador-tempo').innerText = '00:00:00';
    document.getElementById('temporizador-play-pause').innerHTML = '<i class="fas fa-play"></i>';
}

// Funções de Navegação
document.getElementById('cronometro-btn').addEventListener('click', () => {
    mostrarAba('cronometro');
});
document.getElementById('temporizador-btn').addEventListener('click', () => {
    mostrarAba('temporizador');
});
document.getElementById('calendario-btn').addEventListener('click', () => {
    mostrarAba('calendario');
});

function mostrarAba(aba) {
    document.querySelector('.cronometro').style.display = 'none';
    document.querySelector('.temporizador').style.display = 'none';
    document.querySelector('.calendario').style.display = 'none';
    document.querySelector(`.${aba}`).style.display = 'block';
}

// Funções Auxiliares
function formatarTempo(segundos) {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${zerar(h)}:${zerar(m)}:${zerar(s)}`;
}

function zerar(num) {
    return num < 10 ? '0' + num : num;
}
