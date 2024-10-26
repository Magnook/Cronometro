let tempo = 0;
let intervalo;
let temporizadorTempo = 0;
let temporizadorInterval;
let cronometroRodando = false;

// Cronômetro
document.getElementById('iniciar').addEventListener('click', iniciarCronometro);
document.getElementById('pausar').addEventListener('click', pausarCronometro);
document.getElementById('reiniciar').addEventListener('click', reiniciarCronometro);

function iniciarCronometro() {
    if (!cronometroRodando) {
        intervalo = setInterval(() => {
            tempo++;
            document.getElementById('tempo').innerText = formatarTempo(tempo);
        }, 1000);
        cronometroRodando = true;
        document.getElementById('iniciar').style.display = 'none'; // Esconde Play
        document.getElementById('pausar').style.display = 'inline'; // Mostra Pause
    }
}

function pausarCronometro() {
    clearInterval(intervalo);
    cronometroRodando = false;
    document.getElementById('iniciar').style.display = 'inline'; // Mostra Play
    document.getElementById('pausar').style.display = 'none'; // Esconde Pause
}

function reiniciarCronometro() {
    clearInterval(intervalo);
    tempo = 0;
    document.getElementById('tempo').innerText = '00:00:00';
    cronometroRodando = false;
    document.getElementById('iniciar').style.display = 'inline'; // Mostra Play
    document.getElementById('pausar').style.display = 'none'; // Esconde Pause
}

// Temporizador
let temporizador = document.getElementById('temporizador-tempo');
document.querySelectorAll('.tempo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const segundos = parseInt(btn.getAttribute('data-segundos'));
        incrementarTemporizador(segundos);
    });
});

function incrementarTemporizador(segundos) {
    temporizadorTempo += segundos; // Incrementa o tempo
    temporizador.innerText = formatarTempo(temporizadorTempo); // Atualiza o display
}

// Botão Iniciar do Temporizador
document.getElementById('iniciar-temporizador').addEventListener('click', iniciarTemporizador);
document.getElementById('pausar-temporizador').addEventListener('click', pausarTemporizador);

function iniciarTemporizador() {
    if (temporizadorTempo > 0) {
        temporizadorInterval = setInterval(() => {
            temporizadorTempo--;
            temporizador.innerText = formatarTempo(temporizadorTempo);
            if (temporizadorTempo <= 0) {
                clearInterval(temporizadorInterval);
                temporizador.innerText = 'Tempo esgotado!';
            }
        }, 1000);
    }
}

function pausarTemporizador() {
    clearInterval(temporizadorInterval);
}

// Mostrar e ocultar seções
document.getElementById('calendario-btn').addEventListener('click', mostrarCalendario);
document.getElementById('cronometro-btn').addEventListener('click', mostrarCronometro);
document.getElementById('temporizador-btn').addEventListener('click', mostrarTemporizador);

function mostrarCronometro() {
    document.querySelector('.cronometro').style.display = 'block';
    document.querySelector('.temporizador').style.display = 'none';
    document.querySelector('.calendario').style.display = 'none';
    document.querySelector('.botao-temporizador').style.display = 'none'; // Esconde botões do temporizador
}

function mostrarTemporizador() {
    document.querySelector('.cronometro').style.display = 'none';
    document.querySelector('.temporizador').style.display = 'block';
    document.querySelector('.calendario').style.display = 'none';
    document.querySelector('.botao-temporizador').style.display = 'flex'; // Mostra botões do temporizador
}

function mostrarCalendario() {
    document.querySelector('.cronometro').style.display = 'none';
    document.querySelector('.temporizador').style.display = 'none';
    document.querySelector('.calendario').style.display = 'block';
    document.querySelector('.botao-temporizador').style.display = 'none'; // Esconde botões do temporizador
}

function formatarTempo(segundos) {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const seg = String(segundos % 60).padStart(2, '0');
    return `${horas}:${minutos}:${seg}`;
}
