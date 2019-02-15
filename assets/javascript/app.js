var time = 10;
var timer;
var correct = 0;
var wrong = 0;
var doneBtnClicked = false;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//create a start button
function startBtn() {
    var startBtn = ("<button id='start-btn'>Start</button>");
    $("#start-btn-area").append(startBtn);
};

//this resets the time, hiding the quiz area and showing the start button
function reset() {
    $("#quiz-area").hide();
    time = 10;
    startBtn();
};
reset();

//creates a done button that once clicked leads to results-area div
function doneBtn() {
    var doneBtn = ("<button id='done-btn'>Done</button>");
    $("#done-btn-area").append(doneBtn);
    $("#done-btn").on('click', function(){
        console.log('I was clicked')
        results();
    })
};

//creates a results-area showing right and wrong answers
function results() {
    $("#quiz-area").hide();
    $("#done-btn").hide();
    var resultsArea = $("<div id='result-area'>");
    var resultTitle = $("<h4 id='result-title'>").text("Results")
    var rightAnswers =$("<p id='right-answers'>").text("Correct answers: " + correct);
    var wrongAnswers =$("<p id='wrong-answers'>").text("Wrong answers: " + wrong);
    resultsArea.append(resultTitle, rightAnswers, wrongAnswers);
    $(".container").append(resultsArea);
    // setTimeout(function() {
    //     location.reload();
    //     }, 5000);
};

//this sets the interval in which the count should decrement
function countDown() {
    timer = setInterval(count, 1000);
};

//this stops the timer
function stop() {
    clearInterval(timer);
};

//this countdown the numbers and if it reaches 0, stops the timer. 
//The second if stops the results div area from appearing twice
function count() {
    time--;
    $("#countdown").text(time);
    if (time === 0) {
        stop();
        if(!doneBtnClicked) {
        doneBtnClicked = true;
        $("#result-area").hide();
    }
    results(); 
    };
};

function start() {
    $('#start-btn').on('click', function() {
        $("#start-btn-area").hide();
        $("#quiz-area").show();
        countDown();
        doneBtn();
    });
};

start();

//check if checkboxes have been clicked
$("input:checkbox").on('click', function() {
    var $guess = $(this);
    // if the input is checked 
    if ($guess.is(":checked")) {
        //checkbox grouping solution by bPratik at 
        //https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group
        //group the groupings
        var group = "input:checkbox[name='" + $guess.prop("name") + "']";
        $(group).prop("checked", false);
        $guess.prop("checked", true);
        //check the guess is correct
        if ($guess.val() === "Borderline" || $guess.val() === "ET" || 
        $guess.val() === "WWW" || $guess.val() === "Argentina") {
            //add to the correct number counter
            correct++;
            console.log(correct);
        }
        else {
            //add to the wrong number counter
            wrong++;
        }
     }
    else {
        $guess.prop("checked", false)
    }
    //if the value are any of the following 
});









