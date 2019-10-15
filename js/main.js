//I put all my pictures into an array
let allMyPics = document.getElementsByClassName('sliderPic');

// We target our slider buttons
let myButtons = document.getElementById('container').querySelectorAll('button');

//while we are under the number of pictures, we create buttons
let i=0;
const myPositionBar = document.getElementById('positionBar');
let myButtonWidth = (1 / (allMyPics.length)) * 100; // Plus simple: 100/allMyPics.length

while(i < allMyPics.length){ //Utiliser un for ou un for..of ?
    //We split the position bar into x elements equal to the number of picture
    let myNewButton = document.createElement('button');
    myPositionBar.appendChild(myNewButton);
    i++;
}
let allMyPositionButtons = myPositionBar.querySelectorAll('button');
allMyPositionButtons.forEach(e => {
    e.style.width = myButtonWidth+'%';
});

let myInterval;

//Put the setInterval into a castable variable, encapsulate it into a function
function sliderAutoRun(){
    myInterval = setInterval(changePic, 7000);
}

//Set the auto rotation of the slider
function changePic(){
    //TODO: Mettre foused dans une variable
    let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1)); // Fonctionne jusque 9 images si j'ai bien compris
    document.getElementById('focused').removeAttribute('id');

    if(myFocusedPic < allMyPics.length){
        allMyPics[myFocusedPic].setAttribute('id', 'focused');
    }
    else{
        allMyPics[0].setAttribute('id', 'focused');
    }

    //We reset all the buttons as transparent colors
    allMyPositionButtons.forEach(e => {
        e.style.backgroundColor = 'transparent'; // Inline css
    });

    //We retrieve the current position of the focused pic, in order to highlight the position bar
    let myNewFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));
    allMyPositionButtons[myNewFocusedPic - 1].style.backgroundColor = '#a20006';

}

//Launch the autoRun
sliderAutoRun();

//Reset Autorun when needed -- queryselectorall is needed because tagname collection return a html collection, unmatching the foreach
myButtons.forEach(e => {
    e.addEventListener('click', function(){
        clearInterval(myInterval);
        sliderAutoRun();

        //I search for the focused picture and parse its value in integer
        let myFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));

        //i remove the focus on the current picture
        document.getElementById('focused').removeAttribute('id');

        //I check if I want to get the next or the prev slide
        if(e.getAttribute('id') === 'nextSlide'){

            // I check if my current pic is not the last of the slider
            if(myFocusedPic < allMyPics.length){

                //I change the picture focused finding the next one into the array
                allMyPics[myFocusedPic].setAttribute('id', 'focused');

            }

            //else I go back to the first one
            else{
                allMyPics[0].setAttribute('id', 'focused');
            }

        }

        else{

            if(myFocusedPic > 1){
                allMyPics[myFocusedPic -2].setAttribute('id', 'focused');
            }
            else{
                allMyPics[allMyPics.length -1].setAttribute('id', 'focused');
            }

        }

        //We reset all the buttons as transparent colors
        allMyPositionButtons.forEach(e => {
            e.style.backgroundColor = 'transparent';
        });

        //We retrieve the current position of the focused pic, in order to highlight the position bar
        let myNewFocusedPic = parseInt(document.getElementById('focused').getAttribute('alt').substr(-1, 1));
        allMyPositionButtons[myNewFocusedPic - 1].style.backgroundColor = '#a20006';

    })

});