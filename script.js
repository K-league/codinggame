// variables
var q1 = document.querySelector("Question 1");
var q2 = document.querySelector("Question 2");
var q3 = document.querySelector("Question 3");
var q4 = document.querySelector("Question 4");
var q5 = document.querySelector("Question 5");



var question = [];


// add buttons to js

// array
// var question = [q1, q2, q3, q4, q5];
// document.getElementById("demo").innerHTML = question[q1];

function renderQuestions() {
    question.innerHTML= "";
    question.textContent = question.length;
    
    for (var i = 0; i < question.length; i++) {
        var question = question[i];
        var li = document.createElement("li");
        li.textContent.textContent = question;
        li.setAttribute("data-index", i);

        var button = document.createElement("li");
        button.textContent = "Submit";


    }
}
// var cars = ["Saab", "Volvo", "BMW"];
//document.getElementById("demo").innerHTML = cars[0];


// storage