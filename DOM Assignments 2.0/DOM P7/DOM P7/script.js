// PART 1

let value= document.querySelectorAll(".main__languages a");
for(let i=0; i<value.length; i++){
    if(value[i].innerHTML.includes("2.0")){
        value[i].style.display= "none";
    }
}

// PART2

let box= document.querySelector(".main__form-input");
let button= document.querySelector(".main__form-btn");

box.disabled= false;
button.disabled= false;

button.addEventListener("click" , clickme);
    function clickme(){
        for(let i=0; i<value.length; i++){
            value[i].style.display= "inline-block"
        }
    }

