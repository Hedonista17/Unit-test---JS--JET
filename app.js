const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum ,fromEuroToDollar };