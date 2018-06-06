var start = document.querySelector('.btnStart');
var imgContainer = document.querySelector('.imgContainer');
var title = document.querySelector('.title');
var game = document.querySelector('.game');
var volume = document.querySelector('.volume');

var audio_music = new Audio();
audio_music.src = '././sounds/song.mp3';
audio_music.volume = 0.10;

function SetVolume(val) {
  audio_music.volume = val / 100;
}

start.addEventListener('click', function() {
  audio_music.play();
  startGame();
  createQuestion();
});

function startGame() {
  start.parentNode.removeChild(start);
  imgContainer.style.width = '200px';
  title.style.fontSize = '20px';
  game.style.paddingBottom = '180px';
}

function createQuestion() {
  var questionDiv = document.createElement('div');
  var questionP = document.createElement('p');
  var answerDiv = document.createElement('div');
  var answerBtnYes = document.createElement('div');
  var bgBtnYes = document.createElement('div');
  var answerBtnNo = document.createElement('div');
  var bgBtnNo = document.createElement('div');

  game.appendChild(questionDiv);
  questionDiv.setAttribute('class', 'questionContainer');
  questionDiv.appendChild(questionP);
  questionP.setAttribute('class', 'question');
  questionP.textContent = 'Êtes-vous en couple ?';
  questionDiv.appendChild(answerDiv);
  answerDiv.setAttribute('class', 'answer');
  answerDiv.appendChild(answerBtnYes);
  answerBtnYes.setAttribute('class', 'answerYes');
  answerBtnYes.textContent = 'oui';
  answerBtnYes.appendChild(bgBtnYes);
  bgBtnYes.setAttribute('class', 'bgBtnYes');
  answerDiv.appendChild(answerBtnNo);
  answerBtnNo.setAttribute('class', 'answerNo');
  answerBtnNo.textContent = 'non';
  answerBtnNo.appendChild(bgBtnNo);
  bgBtnNo.setAttribute('class', 'bgBtnNo');

  var questionContainer = document.querySelectorAll('.questionContainer');
  var question = document.querySelectorAll('.question');
  setTimeout(function() {
    for (var i = 0; i < questionContainer.length; i++) {
      questionContainer[i].style.opacity = '1';
      question[i].style.display = 'block';
    }
  }, 1000);

  var answerContent = [answerBtnYes, answerBtnNo];
  setTimeout(function() {
    for (var i = 0; i < answerContent.length; i++) {
      answerContent[i].style.opacity = '1';
    }
  }, 1500);

  answerBtnYes.addEventListener('click', removeNo);
  answerBtnNo.addEventListener('click', removeYes);

  function removeNo() {
    answerBtnNo.style.opacity = '0';
    answerBtnNo.style.cursor = 'auto';
    answerBtnNo.removeEventListener('click', removeYes);
    answerBtnYes.removeEventListener('click', removeNo);
    bgBtnYes.style.marginLeft = '0';
    answerBtnYes.style.background = '#8CD790';
    setTimeout(function() {
      bgBtnYes.style.marginLeft = '70px';
    }, 350);
    createQuestion();
    game.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  };

  function removeYes() {
    answerBtnYes.style.opacity = '0';
    answerBtnYes.style.cursor = 'auto';
    answerBtnYes.removeEventListener('click', removeNo);
    answerBtnNo.removeEventListener('click', removeYes);
    bgBtnNo.style.marginLeft = '0';
    answerBtnNo.style.background = '#8CD790';
    setTimeout(function() {
      bgBtnNo.style.marginLeft = '70px';
    }, 350);
    createQuestion();
    game.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  };
};