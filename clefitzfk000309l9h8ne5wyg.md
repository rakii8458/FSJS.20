# Object  in JavaScript and Different method how we can create it.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1676983449175/d1e41dfd-0f3e-40f6-b732-f342f573a215.gif align="center")

# What is an Object?

JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or *key*) and a value. A property's value can be a function, in which case the property is known as a method.

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a colour design, weight, material it is made of, etc.

# In how many ways an object can be created?

There are various types in which we can create objects. You can create an object using an object initializer. Alternatively, you can first create a constructor function and then instantiate an object by invoking that function with the `new` operator.

***Let's learn about some methods by which we can create objects***\*:\*

### Method 1:

We can create the object by using Initializers. it is the most basic way of creating objects.

```javascript
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // it can be string
};

//Example of Javascript Object:

const obj1= {
    name: 'raksha',
    age: 13,
    address:{
    h_no: 5, 
    street: 'chatori gali'
    }
}
```

In the above example, we learn the basic way of creating objects. Points which we should remember are:

1. Another object can be created inside the Object.
    
2. Functions can be created inside the object.
    

### Method 2:

we can create the object by using Constructor Method:

To define an object type, create a function for the object type that specifies its name, properties, and methods.

Notice the use of `this` is to.. assign values to the object's properties based on the values passed to the function.

<sup>.</sup>The `new` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that ha<sup>ve</sup> a constructor function.

Now you can create an object called `myCar` as follows:

```javascript
function Employee(name, job, year) {
  this.name = name;
  this.job = job;
  this.year = year;
}

const employee = new Employee('Rakhshanda', 'Software Engineer', 2020);

console.log(employee.name);
// Expected output: "Rakhshanda"
```

### Method 3:

we can create the Object by Using the Object. create() method:

Objects can also be created using the [`Object. create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) method. This method can be very useful, because it allows you to choose the [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) object for the object you want to create, without having to define a constructor function.

```javascript
const animal= {
name: "Tiger",
place: 'Jungle',
display= function(){
console.log('place of the animal is', this.place);
}

}

//creating object with object.create

const animal1 = Object.create(animal);
animal1.display(); // Logs:place of the animal is Jungle

const water_animal= Object.create(animal);
animal.name= 'Fish';
animal.place= 'water';
water_animal.display();
```

### Method 4:

Creating Object by emptying the Object: In this creation, we give the value by using the `object.property= value; we can use defineproperty() method to give the key-value pair.`

```javascript
const obj4= Object.create({});
obj4.name= 'raksha';
obj4.age=34;
console.log(obj4);

//or

Object.defineProperty(obj4, 'name', {
get:()=> 'anis'
set:()=> 'raksha'
})

console.log(obj4.name);
console.log(Object.getPrototypeOf(obj4));

//Expected result
//raksha 
//34
//anis
//{}
```

1. If we use a loop in this Object, it will not work, because it is not loopable.
    
2. If you want to make it loopable, we have to enter `enumerable: true` inside the `defineProperty() method.`
    

### Method 5:

In this method, we will learn about the object created and allocated value using this. by using this keyword we can assign the value of properties.

```javascript
const obj5= {
comics: 'marvel',
favcomic: " ",
printComic: function(){
this.favcomic += 'disney'
console.log(this);
return this
},
}

console.log(obj5.printComic());
console.log(obj5.printComic().printComic().printComic());

//or if we want to add nested function too we will add return.this, see above
```

### Reference :

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1676983394586/9f941230-5866-4ded-b992-333ac243c677.gif align="center")