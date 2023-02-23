const { fromEuroToDollar} = require('./conversionMonedas.js');


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./conversionMonedas.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

const { fromDollarToYen} = require('./conversionMonedas.js');


test("One euro should be 127.9 yenes", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./conversionMonedas.js')

    // use the function like its suppoed to be used
    const yenes = fromDollarToYen(5)

    // if 1 euro are 127.9 yenes, then 
    const expected = (5/1.2) * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(532.9166666666667); 
})

const { fromYenToPound} = require('./conversionMonedas.js');


test("One euro should be 0.8 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./conversionMonedas.js')

    // use the function like its suppoed to be used
    const dollars = fromYenToPound(1)

    const expected =(1/127.9  ) * 0.8
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(0.006254886630179828); 
})