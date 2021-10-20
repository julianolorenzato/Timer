function cronometro() {
    let segundos = 0
    let contador = 0
    const timer = document.querySelector('.timer')
    const container = document.querySelector('.container')
    let ativado = false
    
    function iniciarTimer() {
        if(!ativado){
            contador = setInterval(() => {
                const horario = new Date(segundos * 1000).toLocaleTimeString('pt-BR', {
                    hour12: false,
                    timeZone: 'GMT'
                    })
        
                timer.innerText = horario
                segundos++
            }, 1000)
            container.style.animation = 'ativado 1s infinite alternate;'
            container.classList.add('animacoes')
            timer.style.color = 'black'
            ativado = true
        }
    }
    
    function pausarTimer() {
        clearInterval(contador)
        container.classList.remove('animacoes')
        timer.style.color = '#a60000'
        ativado = false
    }
    
    function zerarTimer() {
        clearInterval(contador)
        segundos = 0
        timer.innerText = '00:00:00'
        timer.style.color = 'black'
        container.classList.remove('animacoes')
        ativado = false
    }
    
    const iniciar = document.querySelector('#iniciar')
    const pausar = document.querySelector('#pausar')
    const zerar = document.querySelector('#zerar')
    
    iniciar.onclick = iniciarTimer
    pausar.onclick = pausarTimer
    zerar.addEventListener('click', zerarTimer)
}
cronometro()