// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages =  [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age

const sortarray= ages.sort();
const min= Math.min.apply(Math ,sortarray);
const max= Math.max.apply(Math ,sortarray);

console.log(`Unsorted array is ${ages}`);
console.log(`Sorted array is ${sortarray}, In this array minimum value is ${min} and maximum value is ${max}`);


//Find the median age(one middle item or two middle items divided by two)
if(sortarray.length %2==0){
    const median = Math.floor(sortarray.length/2);
    console.log(`Length is even so median is ${(sortarray[median-1]+ sortarray[median])/2}`);

    
}
else{
    const median = Math.floor(sortarray.length/2);
   
    console.log(`length of array is odd so median is ${sortarray[median]/2}`);

}


//     - Find the average age(all items divided by number of items)



var total =0;

for(let i=0; i<sortarray.length; i++){
     total+=sortarray[i];
   
}
const average= total/sortarray.length;
console.log(`Average of numbers are ${average}`);


// - Find the range of the ages(max minus min)

console.log(`Range of the ages is ${max-min} `);


// - Compare the value of (min - average) and (max - average), use abs() method
const compare= Math.abs(max-min);
console.log("The comparasion between max-average and min average is", compare);


//Output

// Unsorted array is 19,19,20,22,24,24,24,25,25,26
// Sorted array is 19,19,20,22,24,24,24,25,25,26, In this array minimum value is 19 and maximum value is 26
// Length is even so median is 24
// Average of numbers are 22.8
// Range of the ages is 7
// The comparasion between max-average and min average is 7
// PS C:\Users\lenovo\Documents\FSJS2.0\Basic Javascript assignment> 
