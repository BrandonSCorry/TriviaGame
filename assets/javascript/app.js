//make object to hold data (q's, a's, correct answer , id?)
var triviaData = [
  {
    id: 1,
    q: "What is 2 + 2?",
    ans: ['1', '2', '3', '4'],
    answer: '4',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 2,
    q: "What is 10 * 8",
    ans: ['8', '80', '10', '88'],
    answer: '80',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 3,
    q: "What is 40-45?",
    ans: ['5', '-40', '-5', '10'],
    answer: '-5',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 4,
    q: "What is '5' + '5'?",
    ans: ['10', '5', '55', '50'],
    answer: '55',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 5,
    q: "What is 3 * 5 - 2?",
    ans: ['9', '13', '15', '17'],
    answer: '13',
    ansImg: '',
    failImg: '',
    timeImg: ''
  }
];



//global variables

var startBtn = $('#startBtn');
var showQ = $('#showQ');
var showAnswer = $('#showAnswer');
var txtResult = $('#txtResult');
var imgResult = $('#imgResult');

var genAnsArr = [];

var count = 0;
// var output;

//timer vars
var timeLeft = 30;
var timeOutput = document.getElementById('timer');

var timerInterval = setInterval(timer, 1000);


console.log(triviaData[0].ans);

$("#triviaContain").hide();

//timer
function timer() {
  if (timeLeft == 0) {
    clearTimeout(timerInterval);
    $("#txtResult").html("You ran out of time!");
    $("#imgResult").html(triviaData[count].timeImg);

    timeOut();

    $()

  } else {
    $(timeOutput).html(timeLeft + ' seconds left');
    timeLeft--;
  }
}


//having scope errors trying to get object data in this function
//won't loop because triviaData[count].q & .ans are undefined.
function startTrivia() {

  genAnsArr = [];
  count = 0;


  $("#startContain").hide();
  $("#triviaContain").show();

  showQ.html(triviaData[count].q);

  genAnsArr = triviaData[count].ans;


  showAnswer.html(genAnsArr.map(function (items) {
    return ("<button class='answerBtn' data-answer='" + items + "'>" + items + '</button>');
  }).join("<br>"));
}


function timeOut () {


  if (count <= triviaData.length) {

    setTimeout(function () {

      $("#txtResult, #imgResult").empty();
      $("#showTrivia").show();


      showAnswer.show();


    }, 4000);
  }
  else {
    showEndScreen();
  }
}


function showWin () {
  $("#txtResult").html(triviaData[count].answer + " is correct, you won this time!");
  $("#imgResult").html(triviaData[count].ansImg);

 timeOut();


}

function showFail () {
  $("#txtResult").html("The correct answer was " + triviaData[count].answer + "<br> Better luck next time!");
  $("#imgResult").html(triviaData[count].failImg);

  timeOut();


}

function showEndScreen () {
  $("#triviaContain").empty();
  $("#startContain").show();
  $("#startBtn").html("Restart");
  //show end screen with restart button
}




// //onclick start button
$("#startContain").on("click", startBtn, function(e) {
  e.preventDefault();

  //use on start function -> reset variables, show question and possible answers

   startTrivia();
});

//on click answer button
$("#triviaContain").on("click", ".answerBtn", function(e) {
  //use on start function -> reset variables, show question and possible answers
  e.preventDefault();

  var getBtnAnswer = $(this).data('answer');
  var checkBtnAnswer = getBtnAnswer == triviaData[count].answer;
  console.log(triviaData[count].answer);
  var checkArrLength = count >= triviaData.length;

  if (!checkArrLength) {

    console.log(getBtnAnswer);

    console.log(checkBtnAnswer);

    var checkAnswer = checkBtnAnswer ? showWin() : showFail();

    count++;
    timeLeft = 30;
    $("#triviaContain").show();




    showQ.html(triviaData[count].q);


    genAnsArr = triviaData[count].ans;


    showAnswer.html(genAnsArr.map(function (items) {
      return ("<button class='answerBtn' data-answer='" + items +"'>" + items + '</button>');
    }).join("<br>"));

  }
  else {
    showEndScreen();
    count = 0;

  }

});