// chamando variáveis
//ADICIONAR CONSTANTES AVANÇAR E RETROCEDER
const buttonPlay = document.querySelector('#play');
const buttonPause = document.getElementById("pause");
const progressBar = document.getElementById("progressBar");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");

//metodo de audio
//ADICIONAR OS CAMINHOS DAS MUSICAS SEGUINTES
const music = new Audio('./Computadores-Fazem-Arte.mp3');
let interval;

// funções

function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }

  function updateMusicTime() {
    const progresso = (music.currentTime / music.duration) * 100;
    progressBar.value = progresso;
    tempoAtual.textContent = formatarTempo(music.currentTime);
  }

  music.addEventListener('loadedmetadata', function () {
    tempoTotal.textContent = formatarTempo(music.duration);
  });

   //ADICIONAR AS FUNÇÕES AVANÇAR E RETROCEDER
function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    music.play();
    interval = setInterval(updateMusicTime, 1000);
  }

  function pause() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    music.pause();
  }

  //ADICIONAR OS EVENTOS AVANÇAR E RETROCEDER
  buttonPlay.addEventListener('click', play);
  buttonPause.addEventListener('click', pause);