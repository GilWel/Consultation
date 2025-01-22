console.log('Welcom to TS');

let x = 10; // пример неявного 
// x = '10'

let y: number = 11; // пример явного 
let p: string;
p = 'HI ALL';

let isDrink: boolean = true;

type User = {
    firstName: string;
    isAdmin: boolean;
}

const user1: User ={
    firstName: "Vladimir",
    isAdmin: false
}

interface Monster {
    name: string
    height: number
    isAlive: boolean
    isEvil: boolean
}

const frankenstein: Monster={
    name: "Frankenstein",
    height: 210,
    isAlive: true,
    isEvil: false
}

interface ExtendetMonster extends Monster {
    isFlying: boolean;
}

const dracula: ExtendetMonster ={
    isFlying: true,
    name: "Vlad",
    height: 187,
    isAlive: false,
    isEvil: true
}

//опциональные поля

interface Food{
    titel: string;
    isSweet?: boolean;

}

const pancake: Food = {
    titel:'Pancakes'
   
}

// Создать интерфейс город City
// со следующими полями
//  - name
//  - population - число горожан 
//  - riversName - опциональное поле название реки - 
//  - isTouristic - является ли туристическим или нет
//  - isCapital - является ли столицей 

// Создайте несколько объектов для этого интерфейса 

// дополнительно сделайте интерфейс - расширяющий город
// например, добавьте дату основания 
12.

interface City  {
    name: string,
    population: number,
    riversName?: string,
    isTouristic: boolean,
    isCapital: boolean
}

const Elista:City ={
    name: "Elista",
    population: 350_000,
    isTouristic: true,
    isCapital: true
}

13. 
interface YearOfFoundation extends City{
    yearOfFond: number
}

const Saarbruecken:YearOfFoundation ={
    yearOfFond: 1256,
    name: "Saarbruecken",
    population: 1800_000,
    isTouristic: true,
    riversName: 'Saar',
    isCapital: true
}

1.
const u = 42;
// u = 'Hello'- не работает, так как задан тип number!
2.

let d: string = "TypeScript is awesome!";

3.
type Age = number;

const myAge: Age=30;

4.
let statuse: "active" | 1;
statuse = "active";
statuse = 1; // status подчеркивает, похоже что это служебное слово

5. 
type Animal = "cat"|"dog";

type ExtendetAnimal = Animal|'parrot';
const myPet: ExtendetAnimal = 'parrot';

6.

const fruits: string[] = ['apple','banana'];
7.
const numbers: number [] = [];
numbers.push(5);
numbers.push(10);

8.
type Person  = {
    name:string,
    age: number,

}
const Human:Person = {
    name: "Gilian",
    age: 19
}
 9.
 interface Car {
    model:string,
    year: number,
    isElectric: boolean
 }
 const objCar:Car ={
     model: "Mercedec",
     year: 2025,
     isElectric: true
 }

 10.

 interface ElectricCar extends Car{
    batteryCapacity: number;
 }
 const objElectricCar:ElectricCar = {
     batteryCapacity: 5000,
     model: "BMW",
     year: 2025,
     isElectric: true
 }

 11.
 interface Book{
    title: string,
    author: string,
    publishedYear?: number

 }
 const objBook:Book={
     title: "Война и мир",
     author: "Лев Толстой",
     publishedYear:1865
 }
 const objBook2 :Book ={
     title: "«Унесённые ветром»",
     author: "Маргарет Митчелл"
 }
 14.
  function multiply (first:number, second:number):number {
    return first * second;
    
  }
15.
 const isEven =(element:number):boolean =>

     element %2 === 0 ? true : false;



16.
const greet =(name:string):void =>
    console.log(`Привет, ${name}!` );


17. 
const getLastElement = (arr:number[])=>
arr[arr.length -1];

18.
const describeWeather = (weather: "sun" | "rain" | "snow"):string =>{
    return 'sun';
};

19.
const printCarInfo = (interface:Car) =>{
console.log(printCarInfo);
}

const getFullName = (firstName:string, lastName?: string): string =>{
    return lastName  ? `${firstName} ${lastName}` : firstName;
}
    







