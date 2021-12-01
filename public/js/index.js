var buttonRecom = document.querySelector(".recommend-btn");
buttonRecom.addEventListener("click", function () {
    //createANewRecommendation;
    buttonRecom.innerHTML = "Thank you so much!!!";
    setTimeout(function (){
        buttonRecom.innerHTML = "Please refresh if you want to add recommendation again.";
    }, 10000)
    //alert("Thank you so much");
})
