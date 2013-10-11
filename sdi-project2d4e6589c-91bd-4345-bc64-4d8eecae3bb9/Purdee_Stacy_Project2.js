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
var secondPrompt;


console.log("My name is " + strName + " and I have " + numChores + " chores to do before lunch.");
console.log("My chores are " + arrChoresAre + " .");

//Prompt
prompt("Would you like too help with my chores?");

//Procedure
var hoursForHomework = function (freeHours) {

if (freeHours > 1) {
    console.log("I have " + freeHours + " hours of homework to do before I can do my chores or cook lunch.");

} else {
    console.log("I don't have time to do homework before lunch");
    
    }
};

hoursForHomework(2);

//Confirm
secondPrompt = confirm("What would you like some lunch?");

//Boolean Function

var todaysLunch = function(Hamburgers, Fries, SweetTea){
    
if (Hamburgers + Fries + SweetTea > 0) {
    var cook = true;
    return cook;
    
} else {
    var orderChineseTakeout = false;
    return orderChineseTakeout;
    }
};

var iWillCook = todaysLunch(3,1,1);

console.log("It is " + iWillCook + " that I will cook hamburgers, french fries and sweet tea for lunch.");


//Number Function
var pagesToRead = function(pages){
    while (pages < 0) {
       console.log(pages + " pages left to read.");
       var pages = pages + 9;
    }
return pages;
};

var pagesRead = pagesToRead(22);

console.log( "I have read " + pagesRead + " pages of my textbook- Beginning JavaScript so far.")
;

//String Function
var homeworkToFinish = function(project2, video){
    var myProject2 = ("It is a very long assignment.");
    var myVideo = ("It will not take long to make a new video.");
    return project2 + myProject2 +  "but " + video + myVideo;
};

var homework = homeworkToFinish(" SDI Wk 2 Assignment", "SDI Reflection Video");

console.log("I will do my Project first than I will make my video.");

//Array Function
//ArrayFunction

var extraReadingMaterial = function(books, time){
    for (var bookNumber = 3; bookNumber < books.length; bookNumber++){
        var iRead = books;
        var bookName = books[bookNumber];
        timeThisBook = time[bookNumber];
console.log("I have started to read " + bookName + "for" + timeThisBook + "minutes.");
    for (var minutes = 3; minutes < timeThisBook; minutes + 15){
        var timeLeft = timeThisBook- minutes;
console.log(minutes + " read" + timeLeft + "left");
    }
console.log("I will read " + bookName + ".");
    return iRead;
    }

};
console.log("I am reading from " + arrFavBooks + " to help learn JavaScript.");


//Returned Values



//Output
console.log("I managed to get my project done. Hopefully I did better than last time.");

//Finish
