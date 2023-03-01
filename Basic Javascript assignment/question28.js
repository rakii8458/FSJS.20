// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****


let number=3;
let string= "";
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        string+='*';
    }

    string+="\n";

}
console.log(string);


// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***


let number1=3;
let string1= "";
for(let i=1; i<=number1; i++){
    for(let j=1; j<=number1; j++){
        string1+='*';
    }

    string1+="\n";

}


// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****
console.log(string1);


let number2=3;
let string2= "";
for(let i=1; i<=number2; i++){

    //for printing spaces
    for(let j=1; j<=number2-i; j++){
        string2+=" ";
        
    }

    //for printing stars
    for(let k=1; k<=2*i-1; k++ ){
        string2+= "*";
    }

    string2+="\n";

}
console.log(string2);