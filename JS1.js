//Lesson 1

let x=1;
let y=4;
console.log (`t=${x}+${y}=${x+y}`);//1. JS program to compute and print the sum of the two given integers


str1=`some string`
console.log (`Test_ `+str1);// 2.JS program to create a new string adding “Test_" in front of a given string


let q=(`First name: Ira `);
let w=(`Last name: Poznyak `);
let e=(`Age: 26 `);
console.log(q+w+e);//3.JS program to combine and print your first, last name and age


let a=101;
console.log(a>100,a);// 4. JS program to check a given integer is bigger then 100 a>100 true 101


let s=42;
let d=40;
let f=10;
console.log (s>d&&s>f);//5.JS program to find if the first number is larger from the two given positive integers (s is the biggest)

console.log (s==50||50==(s+d));//6.JS program to find if the first number is larger from the two given positive integers

console.log (s%3==0||s%7==0);//7. if s is a multiple of 3 or 7





//Lesson 3 


let Flowers = [`chamomil`, `violet` , `rose`];
console.log (Flowers[Flowers.length - 1]); //1.a JavaScript function to get the last element of an array

console.log (Flowers.join(" ! ")); //2. a simple JavaScript program to join all elements of the following array into a string

let Array1 = [3,5,3,4];
let Array2 = [11,12,13,14];
let Array3 = Array1.map(
    function (value, index){
        return value + Array2[index]
    }
);

console.log(Array3); /*3.There are two arrays with individual values, write a JavaScript program to compute 
the sum of each individual index value from the given arrays and save them to third array*/


let Rectangle = {
    h:10,// height
    w:20,//width
 
    getArea: function(){  
        console.log(`Perimetr of a ractangle =`+ Rectangle.h*Rectangle.w);
    },
    getPerimeter: function(){        
        console.log(`Area of a ractangle =`+2*(Rectangle.h+Rectangle.w));
    },
};
Rectangle.getArea();
Rectangle.getPerimeter();/*4.e a JavaScript program to calculate the area and perimeter of a rectangle. 
Rectangle should be an object with properties width and height and methods getArea() and getPerimeter()*/