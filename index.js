
// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         //alert("Button "+this.innerHTML+" got clicked");
//         // btw still doesn't work to provide each key name
//         // if we use an arrow function ()=>{}
//         /*
//         The problem is that arrow functions do not have their own this context.
//         'this' inside an arrow function always represents the this value of 
//         the closest non-arrow parent function.
//         In your case, this is not referring to the clicked element.
//         */ 
//         //new Audio("sounds/tom-1.mp3").play();
//         //this.style.color="black";

//         // if(this.innerHTML=="w")
//         //     new Audio("sounds/tom-1.mp3").play();
//         // if(this.innerHTML=="a")
//         //     new Audio("sounds/tom-2.mp3").play();
//         // if(this.innerHTML=="s")
//         //     new Audio("sounds/tom-3.mp3").play();
//         // if(this.innerHTML=="d")
//         //     new Audio("sounds/tom-4.mp3").play();
//         // if(this.innerHTML=="j")
//         //     new Audio("sounds/snare.mp3").play();
//         // if(this.innerHTML=="k")
//         //     new Audio("sounds/crash.mp3").play();
//         // if(this.innerHTML=="l")
//         //     new Audio("sounds/kick-bass.mp3").play();

//         switch (this.innerHTML) {
//             case 'w':
//                 new Audio("sounds/tom-1.mp3").play();
//                 break;
//             case 'a':
//                 new Audio("sounds/tom-2.mp3").play();
//                 break;
//             case 's':
//                 new Audio("sounds/tom-3.mp3").play();
//                 break;
//             case 'd':
//                 new Audio("sounds/tom-4.mp3").play();
//                 break;
//             case 'j':
//                 new Audio("sounds/snare.mp3").play();
//                 break;
//             case 'k':
//                 new Audio("sounds/crash.mp3").play();
//                 break;
//             case 'l':
//                 new Audio("sounds/kick-bass.mp3").play();
//                 break;
//             default:
//                 console.log(this.innerHTML);
//                 break;
//         }
// });
// }
// document.addEventListener("keydown",function(event){
//     //alert(event.key);
//     switch (event.key) {
//         case 'w':
//                 new Audio("sounds/tom-1.mp3").play();
//                 break;
//             case 'a':
//                 new Audio("sounds/tom-2.mp3").play();
//                 break;
//             case 's':
//                 new Audio("sounds/tom-3.mp3").play();
//                 break;
//             case 'd':
//                 new Audio("sounds/tom-4.mp3").play();
//                 break;
//             case 'j':
//                 new Audio("sounds/snare.mp3").play();
//                 break;
//             case 'k':
//                 new Audio("sounds/crash.mp3").play();
//                 break;
//             case 'l':
//                 new Audio("sounds/kick-bass.mp3").play();
//                 break;
//             default:
//                 alert(event.key+" Doesn't contain any sound assigned to it ");
//                 break;
//     }
// });

/*another shorthand way to implement the same*/
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        //buttonAnimation();
    });
}
document.addEventListener("keydown",(event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);
    //buttonAnimation();
});
function makeSound(key){
    switch (key) {
        case 'w':
                new Audio("sounds/tom-1.mp3").play();
                break;
            case 'a':
                new Audio("sounds/tom-2.mp3").play();
                break;
            case 's':
                new Audio("sounds/tom-3.mp3").play();
                break;
            case 'd':
                new Audio("sounds/tom-4.mp3").play();
                break;
            case 'j':
                new Audio("sounds/snare.mp3").play();
                break;
            case 'k':
                new Audio("sounds/crash.mp3").play();
                break;
            case 'l':
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case 'Control':
                break;
            case 'Alt':
                break;
            case 'Tab':
                break;
            case 'r':
                confirm("Press Ctrl+r ?");
                location.reload();
                break;
            default:
                alert(key.toUpperCase()+" Doesn't contain any sound assigned to it ");
                break;
    }
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}

// another way of doing the same
/*function buttonAnimation() {
    document.addEventListener('keydown',(event)=>{
        const currentKey = event.key;
        const button = document.querySelector('.' + currentKey);
        if (button) {
            button.classList.add('pressed');
        }
    });
    document.addEventListener('keyup',(event)=>{
        const currentKey = event.key;
        const button = document.querySelector('.' + currentKey);
        if (button) {
            button.classList.remove('pressed');
        }
    });
}*/

