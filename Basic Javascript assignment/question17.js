//17. Write a program which tells the number of days in a month.
let days= new Date();
let month= prompt("Enter the month which number of days you want to know");
//let month= "january";
if(month=='January' ||  month == "May" || month== "March" || month== "July" || month=='September' || month== "November" || month=='january' ||  month == "may" || month== "march" || month== "july" || month=='september' || month== "november"){
    
    console.log(`Number of days in ${month} are 31`);
}

else if(month=='April' ||  month == "June" || month== "August" || month== "October" || month=='December' || month=='april' ||  month == "june" || month== "august" || month== "october" || month=='december'){
    console.log(`Number of days in ${month} are 30`);

}
else if(month=="February" || month == "february"){
    console.log(`Number of days in ${month} are 28/29`);

}
else{
    console.log(`Enter a valid month`);
}



