//20. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added

if(shoppingCart.includes("Meat")){
    console.log("There is Meat already in the list ");
}
else{
    shoppingCart.unshift("Meat");
    console.log(`Meat has been added in the list, New list is ${shoppingCart}`);
}

// - add Sugar at the end of your shopping cart if it has not been already added

if(shoppingCart.includes("Sugar")){
    console.log("There is Sugar already in the list ");
}
else{
    shoppingCart.push("Sugar");
    console.log(`Sugar has been added in the list, New list is ${shoppingCart}`);
}

//remove honey

if(shoppingCart.includes("Honey")){
   const index= shoppingCart.indexOf("Honey");
   shoppingCart.splice(index, 1);

   console.log(shoppingCart);
}
else{
    console.log("there is no Honey in the list");
}

//modify Tea to 'Green Tea'
if(shoppingCart.includes("Tea")){
    const indexofTea= shoppingCart.indexOf("Tea");
    shoppingCart.splice(indexofTea, 1,"GreenTea");
 
    console.log(shoppingCart);
 }
 else{
     console.log("there is no Tea in the list");
 }

