// function play(){
//   // step-1: hide the home screen.to hide the screen add the class to the hidden section
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');
//   // show the play ground
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    // step-1: generate random alphabet
    const alphabet = getARendomAlphabet();
    console.log('your random alphabet:', alphabet)
}

function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame()
}