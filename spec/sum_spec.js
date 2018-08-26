//lesson 8


/*function sum(x,y){
    return x+y;
}

describe(" Verify if JS program computes correct sum of the two given integers ",function(){
    it(" should return 5 if arguments are 2 and 3 ",function (){
        expect(sum(2,3)).toBe(5);
    })
})*/


function sum (x,y){
    let z=x+y;
  return `Sum of ${x}+${y}=${z}`;
}


describe('Verify if JS program computes and show in string correct sum of the two given integers', function() {
    it('should return Sum of 2+3=5 for arguments 2 and 3', function (){       
       expect(sum(2,3)).toBe(`Sum of 2+3=5`);
    });
 });
