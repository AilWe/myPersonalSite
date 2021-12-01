
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var flag = true;
var level = 0;
//restart game
function startOver(){
    level = 0;
    flag = true;
    gamePattern = [];
    userClickedPattern = [];

}
//check ans
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(currentLevel === gamePattern.length-1){
            //true, start next round
            setTimeout(nextSequence, 1000);
            userClickedPattern = [];
        }
    }
    else {
        //false start over
        var sound = new Audio("/sound/simonsounds/wrong.mp3");
        sound.play();
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200)
        $("#level-title").text("Game over, Press Any Key or Start again Button to Restart");
        startOver();
        console.log("false");
    }

}
//start game
$(document).keypress(function () {
    if(flag) {
        $('#level-title').text("Level 0");
        nextSequence();
        flag = false;
    }
});

$(".button-29").click(function (){
    if(flag) {
        $('#level-title').text("Level 0");
        nextSequence();
        flag = false;
    }
});

//next generate sequence
function nextSequence(){

    level++;
    $('#level-title').text("Level " + level );
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("."+randomChosenColour).fadeOut();
    $("."+randomChosenColour).fadeIn();

    playSound(randomChosenColour);

}
//select color by user
$(".btn").click(function (){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    //alert(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

//play sound
function playSound(name){
    var sound = new Audio("/sound/simonsounds/"+ name +".mp3");
    sound.play();
}
//flash in and out
function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100)
}





