var minuts = document.getElementById('min');
var secunds = document.getElementById('sec');
var milisecunds = document.getElementById('milisec');

var circleText = document.getElementById('circleText');

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var circle = document.getElementById('circle');

var status = 0;
var init = 0;
var k = 0;//количество кругов

let [milisec, sec, min] = [0, 0, 0]

function creatStart() {
  reset.style.display = "none";
  circle.style.display = "inline-block";
}
function creatStop() {
  reset.style.display = "inline-block";
  circle.style.display = "none";
}
start.addEventListener('click', function () {
  if (status == 0) {
      stop();
      getTimer();
      creatStart();
      status = 1;
      start.innerHTML = "Пауза";
  } else {
      creatStop()
      clearTimeout(currentTimer);
      status = 0;
      start.innerHTML = "Старт";
  }
});
reset.addEventListener('click', function () {
  resetTimer();
});
circle.addEventListener('click', function () {
  circleTimer();
});

var currentTimer;
//Калькулятор времени
function getTimer() {
  milisec++;
  if (milisec > 60) {
      sec++;
      milisec = milisec - 60;
  }
  if (sec > 60) {
      min++;
      sec = sec - 60;
  }
  if (milisec.toString().length   == 1) milisec   = '0' + milisec;
  if (sec.toString().length   == 1) sec   = '0' + sec;
  if (min.toString().length   == 1) min   = '0' + min;
  minuts.innerHTML = (min + ':');
  secunds.innerHTML = (sec + '.');
  milisecunds.innerHTML = milisec;
  currentTimer = setTimeout(getTimer, 1000 / 60);
};

function resetTimer() {
  minuts.innerHTML = '00:';
  secunds.innerHTML = "00.";
  milisecunds.innerHTML = "00";
  circleText.innerHTML = "";
  status = 0;
}
function circleTimer() {
  printNumbers();
  var timeCircle = document.createElement("p");
  timeCircle.className = "timeCircle";
  circleText.appendChild(timeCircle);
  timeCircle.innerHTML = minuts.innerHTML + secunds.innerHTML + milisecunds.innerHTML;
  var br = document.createElement("br");
  circleText.appendChild(br);
}
function printNumbers() {
  var count = document.createElement("p");
  count.className = "countCircle";
  circleText.appendChild(count);
  k++;
  count.innerHTML = k + " круг ";
}
