//make object to hold data (q's, a's, correct answer , id?)
var triviaData = [
  {
    id: 1,
    q: "q1",
    ans: ['a', 'b', 'c', 'd'],
    answer: 'a',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 2,
    q: "q2",
    ans: ['a', 'b', 'c', 'd'],
    answer: 'b',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 3,
    q: "q3",
    ans: ['a', 'b', 'c', 'd'],
    answer: 'c',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 4,
    q: "q4",
    ans: ['a', 'b', 'c', 'd'],
    answer: 'd',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 5,
    q: "q5",
    ans: ['a', 'b', 'c', 'd'],
    answer: 'a',
    ansImg: '',
    failImg: '',
    timeImg: ''
  }
];


//TODO: TO create answer 'buttons' for each answer to 1 question: use forEach or .map to generate each answer string for the question set array index triviaData[i].id  , triviaData[i].ans etc??
//TODO: use ternary op to check if answer is correct (make a variable) ex:   var checkAnswer = //get obj info from each button on click, check against answer obj prop, ex : triviaData[i].ans.a/b/c/d === triviaData[i].answer
//TODO then use tern op ? :     var isCorrect = checkAnswer? "Correct" : !checkAnswer? "Incorrect";   <-   use var isCorrect
//TODO: make sure to reset time on correct ans, incorrect ans, page load, etc?
//global variables


//TODO: FIRST!! IMPORTANT!! just get 1st question to display in #showQ and 1st set of triviaData.ans[i] (with map or forEach to generate, then jquery display on page both)
var startBtn = $('#startBtn');
var showQ = $('#showQ');
var showAnswer = $('#showAnswer');
var txtResult = $('#txtResult');
var imgResult = $('#imgResult');

var genAnsArr = [];
var genQArr = [];

var count = 0;
var output;


console.log(triviaData[0].ans);
//show q function

$("#triviaContain").hide();

function startTrivia() {

  $("#startContain").hide();
  $("#triviaContain").show();




  showQ.html(triviaData[count].q);

  genAnsArr = triviaData[count].ans;


  $(showAnswer).html(genAnsArr.map(function (items) {
    return ("<button class='answerBtn' data-answer='" + items +"'>" + items + '</button>');
  }).join("<br>"));




  //generate array buttons whyyy is this so hard




  // genAnsArr.forEach (() => {
  //
  //     $("#showAns").append("<button class='triviaAns' data-topic='" + triviaData.ans +"'>" + triviaData.ans + '</button>');
  //
  //
  //   }
  //
  // );

  // showAns.html(triviaData[0].ans);

}

function timeOut () {
  setTimeout(function() {
    showQ.html(triviaData[count].q);

    genAnsArr = triviaData[count].ans;
    console.log(genAnsArr[count]);


    $(showAnswer).html(genAnsArr.map(function (items) {
      $(showAnswer).html("<button class='answerBtn' data-answer='" + items +"'>" + items + '</button>');
    }).join("<br>"));

  }, 1000);
}


function showWin () {
  $("#showAnswer").hide();
  $("#txtResult").html(triviaData[count].answer + " is correct, you won this time!");
  $("#imgResult").html(triviaData[count].ansImg);

 timeOut();


}

function showFail () {
  $("#showAnswer").hide();
  $("#txtResult").html("The correct answer was " + triviaData[count].answer + "<br> Better luck next time!");
  $("#imgResult").html(triviaData[count].failImg);

  timeOut();


}

function showTimeOut () {
  var thisData = this.triviaData;
  var extraData = thisData.timeImg;
  $("#txtResult").html("You ran out of time!");
  $("#imgResult").html(triviaData[count].timeImg);
  console.log(thisData);
}

  // add this question and its answers to the output
  // output.push(
  //   `<div class="question"> ${currentQuestion.question} </div>
  //       <div class="answers"> ${answers.join("")} </div>`
  // );


// //might not need reset
// function resetTrivia() {
//
// }
// //combine this !
// function generateQ() {
//   var output = [];
//   showQ.innerHTML()
//
//
//
//
//
//   // for each question...
//   // triviaData.forEach(
//   //   (currentQuestion, questionNumber) => {
//   //
//   //     // we'll want to store the list of answer choices
//   //     genAnsArr = [];
//   //
//   //     // and for each available answer...
//   //     for(letter in currentQuestion.ans){
//   //
//   //       // ...add an HTML radio button
//   //       answers.push(
//   //           ${currentQuestion.answers[letter]}
//   //        );
//   //     }
//   //
//   //     // add this question and its answers to the output
//   //     output.push(
//   //       `<div class="question"> ${currentQuestion.question} </div>
//   //       <div class="answers"> ${answers.join('')} </div>`
//   //     );
//   //   }
//   // );
//   //
//   // // finally combine our output list into one string of HTML and put it on the page
//   // quizContainer.innerHTML = output.join('');
//   //
//   // // for each question...
//   // for(var i=0; i<questions.length; i++){
//   //
//   //   // first reset the list of answers
//   //   answers = [];
//   //
//   //   // for each available answer...
//   //   for(letter in questions[i].answers){
//   //
//   //     // ...add an html radio button
//   //     answers.push(
//   //       '<label>'
//   //       + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//   //       + letter + ': '
//   //       + questions[i].answers[letter]
//   //       + '</label>'
//   //     );
//   //   }
//   //
//   //   // add this question and its answers to the output
//   //   output.push(
//   //     '<div class="question">' + questions[i].question + '</div>'
//   //     + '<div class="answers">' + answers.join('') + '</div>'
//   //   );
//   // }
//
//   // finally combine our output list into one string of html and put it on the page
//   // quizContainer.innerHTML = output.join('');
//   //
//
// }
//
// function generateAns() {
//
// }
//
//
// function generateImg() {
//
// }
//
// function generateTxt() {
//
// }
//
//
//
//
// //start function (maybe connect this to a 'start' button on load?
//
//
// //update/reset function
//
// //check answer function
//
//
// //stuff with timer? etc
//
// //call stuff
// // show q's in triviaContain
// // genTrivia(questions, quizContainer);
//
// //TODO: more onclick stuff, and timers
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
  var checkBtnAnswer = getBtnAnswer === triviaData[count].answer;

 //todo: checkBtnAnswer? call win function : !checkBtnAnswer? call lose function;
  //todo: add timeout, and then call startTrivia function (remove startbutton from startTrivia)

  //todo: if any condition is met, call startTrivia();
  console.log(getBtnAnswer);

  console.log(checkBtnAnswer);

  var checkAnswer = checkBtnAnswer? showWin() : showFail();

  count++;







  //get button val / data-answer / etc? and compare it against current answer
  // if answer is correct , go to win screen and gamereStart
  // if answer is wrong, go to lose screen and gamereStart
  // if time runs out (outside of this onclick), show time out screen adn gamerestart
});