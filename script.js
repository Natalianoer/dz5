var minuts = document.getElementById('min');
var secunds = document.getElementById('sec');
var milisecunds = document.getElementById('milisec');

var circleText = document.getElementById('circleText');

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');
var circle = document.getElementById('circle');

var status = false;

function creatStart() {
  start.style.display = "none";
  stop.style.display = "inline-block";
  reset.style.display = "none";
  circle.style.display = "inline-block";
}
function creatStop() {
  start.style.display = "inline-block";
  stop.style.display = "none";
  reset.style.display = "inline-block";
  circle.style.display = "none";
}
start.addEventListener('click', function () {
  creatStart();
  getTimer();
});
stop.addEventListener('click', function () {
  creatStop();
  stopTimer();
});
reset.addEventListener('click', function () {
  resetTimer();
});
circle.addEventListener('click', function () {
  circleTimer();
})

var currentTimer;
//Калькулятор времени
function getTimer() {
  currentTimer = setInterval(start_time, 0);
  function start_time(status) {
      var this_date = new Date();
      clearInterval(currentTimer);
      currentTimer = setInterval(function(){
        var new_date = new Date() - this_date;
        var milisec   = Math.abs((new_date%1000)); //milisek
        var sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
        var min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
        if (milisec.toString().length   == 1) milisec   = '0' + milisec;
        if (sec.toString().length   == 1) sec   = '0' + sec;
        if (min.toString().length   == 1) min   = '0' + min;
        minuts.innerHTML = (min + ':');
        secunds.innerHTML = (sec + '.');
        milisecunds.innerHTML = milisec;
      },100);
    };
};

function stopTimer() {
    clearInterval(currentTimer);
    status = true;
}

function pauseTimer() {
  if (status == true) {
    clearInterval(currentTimer);
    getTimer();
    status = false;
  }
}

function resetTimer() {
  minuts.innerHTML = '00:';
  secunds.innerHTML = "00.";
  milisecunds.innerHTML = "00";
  circleText.innerHTML = "";
}

function circleTimer() {
  var timeCircle = document.createElement("p");
  timeCircle.className = "timeCircle";
  circleText.appendChild(timeCircle);
  timeCircle.innerHTML = minuts.innerHTML + secunds.innerHTML + milisecunds.innerHTML;
}


// function createTime(timeType) {//создаем блоки для отображения времени
//   var timeCircle = document.createElement("div");
//   timeCircle.className = "timeCircle";
//   timeBlock.appendChild(timeCircle);
//   timeCircle.innerHTML = (timeType);
// };
//
// function createBlock(type) {
//   var timeBlock = document.createElement("div");
//   timeBlock.className = "timeBlock";
//   circleText.appendChild(timeBlock);
//
//   var lamText = document.createElement("div");
//   lamText.className = "lamText";
//   timeBlock.appendChild(lamText);
//   lamText.innerHTML = (type);
//
//   createTime(minuts);
//   createTime(' : ');
//   createTime(secunds);
//   createTime(' . ');
//   createTime(milisecunds);
// }
