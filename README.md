# My4HW-1

this homework is where you can start the a quiz. it took from alot of hours to Work on it becuase ot the logic behind. 

first i start to think about the countdown where if you have right answer you will go and will not take out any points from you and if you have wrong answer you will lose 15 sco
first i create verabile 
so it can be * 15 of length of the Question 
var timer = questions.length * 15;

i also had the coutndown 
where i set the ID of interval and having the funcation countdown 
 setIntervalId = setInterval(countdown, 1000);
 
also i have to have the local stogae that will save the time and the name entered 

function SaveInitials() {
  var initials1 = document.getElementById("initials").value
  var highScore = document.getElementById("timer").innerHTML
  document.getElementById("highScore").classList.add("hidden")
  document.getElementById("timer").classList.add("hidden")

  document.getElementById("goback").classList.remove("hidden")
  localStorage.setItem("initials", initials1)

  localStorage.setItem("time", highScore)


}

laater i had to have the get so as to fetch the data and get me the score and the name . 

Note :- it lack of the commit due to doing on my local computer and aftar i found out it was hard to keep it 