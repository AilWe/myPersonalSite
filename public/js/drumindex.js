
//keyboard press
document.addEventListener("keydown", function(event){
    var buttonText = event.key;
    makeSound(buttonText)
    buttonAnimation(buttonText);
});
//mouse click
var listButton = document.querySelectorAll(".drum");
for(var i = 0; i< listButton.length; ++i) {
    listButton[i].addEventListener("click", function () {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });
}
//play the sound
function makeSound(key){
    switch(key){
        case 'w' :
            var tom1 = new Audio('/sound/drumsounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a' :
            var tom2 = new Audio('/sound/drumsounds/tom-2.mp3')
            tom2.play();
            break;
        case 's' :
            var tom3 = new Audio('/sound/drumsounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd' :
            var tom4 = new Audio('/sound/drumsounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j' :
            var snare = new Audio('/sound/drumsounds/snare.mp3')
            snare.play();
            break;
        case 'k' :
            var crash = new Audio('/sound/drumsounds/crash.mp3')
            crash.play();
            break;
        case 'l' :
            var kick = new Audio('/sound/drumsounds/kick-bass.mp3')
            kick.play();
            break;
        default:

        //
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}






