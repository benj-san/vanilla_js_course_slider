//I put all my pictures into an array
let allMyPics = document.getElementsByClassName('sliderPic');

// I generate the buttons triggering actions in order to change the picture on click
document.getElementById('nextSlide').addEventListener('click', function(){

    //I search for the focused picture and parse its value in integer
    let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));

    //i remove the focus on the current picture
    document.getElementById('focused').removeAttribute('id');

    // I check if my current pic is not the last of the slider
    if(myFocusedPic < allMyPics.length){

        //I change the picture focused finding the next one into the array
        allMyPics[myFocusedPic].setAttribute('id', 'focused');

    }

    //else I go back to the first one
    else{
        allMyPics[0].setAttribute('id', 'focused');
    }

});

document.getElementById('prevSlide').addEventListener('click', function(){

    let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));
    document.getElementById('focused').removeAttribute('id');

    if(myFocusedPic > 1){
        allMyPics[myFocusedPic -2].setAttribute('id', 'focused');
    }
    else{
        allMyPics[allMyPics.length -1].setAttribute('id', 'focused');
    }

});


let myInterval;

//Put the setInterval into a castable variable, encapsulate it into a function
function sliderAutoRun(){
    myInterval = setInterval(changePic, 7000);
};

//Set the auto rotation of the slider
function changePic(){
    let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));
    document.getElementById('focused').removeAttribute('id');

    if(myFocusedPic < allMyPics.length){
        allMyPics[myFocusedPic].setAttribute('id', 'focused');
    }
    else{
        allMyPics[0].setAttribute('id', 'focused');
    }
}

//Launch the autoRun
sliderAutoRun();

//ResetAutorun when needed -- queryselectorall is needed because tagname collection return a html collection, unmatching the foreach
let myButtons = document.getElementById('container').querySelectorAll('button');
myButtons.forEach(e => {
    e.addEventListener('click', function(){
        console.log('you pulled the trigger of my ...');
        clearInterval(myInterval);
        sliderAutoRun();
    })
});