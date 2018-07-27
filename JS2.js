let str1= `ABCD EF G`;
let sln = str1.length;
console.log(sln);

let res= str1.slice(-6,-3);
console.log(res);

let a;
let d= -1;
let b=1;
let c=0;
if (d>=0){
    a=d;
}else if(b===0){
    a=b;
}else{
    a=c;
}
console.log(`a=${a}`);

let examResult = 5;
let markLiteral;
switch (examResult){
    case 4:
    markLiteral=`good`;
    break;
    case 5:
    markLiteral=`Excellent`;
    break;
    default:
    markLiteral=`You can do better`;
}
console.log (`${examResult}=${markLiteral}`)// 5 = Excellent


//the beginning of hw

let str2= `Not a very long string`;



let ind=str2.indexOf(`a`);
if (ind>=1){
    console.log (` String includes symbol \`a\`. `);
}
else {
    console.log(`String doesn\`t include symbol \`a\``);
}//1. Function to check if given string includes given symbol.

let igs=str2.length;
function empst (){
    
    console.log(igs);
}


if (igs <= 0){
    console.log(`Empty string`);
 } 
else {
    console.log(`String is\`nt empty.It contains`);
    empst();
    console.log ( `symbols.` );
}
//  2. Function to check whether a string is blank or not.


let str3= `Nazar`;
let str4=`Babii`;
let abrv1=str3.slice (0,1);
let abrv2=str4.slice (0,1);
function abbrev (){
    console.log (abrv1+`. `+abrv2+`.`);
}
abbrev();
//3.String in abbreviated form. console.log(abbrev(“Nazar Babii")) – should be “N.B.”



function lager(z,u){
    if(z>u){
        console.log (z);
    }
    else{
        console.log(u);
    }
}

lager(10,30);//4.Function that accept two integers and display the larger.


let number1=3;
let number2=3;
let number3=3;
if(number1>=number2 && number2>=number3){
    console.log(number1 + ` >= ` + number2 + ` >= ` + number3);
}
else if (number1<=number2 && number2<=number3){
    console.log(number1 + ` <= ` + number2 + ` <= ` + number3);  
}
else if(number1>=number2 && number2<=number3){
    console.log(number2 + ` <= ` + number1 + ` <= ` + number3);
}
else {
    console.log(number1 + ` <= ` + number3 + ` <= ` + number1);
}// 5. Function with conditional statement to sort three numbers