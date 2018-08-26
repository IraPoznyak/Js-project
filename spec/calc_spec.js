class Calc{
    constructor(x,y){
    x=x;
    y=y;}


    sum(x,y){
        return x+y;
    };

    sub(x,y){
        return x-y;
    };


    mult(x,y){
        return x*y;
    };



    div(x,y){
        return x/y;
    };
    
    
    ost(x,y){
        return x%y;
    };

};
 
let Calculator = new Calc(
    x = Math.floor((Math.random() * 100) + 1),
    y= Math.floor((Math.random() * 100) + 1)
);



describe('Calculator', function () {     
    //
   
        let x = Math.floor((Math.random() * 100) + 1),
            y= Math.floor((Math.random() * 100) + 1);

        it('should add ' + x + ' plus ' +y + ' and be equals to ' + (x + y), function () {
            expect(Calculator.sum(x, y)).toBe(x + y);
        });

        it('should subtract' + x + ' from ' + y + ' and be equals to ' + (x - y), function () {
            expect(Calculator.sub(x, y)).toBe(x- y);
        });

        it('should multiply ' +x + 'x' + y+ ' and be equals to ' + (x*y), function () {
           expect(Calculator.mult(x, y)).toBe(x* y);
        });

        it('should divide ' + x + '/' + y + ' and be equals to ' + (x/y), function () {
            expect(Calculator.div(x, y)).toBe(x/y);
        });

        it('should divide ' + x + '/' + y + ' and return reminder = ' + (x%y), function () {
            expect(Calculator.ost(x, y)).toBe(x%y);
        });

    
});

