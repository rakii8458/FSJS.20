//simple function example

function sum(){
    let a=20;
    let b=40;
    let result= a+b;
    console.log('adition of two no: are ', result);

}
sum();

// Output: adition of two no: are  60


//arguemnt function:

function getsquare(num){
    console.log(num*num)
}
 getsquare(6);

 //another example of functions with arguements

 function division(num1, num2){
    let div= num1/num2;
    console.log('The division of two no. are', div);

 }

 division(40,4);
 division(25,4);
 division(49,7);
 division(69,13);
 division(100,10);

//  output:
//  The division of two no. are 10
// The division of two no. are 6.25
// The division of two no. are 7
// The division of two no. are 5.3076923076923075
// The division of two no. are 10


 //functions with return type:

 function sub(val1, val2){
    let sub= val1-val2;
    return sub;
 }
  let subtra= sub(20,17);
  console.log("Subtraction of two no are :", subtra);

  let subtra1= sub(30,17);
  console.log("Subtraction of two no are :", subtra1);

  let subtra2= sub(20,27);
  console.log("Subtraction of two no are :", subtra2);

// Output:
//   Subtraction of two no are : 3
// Subtraction of two no are : 13
// Subtraction of two no are : -7


//addition of two string:

function addstr(url, domain){
    let protocol= 'https://'
    let result= protocol+ url+ domain;
    return result;
}
let website = addstr('hnbmasale' , '.com');
console.log(website);

//Output
//https://hnbmasale.com


// array as arguement in function

//example 1
function sum1(arr){
    let array= [3,4,5,6,7,7,9,67];
    let sum1 = 0;
    for(let j=0; j< array.length; j++){

        sum1= sum1 + array[j];
    }
    return sum1;

}
let result= sum1();
console.log(result);
    
    
     

//example 2


function sumArray(array2) {
    const ourArray = [1, 4, 0, 9, -3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([1, 4, 0, 9, -3]));


  //example 3


  function add(addition){
    let array1=[3,5,6,78,4];
    let add= 0;
    for(let i=0; i< array1.length; i++){
        add = add + array1[i];
        }

        return add;
  }

  let result1= add();
  console.log(result1);


  //addition of multiple value without giving arguements;

  function jodo(){

    //arguements 

    let jodo= 0;
    for(let k=0; k< arguments.length; k++){
        jodo= jodo+ arguments[k];
    }
    return jodo;


  }
console.log(jodo(3,5,6,7,5,4,5,3));


//Arrow function

let rak = (var1, var2, var3) =>{
    console.log("My name is rakshanda and my bod is", var1, var2, var3 );
}
rak(18, 'april',1999);








// node functions.js