//I put all my pictures into an array
let allMyPics = Array(document.getElementsByClassName('sliderPic'));

// I generate the buttons triggering actions in order to change the picture on click
document.getElementById('nextSlide').addEventListener('click', function(){

    //I search for the focused picture and parse its value in integer
    let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));
    document.getElementById('focused').removeAttribute('id');


    // I check if my current pic is not the last of the slider
    if(myFocusedPic < allMyPics[0].length){

        //I change the picture focused finding the next one into the array
        allMyPics[0][myFocusedPic].setAttribute('id', 'focused');

    }

    //else I go back to the first one
    else{
        allMyPics[0][0].setAttribute('id', 'focused');
    }

});

// I generate the buttons triggering actions in order to change the picture on click
document.getElementById('prevSlide').addEventListener('click', function(){

    //I search for the focused picture and parse its value in integer
    let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));
    document.getElementById('focused').removeAttribute('id');


    // I check if my current pic is not the last of the slider
    if(myFocusedPic > 1){

        //I change the picture focused finding the next one into the array
        allMyPics[0][myFocusedPic -2].setAttribute('id', 'focused');

    }

    //else I go back to the first one
    else{
        allMyPics[0][allMyPics[0].length -1].setAttribute('id', 'focused');
    }

});