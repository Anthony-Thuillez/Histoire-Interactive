var start = document.querySelector('.btnStart');
var imgContainer = document.querySelector('.imgContainer');
var title = document.querySelector('.title');
var game = document.querySelector('.game');
var volume = document.querySelector('.volume');
var count = 0;

function next(cb) {
  count += cb;
}

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
  questionP.textContent = data.questions[count].question;

  if (data.questions[count].question !== 'Faites un enfant.' &&
    data.questions[count].question !== 'Ne faites pas d\'enfant.' &&
    data.questions[count].question !== 'Adoptez un enfant.' &&
    data.questions[count].question !== 'Discuté(e) avec votre conjoint.') {
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
  } else {
    questionP.style.backgroundColor = '#EF303B';
  }

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

  answerBtnYes.addEventListener('click', choiceYes);
  answerBtnNo.addEventListener('click', choiceNo);

  function choiceYes() {
    answerBtnNo.style.opacity = '0';
    answerBtnNo.style.cursor = 'auto';
    answerBtnNo.removeEventListener('click', choiceNo);
    answerBtnYes.removeEventListener('click', choiceYes);
    bgBtnYes.style.marginLeft = '0';
    answerBtnYes.style.background = '#8CD790';
    next(data.questions[count].yes);
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

  function choiceNo() {
    answerBtnYes.style.opacity = '0';
    answerBtnYes.style.cursor = 'auto';
    answerBtnYes.removeEventListener('click', choiceYes);
    answerBtnNo.removeEventListener('click', choiceNo);
    bgBtnNo.style.marginLeft = '0';
    answerBtnNo.style.background = '#8CD790';
    next(data.questions[count].no);
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