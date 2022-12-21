//Array in js
let arr = ['rak', 'anis', 'raj', 'sami', 'adil', 'anam'];

//printing the whole array
console.log(arr);

//string at index 2
console.log(arr[2]);

//lenght of array

console.log(arr.length);

//reverse array

console.log(arr.reverse());

// sort array
console.log(arr.sort());

//push array---it add the value in array at last
arr.push('anas' , 'rahat');
console.log(arr);

//pop array ----it deletes the last value of array

arr.pop();
console.log(arr);

//push again

arr.push( 'mahi');
console.log(arr);

//slice in array  _(start, end)-end index will not shown in output

let newarr= arr.slice(2,4); 
console.log(newarr);

//splice  __(start, no of index)  ---start index and  no--how many elements will get delted

let newarr1= arr.splice(3,4); 
console.log(newarr1);
console.log(arr);

// start with index1 --change the value of index 1 with 18.

let newarr2= arr.splice(1,1, 18); 

console.log(arr);


//Other methods would  be applied in new array;

 let arraynew=['amir','shobi','ankit', 'sumit', 'simmi', 'jimmy'];
console.log(arraynew);


//fill in array --value, start index, end index but..end index will be exlusive

arraynew.fill("mahi", 2 , 3);
console.log(arraynew);


//array join ---this join the elments of array with the given value

arr1new= ['1','2','3','4'];
arr2new=['5','6', '7','8'];
let array2= arr1new.join( " 5");
console.log(array2);

//array concat  it's add the two or more array in one

arr1new= ['1','2','3','4'];
arr2new=['5','6', '7','8'];
arr3new= arr1new.concat(arr2new);
arr4new= arr3new.join(" ")
console.log(arr3new);

console.log(arr4new);



// toString in array

stringarray= ['mahi',8,'rani',10];
stringarray1= stringarray.toString();
console.log(stringarray);
console.log(stringarray1);

//shift in array  it delete the first element in array

let Arraynew=['amir','shobi','8', 'sumit', 'simmi', 'jimmy'];
Arraynew.shift();
 console.log(Arraynew);

 //unshift in array ----add new element at the starting of array

 Arraynew.unshift("rakii");
 console.log(Arraynew);

 //indexOf array--specify the value of first-index of elements

 let index= Arraynew.indexOf('shobi');
 console.log(index);

 //lastindexOf of array---give the index of last same elements

 let index1= Arraynew.lastIndexOf("rakii");
 console.log(index1);


 //findIndex of array---return the index of first array elemts

 function isEven(elements){

    
        return elements%2==0;

 }

 findindex= Arraynew.findIndex(isEven);

 console.log(findindex);


 //find of array----find the element which satisfy the condition

 let numarray=[ 1,8,7,8,6,4]


 function isEven1(elements){
    return elements%2==0;

}

let findarr= numarray.find(isEven1);
console.log('first even no in array' , findarr);

//includes in array-----this checks that this method is include or not.


if(numarray.includes(7)){

    console.log('yes');

}
else{
    console.log('no');
}


//keys in array

let numarr1= numarray.keys();
console.log(numarr1);

for (let key of numarr1){
    console.log(key);
}

//isArray of array

console.log(Array.isArray(numarray));


//map in array
let numarray1=[ 1,64,9,16,25,4]



console.log(numarray1.map(Math.sqrt));



//for of in array...

let names= ['mahi' , 'tayyaba', 'falak', 'raki'];
let uppercase= [];

for (const value of names){
    uppercase.push(value.toUpperCase());

}
    console.log(uppercase);

//for each

function square(num){
    console.log(num * num) ;
}

console.log(numarray1.forEach(square));




//for some

function isodd(num1){
    return num1%2==1;
}

console.log(numarray1.some(isodd));


//every in array























 




















