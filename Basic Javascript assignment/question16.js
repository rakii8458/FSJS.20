//16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

let month= prompt("Enter your month");
//let month= "April";
switch(month){
    
        case "June":
        case "July" :
        case "August":
        case "june":
        case "july" :
        case "august":
        console.log("Month is Summer");
        break;

        case "January":
        case "February":
        case "december":
        case "january":
        case "february":
        case "December":
        console.log("Month is Winter");
        break;

        case "March":
        case "April":
        case "May":
        case "march":
        case "april":
        case "may":
        console.log("Month is Spring")
        break;

        case "September":
        case "October":
        case "November":
        case "september":
        case "october":
        case "november":
            console.log("Month is Autumn");
        break;

        default:
            console.log("Enter a valid month");

               
        }
