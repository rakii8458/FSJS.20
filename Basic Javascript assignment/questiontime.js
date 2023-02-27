let date = new Date();
console.log('Year is' , date.getFullYear());
console.log(`Month is ${date.getMonth()+1}`);
console.log(`Today's date is ${date.getDate()}`);
console.log(`Today day as a number is ${date.getDay()}`);
console.log(`Hours as of now is ${date.getHours()}`);
console.log(`Minutes as of now is ${date.getMinutes()}`);
console.log(`numbers of seconds elapsed from January 1, 1970 to now ${Math.round(Date.now()/1000)} seconds,  and date is ${date}`);