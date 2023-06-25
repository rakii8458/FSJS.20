

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#d04976";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#de7b09";

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#71a32a";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#309eff";
document.querySelectorAll(".clash-card__unit-stats ").forEach(element => {element.style.color= "#FFFFFF"
    
});

document.querySelectorAll(".no-border").forEach(element=> {
    element.style.color= "#ffffff"
})


document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML="The Archer"
document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML="The Goblin"