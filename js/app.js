var start = document.querySelector('.btnStart');
var imgContainer = document.querySelector('.imgContainer');
var title = document.querySelector('.title');
var game = document.querySelector('.game');

start.addEventListener('click', function() {
  startGame();
  createQuestion();
});

function startGame() {
  start.parentNode.removeChild(start);
  imgContainer.style.width = '200px';
  title.style.fontSize = '20px';
  game.style.paddingBottom = '250px';
}

function createQuestion() {
  var questionDiv = document.createElement('div');
  var questionP = document.createElement('p');
  var answerDiv = document.createElement('div');
  var answerBtnYes = document.createElement('button');
  var answerBtnNo = document.createElement('button');

  game.appendChild(questionDiv);
  questionDiv.setAttribute('class', 'questionContainer');
  questionDiv.appendChild(questionP);
  questionP.setAttribute('class', 'question');
  questionP.textContent = 'Êtes-vous en couple ?'
  questionDiv.appendChild(answerDiv);
  answerDiv.setAttribute('class', 'answer');
  answerDiv.appendChild(answerBtnYes);
  answerBtnYes.setAttribute('class', 'answerYes');
  answerBtnYes.textContent = 'oui';
  answerDiv.appendChild(answerBtnNo);
  answerBtnNo.setAttribute('class', 'answerNo');
  answerBtnNo.textContent = 'non';

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
  }, 2000);

  answerBtnYes.addEventListener('click', removeNo);
  answerBtnNo.addEventListener('click', removeYes);

  function removeNo() {
    answerBtnNo.style.opacity = '0';
    answerBtnNo.style.cursor = 'auto';
    answerBtnNo.removeEventListener('click', removeYes);
    answerBtnYes.removeEventListener('click', removeNo);
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
    createQuestion();
    game.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center"
    });
  };
};