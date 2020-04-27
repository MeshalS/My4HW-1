///// adding the object 
var questions = [{ q: "the array in javascrit is represented by", a: ["[ ]", "{ }", " ( )", "< >"], right: 0 },
{ q: "function in JaveScrpit", a: ["game", "array", "perfomre task", "< >"], right: 2 },

{ q: "what is the condtional  ", a: ["if ", "array", "task", "< >"], right: 0 },
];

// decalering all veriable 
var timer = questions.length * 15;
var correctAnswers = 0;
var right = null;
var counter = 0;
var setIntervalId;
var scores;
/// creating the strat that will start  
function start() {
  console.log('start action ');
  document.getElementById("message").textContent = "";
  clearall();
  setIntervalId = setInterval(countdown, 1000);

}
///  this will when you hit start it will fired 
function StartQuiz() {
  console.log('start quiz  action ');
  /// list of classe add the hidden button to hidde daymically 
  document.getElementById("StartBtn").classList.add("hidden");

  start();
}
/// adding this funcation countdow so count the time and go you have the timer that will count 
function countdown() {
  document.getElementById("begin").classList.remove("hidden");
  document.getElementById("message").classList.remove("hidden")
  timer--

  document.getElementById("timer").textContent = timer;
//// here where it will be hidden and clearing 
  if (timer <= 0) {

    clearInterval(setIntervalId);
    document.getElementById("begin").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");
    document.getElementById("highScore").classList.remove("hidden")


  }
  else {

    if (timer % 15 === 0) {
      counter++;
    }

    if (counter < questions.length) {
      load(counter);

    }
    else {

      clearInterval(setIntervalId);
      document.getElementById("highScore").classList.remove("hidden")

      document.getElementById("timer").classList.add("timer");
    }


  }

}
/// here where it will have the funcation to start and having seeting the local stroge
function SaveInitials() {
  var initials1 = document.getElementById("initials").value
  var highScore = document.getElementById("timer").innerHTML
  document.getElementById("highScore").classList.add("hidden")
  document.getElementById("timer").classList.add("hidden")

  document.getElementById("goback").classList.remove("hidden")
  localStorage.setItem("initials", initials1)

  localStorage.setItem("time", highScore)


}
/// it will didsplay the result
function displayResults() {
  var initials = localStorage.getItem("initials") || ""
  var time1 = localStorage.getItem("time") || ""


  scores = "<h3>" + initials + "..." + time1 + "</h3>"
  document.getElementById("Results").innerHTML = scores;

}
/// here will it will valdiate about the answer 
function go() {
  console.log("Submitting")
  var massage = "";
  if (document.getElementById(right.toString()).checked === false) {
    timer = timer - 15;
    massage = "inccorect "
  }
  else {
    massage = "correct answer "


  }
  clearInterval(setIntervalId);

  console.log(massage)
  showMassage(massage)
  setTimeout(start, 3000)
  counter++
}

// this the message that will be shown iif you have right or Wrong answer 
function showMassage(message) {
  document.getElementById("message").textContent = message;
}
// this where you will be back to the Question to take the exame again 
function goback() {
  console.log('go back   action ');
  document.getElementById("StartBtn").classList.remove("hidden");
  document.getElementById("goback").classList.add("hidden");
  document.getElementById("Results").classList.add("hidden");
  document.getElementById("highScore").classList.add("hidden");

  location.reload();




}


function reloadPage() {
  location.reload();
}

//// this where it will load all Question and the Rgith 
function load(i) {
  clearall()
  document.getElementById("0").classList.remove("hidden")
  document.getElementById("1").classList.remove("hidden")

  document.getElementById("2").classList.remove("hidden")
  document.getElementById("3").classList.remove("hidden")
  document.getElementById("textW").classList.add("hidden") 
  var question = questions[i]
  document.getElementById("question").innerHTML = question.q;
  document.getElementById("a1").innerHTML = question.a[0];
  document.getElementById("a2").innerHTML = question.a[1];
  document.getElementById("a3").innerHTML = question.a[2];
  document.getElementById("a4").innerHTML = question.a[3];
  document.getElementById("num").innerHTML = "Question #" + (counter + 1);
  right = question.right;
}
// having celaer the answer to it can be cleared out 
function clearall() {

  document.getElementById("0").classList.add("hidden")
  document.getElementById("1").classList.add("hidden")

  document.getElementById("2").classList.add("hidden")
  document.getElementById("3").classList.add("hidden")



  document.getElementById("question").innerHTML = "";
  document.getElementById("a1").innerHTML = "";
  document.getElementById("a2").innerHTML = "",
    document.getElementById("a3").innerHTML = ""
  document.getElementById("a4").innerHTML = "";
  document.getElementById("num").innerHTML = "";

  document.getElementById("0").checked = false;
  document.getElementById("1").checked = false;

  document.getElementById("2").checked = false;
  document.getElementById("3").checked = false;
}