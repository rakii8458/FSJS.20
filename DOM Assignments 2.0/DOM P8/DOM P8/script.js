
// TASK1:

let border1= document.querySelector(".col-lg-4");
 border1.style.border= "5px solid red";

 let nav= document.querySelector(".navbar");
 nav.style.display= "none";


let side= document.querySelector("aside");
side.style.overflowY= "scroll";


// TASK-2
let back= document.querySelector("body");
back.style.backgroundImage= "none";



// // Task3:

let toggler= document.querySelector(".navbar-toggler");

let menu= document.querySelector(".navbar-collapse");

toggler.addEventListener("click", (click) => {


    menu.classList.toggle("show");

  

});

