//alert("JavaScript works!");

/*
Stacy Purdee
October 10th 2013
Project 2
Story with a flowchart
*/

//Global Variables-string, number, boolean
var strName = "Stacy";
var numChores = 3;
var arrChoresAre = ["wash dishes", "vacuum", " and dust"];
var arrFavBooks = [" Beginning JavaScript ", " JavaScript for Absolute Beginners ", " and Step-by-Step JavaScript "];
var arrMinsPerBook = [45, 20, 30];
var booDidStudy = true;
var firstPrompt;

console.log("My name is " + strName + " and I have " + numChores + " chores to do before lunch.");
console.log("My chores are " + arrChoresAre + " .");

//Prompt
firstPrompt = prompt("Would you like too help with my chores?");

//Procedure
var hoursForHomework = function(freeHours){
    if (freeHours > 1) {
        console.log("I have " + freeHours + " hours of homework to do before I can do my chores or cook lunch.");
  } else {
        console.log("I don't have time to do homework before lunch");
  }

};

hoursForHomework(2);

//Confirm

//Boolean Function

//Number Function

//String Function

//Returned Values

//Output

//Finish
