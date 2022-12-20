
let sounds = ['sounds/crash.mp3', 'sounds/kick-bass.mp3', 'sounds/snare.mp3', 'sounds/tom-1.mp3', 'sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3']
let images = ['images/crash.png','images/kick.png','images/snare.png','images/tom1.png','images/tom2.png','images/tom3.png', 'images/tom4.png' ]
let buttons = document.querySelectorAll('.btn');
let keyboardButtons = ['w', 'a', 's', 'd', 'j', 'k', 'l']


function handleKeyInput(event){
  if(keyboardButtons.includes(event.key)){
    handleClick(keyboardButtons.indexOf(event.key))
  }else{
    return
  }
}

document.addEventListener('keydown', handleKeyInput);
buttons.forEach((element, index) =>{
    let image = images[index]
    element.style.backgroundImage = `url(${image})`
})

// using the button id we play the sound correspounding on the sounds array
// the sounds array has been created to match the button layout.
// refactor the function to use button click, it can take an object or an int;

function handleClick(e){
    let audioOut =   typeof(e) == 'object' ? e.target.id : e
    console.log(audioOut)
    let audio = new Audio(sounds[audioOut]  );
    audio.play() 
}
// add event listerner to the buttons.
buttons.forEach((element) => {
    element.addEventListener('click', handleClick)
    
});
