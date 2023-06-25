let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

 let ul= document.querySelector("header nav ul");
      ul.lastElementChild.innerHTML= "Projects";

let backcolor = document.querySelectorAll("h3");
 for (let i = 0; i < backcolor.length; i++){
   backcolor[i].style.backgroundColor = "#dadaf8"; 
  }

let skills= document.querySelector(".accordian-wrapper");


let div= document.createElement("div");
div.classList.add("accordian");
skills.appendChild(div);

let head= document.createElement("h3");
head.innerHTML= "Skills";
head.style.backgroundColor = "#dadaf8";
div.appendChild(head);


let para= document.createElement("p");
para.innerHTML= "I passes a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the github";

div.appendChild(para);




let lastaccordian= document.querySelectorAll(".accordian:last-child h3");
lastaccordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
