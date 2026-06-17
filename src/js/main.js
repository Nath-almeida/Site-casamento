const dataCasamento = new Date('May 15, 2027 00:00:00'). getTime();

const countdown = setInterval(function() {
    const now = new Date(). getTime();
    const distance = dataCasamento - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const elementoCountdown = document.getElementById('countdown');

    if (elementoCountdown) {
        elementoCountdown.innerHTML = `<div class = "bloco-tempo"><span>${days}</span><p> Dias</p></div>
        <div class = "bloco-tempo"><span>${hours}</span><p> Horas</p></div>
        <div class = "bloco-tempo"><span>${minutes}</span><p> Minutos</p></div>
        <div class = "bloco-tempo"><span>${seconds}</span><p> Segundos</p></div>`;
    }
    if (distance < 0) {
        clearInterval(countdown);
        if (elementoCountdown) {
            elementoCountdown.innerHTML = "<h2>Chegou o grande dia!</h2>";
        }
    }

}, 1000);
