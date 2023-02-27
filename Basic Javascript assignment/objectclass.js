const obj2= {
    name: 'rak',
    age : 30
}
// undefined
obj2.name= anis
// VM1266:1 Uncaught ReferenceError: anis is not defined
//     at <anonymous>:1:12
// (anonymous) @ VM1266:1
obj2.name='anis';
'anis'
obj2.name
'anis'
const obj2= O
// VM1403:1 Uncaught ReferenceError: O is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM1403:1
const obj3= Obje
// VM1459:1 Uncaught ReferenceError: Obje is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM1459:1
const even={
    iseven: true,
    random: Math.random() +4
} const objr= Object.create(even)
// VM1842:4 Uncaught SyntaxError: Unexpected token 'const'
// console.log(objr)
// VM1906:1 Uncaught ReferenceError: objr is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM1906:1
const even={
    iseven: true,
    random: Math.random() +4
} 
undefined
const objr= Object.create(even)
undefined
console.log(objr);
undefined
console.log(objr.random);
undefined
console.log(Object.getPrototypeOf(obj2));
undefined
console.log(Object.getPrototypeOf(objr));
undefined
const objn= Object.cre
undefined
const objn= Object.create(obj2)
undefined
console.log(Object.getPrototypeOf(obj2));
undefined
console.log(Object.getPrototypeOf(objn));
undefined
cosnt obj3= Objec.create({})
// VM2739:1 Uncaught SyntaxError: Unexpected identifier 'obj3'
// cosnt obj3= Object.create({})
// VM2751:1 Uncaught SyntaxError: Unexpected identifier 'obj3'
const obj3= Object.create({})
undefined
obj3.name: 'avesh';
// VM2856:1 Uncaught SyntaxError: Unexpected token ':'
obj3.name= 'avesh'
'avesh'
console.log(obj3)
undefined
Object.defineProperty(obj3, 'book', {
    book1: 'physics'})
{name: 'avesh', book: undefined}
console.log(obj3)
undefined
console.log(Object.getPrototypeOf(obj3));
undefined
console.log(obj3)
undefined
Object.defineProperty(obj3, 'book', {
    get:()=> 'PHYSICS'})
// VM3326:1 Uncaught TypeError: Cannot redefine property: book
//     at Function.defineProperty (<anonymous>)
//     at <anonymous>:1:8
// (anonymous) @ VM3326:1
console.log(obj3)

undefined
Object.defineProperty(obj3, 'book1', {
    get:()=> 'PHYSICS'})
{name: 'avesh', book: undefined}
console.log(obj3.book1);
undefined
console.log(Object.getPrototypeOf(obj3));
undefined
console.log(obj3.book1)
undefined
console.log(obj3.book)
undefined
for(k in obj3){
    console.log('value of book is' , k)}
undefined
Object.defineProperty(obj3, 'book1', {
    get:()=> 'PHYSICS'})
// VM3967:1 Uncaught TypeError: Cannot redefine property: book1
//     at Function.defineProperty (<anonymous>)
//     at <anonymous>:1:8
// (anonymous) @ VM3967:1
Object.defineProperty(obj3, 'book1', {
    get:()=> 'PHYSICS',})
// VM3974:1 Uncaught TypeError: Cannot redefine property: book1
//     at Function.defineProperty (<anonymous>)
//     at <anonymous>:1:8
// (anonymous) @ VM3974:1
Object.defineProperty(obj3, 'book1', {
    get:()=> 'PHYSICS', enumerable:true })
// VM4030:1 Uncaught TypeError: Cannot redefine property: book1
//     at Function.defineProperty (<anonymous>)
//     at <anonymous>:1:8
// (anonymous) @ VM4030:1
Object.defineProperty(obj4, 'book3', {
    get:()=> 'PHYSICS' , enumerable: true})
// VM4106:1 Uncaught ReferenceError: obj4 is not defined
//     at <anonymous>:1:23
// (anonymous) @ VM4106:1
const obj5= {
    comic: 'marvel',
    pen: " ",
    printcomic: function(){
        this.pen: 'raki'}}
// VM4363:5 Uncaught SyntaxError: Unexpected token ':'
const obj5= {
    comic: 'marvel',
    pen: " ",
    printcomic: function(){
        this.pen += 'raki' }}
undefined
console.log(this)
undefined
console.log(obj5)
undefined
const obj5= {
    comic: 'marvel',
    pen: " ",
    printcomic: function(){
        this.pen += 'raki' console.log(this); }}
// VM4602:5 Uncaught SyntaxError: Unexpected identifier 'console'
const obj5= {
    comic: 'marvel',
    pen: " ",
    printcomic: function(){
        this.pen += 'raki', console.log(this); }}
undefined
console.log(obj5.printcomic)
undefined
console.log(obj5.printcomic())
undefined