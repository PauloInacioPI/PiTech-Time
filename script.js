class timeGeral {
    constructor() {
        this.hours = null; // Inicialize a propriedade como null
    }
    time() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        

        document.getElementById('txt').innerHTML = `<span class="hours">${hours}</span>:
        <span class="minutes">${minutes}</span>:
        <span class="seconds">${seconds}</span>`;

        setTimeout(() => {
            this.time(); // Chama recursivamente o método time() da própria instância
        }, 500);

    }
}

const instanciaTime = new timeGeral();
instanciaTime.time();

function toggleFullscreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    // Verifica se a tela está em tela cheia
    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        // Solicita tela cheia ao dar um duplo clique
        requestFullScreen.call(docEl);
    } else {
        // Sai da tela cheia se já estiver em tela cheia
        cancelFullScreen.call(doc);
    }
}
document.addEventListener("dblclick", toggleFullscreen);


// Previsão
async function buscarCidade(cidade) {
    const codigoPais = 'BR'; // Código do país fixo para o Brasil
    const apiKey = 'ba2ec29de7e2e0a80829c02294e8e627';

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},${codigoPais}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Não foi possível encontrar a cidade.');
        }

        const dados = await response.json();
        exibirDados(dados);
        // console.log(dados)
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

function exibirDados(dados) {
    const temperatura = dados.main.temp;
    const sensacaoTermica = dados.main.feels_like;
    // const umidade = dados.main.humidity;
    // const pressao = dados.main.pressure;
    // const temperaturaMaxima = dados.main.temp_max;
    // const temperaturaMinima = dados.main.temp_min;

    instanciaTime.time();

    let tempdisplay = document.querySelector('#temp')

    if (hours => 18) {
        tempdisplay.innerHTML = `
            <h1 class="message">Olá Boa noite</h1><br>
            <p class="response">A Temperatura em Santo Antônio de Pádua hoje é de: ${temperatura}°C <br>
            Com Sensação Térmica de : ${sensacaoTermica}°C <br></p>`
    }
    else if (hours => 12) {
        tempdisplay.innerHTML = `
            <h1 class="message">Olá Bom tarde</h1><br>
            <p class="response">A Temperatura em Santo Antônio de Pádua hoje é de: ${temperatura}°C <br>
            Com Sensação Térmica de : ${sensacaoTermica}°C <br></p>`
    }
    else {
        tempdisplay.innerHTML = `
            <h1 class="message">Olá Bom dia</h1><br>
            <p class="response">A Temperatura em Santo Antônio de Pádua hoje é de: ${temperatura}°C <br>
            Com Sensação Térmica de : ${sensacaoTermica}°C <br></p>`
    }

}
buscarCidade('Santo antonio de padua')


function teme() {
    let temp = document.querySelector('#temp')
    // let body = document.querySelector('body')

    document.body.style.background = 'black';
    temp.style.background = 'rgba(0,0,0,.5)'
}
/* Caso queira pesquisar
 function cliqueNoBotao() {
    let cidade = document.querySelector('.caracter').value;

    buscarCidade(cidade);
}*/


// function alerts(){
//     const iptAlert = document.querySelector('.alertTime').value


// }
const box = document.querySelector('#temp');
let scale = 1;
let growing = true;

setInterval(() => {
  if (growing) {
    scale += 0.05; // Aumenta em 5%
    box.style.transform = `scale(${scale})`;
  } else {
    scale -= 0.05; // Diminui em 5%
    box.style.transform = `scale(${scale})`;
  }

  box.style.boxShadow = '1px 1px 20px 10px rgba(0, 0, 0)';

  // Alterna entre crescimento e redução de tamanho
  growing = !growing;
}, 999); // Intervalo total de 3 segundos
