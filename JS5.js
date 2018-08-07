// Lesson 5


console.log(`1`);
console.log(`2`);

let p1 = new Promise ((resolve,reject) =>
setTimeout(() =>{
    console.log(`3`);
    resolve(`Start`);
}, 3000 ))

/*p1.then(() =>{
    console.log(`4`);
});*/

async function test(promise) {
   let s1 = await promise;
   console.log(`4`);
   console.log(s1);
}

test(p1);

