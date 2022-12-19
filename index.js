
let sounds = ['sounds/crash.mp3', 'sounds/kick-bass.mp3', 'sounds/snare.mp3', 'sounds/tom-1.mp3', 'sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3']
let images = ['images/crash.png','images/kick.png','images/snare.png','images/tom1.png','images/tom2.png','images/tom3.png', 'images/tom4.png' ]
let buttons = document.querySelectorAll('.btn');
buttons.forEach((element, index) =>{
    let image = images[index]
    element.style.backgroundImage = `url(${image})`
    console.log(element.getAttribute('background-image'))
})


function handleClick(e){
    let audio = new Audio(sounds[e.target.id]);
    audio.play() 
}

buttons.forEach((element) => {
    element.addEventListener('click', handleClick)
    
});
