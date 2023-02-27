let myname= [ 'rak', 'rakshu']

const obj1= {
    hubby: 'anis',
    age : 45,

    myfunction:function(){
        console.log(`my hubby name is ${hubby}`);
    }
}

Object.prototype.rakshanda= function(){
    console.log('I am rakhshanda');
}

myname.rakshanda;


let names= {
    name1: 'raksha',
    name2: 'anis'
}
let ageofall= {
    age1: 24,
    age2: 25
    
}
let pata= {
    pata1: 'bhopal',
    pata2: 'Nemawar'
}

Object.setPrototypeOf(names, ageofall);

//get truelength of string

let yname= 'raksha  '


  String.prototype.truelength = function(){

    console.log(`true lenght is: ${this.trim().length}`)
  }


  let namee= "rakshafsdjfkdsj     "


 