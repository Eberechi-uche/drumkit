
let sounds = ['sounds/crash.mp3', 'sounds/kick-bass.mp3', 'sounds/snare.mp3', 'sounds/tom-1.mp3', 'sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3']



function handleClick(e){
    let audio = new Audio(sounds[e.target.id]);
    audio.play()
    
}
let buttons = document.querySelectorAll('.btn');
// console.log(buttons)
buttons.forEach((element) => {
    element.addEventListener('click', handleClick)
    
});
