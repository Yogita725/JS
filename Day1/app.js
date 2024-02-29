//Assignment 1:Array Operations

let fruits = []; //empty array
fruits.push("apple","banana","orange")  //adding fruits to the "fruits" array

fruits.splice(0,1); //Removing the first fruit from the array

fruits.push("grape"); //Adding grape at the end of the array

fruits.splice(1,1,"pear"); //updating the second fruit in the array as "pear"

console.log(fruits);   //Printing the array


//Assignment 2:Object Operations

let person = {}; //empty Object
person = {
    name :'John',
    age : 30,
    city :'New York'
}                         //Adding properties to the object

delete person.age;        //Removing the person age

person.job = "Engineer";  //Adding another property to the object

person.city = "San Francisco";  //Updating property to the object

console.log(person); //Printing the object


//Assignment 3:Array of Objects Operations

let cars = [];  //Empty array 

cars = [
    {make:"Toyota", model:"Camry", year:2018},
    {make:"Nissan", model:"Versa", year:2020},
    {make:"Bentley", model:"Bentayga", year:2014}
]   //Added 3 car objects to the array

cars.splice(0,1);    //Removed the first car object from the array

cars.push({make:"Honda", model:"Civic", year:2020});   //Added a new car object to the array

cars[1].model = "Accord";   //Updating the model of the second car object 

console.log(cars); //Printing the array of objects

