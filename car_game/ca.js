function moveLeft(){
    let left= parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    left -= 300;
    if(left>=0){
    character.style.left= left + "px";
    }
}
function moveRight(){
    let left= parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    left +=300;
    if(left<=800){
        character.style.left= left + "px";
    }
}
document.addEventListener("keydown",event=>{
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});

var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 300;
    block.style.left = left + "px";
    counter++;
});
setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block)
    .getPropertyValue("top"));
    if(characterLeft==blockLeft && blockTop<800 && blockTop>300){
        alert("Game over. Score: " + counter);
        counter=0;
    }
},1);

document.getElementById("left").addEventListener
("touchstart",moveLeft);
document.getElementById("right").addEventListener
("touchstart",moveRight);