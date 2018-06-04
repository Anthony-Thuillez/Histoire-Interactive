var start = document.querySelector('.btnStart');
var imgContainer = document.querySelector('.imgContainer');
var title = document.querySelector('.title');
var questionContainer = document.querySelector('.questionContainer');
var question = document.querySelector('.question');
var answer = document.querySelectorAll('.answerYes, .answerNo');
var yes = document.querySelector('.answerYes');
var no = document.querySelector('.answerNo');
var question2 = document.querySelector('.question2');


start.addEventListener('click', function() {
  start.style.display = 'none';
  imgContainer.style.width = '200px';
  title.style.fontSize = '20px';
  question.style.display = 'block';
  questionContainer.style.opacity = '1';
  question.style.display = 'block';
  setTimeout(function() {
    for (var i = 0; i < answer.length; i++) {
      answer[i].style.opacity = '1';
      console.log('yo');
    }
  }, 2000);
});

yes.addEventListener('click', function() {
  no.style.opacity = '0';
  question2.style.display = 'block';
});

no.addEventListener('click', function() {
  yes.style.opacity = '0';
  question2.style.display = 'block';
});