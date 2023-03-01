// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let filename="question29.js";

function getfile_extention(filename){
    let extention= filename.split(".").pop();
    return extention;
}

const file1= getfile_extention('question29.js');
const file2= getfile_extention('assignment.md');

console.log(file1);
console.log(file2);