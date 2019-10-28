$(document).ready(function(){
$("#restart").hide();

$(".start").click( function() {
    $("#startScreen").fadeOut(1000);
    $('#game').hide()
    $('#game').fadeIn(1000)
    setTimeout(decrement,1000)
});
//countdown timer
// var mins = 1;
var secs = 60;
var currentMins = 0;
var currentSecs = 0;
var intervalId;

// setTimeout(decrement,1000);

function decrement(){
    currentMins = Math.floor(secs/60);
    currentSecs = secs % 60;
    if ( currentSecs <= 9) currentSecs = "0" + currentSecs; secs--;
    $("#timer").text("Time left: " + currentMins + ":" + currentSecs);
    // if(secs !== -1) 
    if(secs === -1){
        check();
        $("#restart").show();
        $(".done").hide();
    }
    else{
    setTimeout(decrement, 1000);
}};




// var number = 180;
// var intervalId;

// function run(){
//     clearInterval(intervalId);
//     intervalId= setInterval(decrement,1000);
// }

// function decrement(){
//     number--;
//     $('#timer').html('<h2>' + number + '</h2>');

//     if(number === 0 ){
//         stop();
//         alert("Time up!")
//     }
// }

// function stop(){
//     clearInterval(intervalId);
// }
// run();


// When a user selects the correct answer it gets added to the correct total
//if it's incorrect gets added to incorrect total
var correct = 0;
var incorrect = 0;

function check(){
    var question1 = document.quiz.q1.value;
    var question2 = document.quiz.q2.value;
    var question3 = document.quiz.q3.value;
    var question4 = document.quiz.q4.value;
    var question5 = document.quiz.q5.value;
    var question6 = document.quiz.q6.value;
    var question7 = document.quiz.q7.value;

        if (question1 === "Hulk"){
            correct++;
        }
        else {
            incorrect++;
        }
        
        if (question2 === "6") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (question3 === "Asgard") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (question4 === "Wakanda"){
            correct++;
        }
        else {
            incorrect++;
        }
        if (question5 === "Aldrich Killian") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (question6 === "Time"){
            correct ++;
        }
        else{
            incorrect++;
        }
        if (question7 === "Black Panther"){
            correct++;
        }
        else {
            incorrect++;
        }


        $('.correct').html("Correct: " + correct);
        $('.incorrect').html("Incorrect: " + incorrect);
        }
$(".done").on("click", function(){
    check();
    $('.correct').show()
    $('.incorrect').show()
    $("#restart").show();
    $(".done").hide();
    $("#quiz").hide();
})

function uncheck(){
    document.getElementById("hulk").checked = false;
    document.getElementById("iron-man").checked = false;
    document.getElementById("thor").checked = false;
    document.getElementById("vision").checked = false;
    document.getElementById("4").checked = false;
    document.getElementById("10").checked = false;
    document.getElementById("8").checked = false;
    document.getElementById("6").checked = false;
    document.getElementById("earth").checked = false;
    document.getElementById("vormir").checked = false;
    document.getElementById("asgard").checked = false;
    document.getElementById("ego").checked = false;
    document.getElementById("gotham").checked = false;
    document.getElementById("san").checked = false;
    document.getElementById("asgard1").checked = false;
    document.getElementById("wakanda").checked = false;
    document.getElementById("ultron").checked = false;
    document.getElementById("aldrich").checked = false;
    document.getElementById("thanos").checked = false;
    document.getElementById("hydra").checked = false;
    document.getElementById("soul").checked = false;
    document.getElementById("time").checked = false;
    document.getElementById("power").checked = false;
    document.getElementById("mind").checked = false;
    document.getElementById("black").checked = false;
    document.getElementById("iron").checked = false;
    document.getElementById("thor2").checked = false;
    document.getElementById("cap").checked = false;
}
function restart(){
     correct = 0;
     incorrect = 0;
     secs= 60;
     currentSecs = 0;
     currentMins = 0;
    uncheck()
     $('.correct').hide()
     $('.incorrect').hide()
     $(".done").show()
     $("#restart").hide()
     $("#quiz").show()
    
}
$("#restart").on("click", function(){
    restart();
})
});
