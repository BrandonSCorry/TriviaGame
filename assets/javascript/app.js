//make object to hold data (q's, a's, correct answer , id?)
var triviaData = [
  {
    id: 1,
    q: "q",
    ans: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    answer: 'a',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 2,
    q: "q2",
    ans: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    answer: 'b',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 3,
    q: "q3",
    ans: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    answer: 'c',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 4,
    q: "q4",
    ans: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
    answer: 'd',
    ansImg: '',
    failImg: '',
    timeImg: ''
  },
  {
    id: 5,
    q: "q5",
    ans: {
      a: '',
      b: '',
      c: '',
      d: ''
    },
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


//start function (maybe connect this to a 'start' button on load?


//update/reset function

//check answer function


//stuff with timer? etc