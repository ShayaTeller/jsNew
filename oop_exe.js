
// exe 1
function Phone(brand,model){
    this.brand = brand;
    this.model = model

    this.printdetails = function(){
        console.log(`Phone: ${brand} ${model}`)
        
    }
}

// const a = new Phone(`samsung`,`s22`)
// a.printdetails()

// exe 2
function Rectangle(width,height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return width*height
    }
}

// const rect = new Rectangle(20,10)
// console.log(rect.area())


//exe 3
function BankAccount(owner){
    this.owner = owner;
    this.balance = 0;

    this.deposit = function(amount){
        this.balance +=amount;
    }
    this.withdraw = function(amount){
        if(amount<=this.balance){
            this.balance -=amount 
        }
        else{
            console.log("you cant du this now, pleace try later")
        }
    }
    this.checkbalance = function(){
        console.log(`the balans in account of ${owner.toUpperCase()}, is: ${this.balance}`)
    }

}

// const david = new BankAccount("david")
// david.deposit(500);
// david.checkbalance()
// david.withdraw(100);
// david.checkbalance()
// david.withdraw(450);
// david.checkbalance()

// exe 4

class Animal{
    constructor(name){
        this.name = name;
    }
    speak = ()=>{
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
        this.bark = ()=>{
            console.log(`${name} barks`)
        }
    }
    
    
}

// const dog1 = new Dog("dog")
// dog1.speak();
// dog1.bark();

// exe 5

class Vehicle{
    constructor(type){
        this.type = type;
    }
    describe =()=>{
        console.log(`this is a ${this.type}`)
    }

}

class Car extends Vehicle{
    constructor(brand){
        super("car")
        this.brand = brand;
    }
    info = ()=>{
        console.log(`this is a ${this.brand} ${this.type}`)
    }
}

// const car1 = new Car("bmw")
// car1.describe()
// car1.info()

// exe 6
class Shape{
    constructor(){}
    area = function(){
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
       this.radius = radius;
    }
    area = function(){
     return Math.PI * this.radius**2;
     }
    }


class Square extends Shape{
    constructor(side){
        super()
        this.side = side;
    }
    area = ()=>{
        return this.side**2;
    }
}


// const shape1 = new Circle(10);
// const Square1 = new Square(20);
// console.log(shape1.area());
// console.log(Square1.area());

// const pshap = new Shape();
// console.log(pshap.area())
// exe 7

class Book{
    constructor(titel,author){
        this.titel = titel;
        this.author = author;

    }
    info = function(){
        console.log(`${this.titel} by ${this.author}`)
    }
}

// const tate = new Book("the first dey",`maike berel`)
// tate.info();

// exe 8 
class Person{
    constructor(name){
        this.name = name;
    }
    greet = function(){
        console.log(`hello Im ${this.name}`)
    }
}

class Student extends Person{
    constructor(name,school){
        super(name)
        this.school = school;
    }
    study = function(){
        console.log(`${this.name} is studing at ${this.school}`)
    }
}

// const newS = new Student("shya","kodcode")
// newS.greet();
// newS.study();

// exe 9 
class Employee{
   #salary;
    constructor(selary){
        this.#salary = selary;
    }

getSalery = function(){
    console.log(this.#salary);
}
work = function(){
    console.log("employee is working")
}}


class Maneger extends Employee{
    constructor(selary){
        super(selary)
    }
    work = function(){
        console.log("Manger is managing")
    }    
}

// const a = new Employee(2000)
// a.getSalery()
// a.work();
// const b = new Maneger(1000)
// b.getSalery();
// b.work();
