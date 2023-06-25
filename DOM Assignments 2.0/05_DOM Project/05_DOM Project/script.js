let button= document.createElement("a");
button.innerHTML = 'Pro Subscription';

document.querySelector(".btn").parentElement.appendChild(button);
button.classList.add("btn");
// document.body.appendChild(button);

let recipee= document.createElement("a");
recipee.innerHTML= " Chinese (7)";
// recipee.classList.add("tags-container div");
document.querySelector(".tags-container div ").appendChild(recipee);


let div= document.createElement("div");
let taganchor= document.createElement("a");
div.appendChild(taganchor);
div.classList.add("card");
taganchor.classList.add("recipe-text");



let newcard= document.querySelector('.recipe-gallery');
newcard.appendChild(div);

let image= document.createElement("img");
image.src= "./img/recipe-1.jpeg";
div.appendChild(image);
image.classList.add("recipe-img")

let head= document.createElement("h5");
let text= document.createTextNode("Chicken Nawabi");
head.appendChild(text);
head.classList.add("recipe-name");
div.appendChild(head);

let para= document.createElement("p");
let paratext= document.createTextNode("Prep : 15min | Cook : 25min");
para.appendChild(paratext);
para.classList.add("recipe-disp");
div.appendChild(para);





document.querySelectorAll(".recipe-text").forEach(e => {
    e.style.color= "blueviolet";
})



document.querySelector(".page-footer p a").innerHTML= "Rakhshnada";

