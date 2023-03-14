/*
Exercise #1
Maria has to calculate the cost of her payments for the month. 
For every transation there is a $3 fee and a 0.1% (0.01) interest fee. 
Can you help her calculate her costs?

Return the value of what she should be paying.*/

let maria = (transation) => {
    let transationFee = 3;
    let interestFee = 0.01;
    let interestAmount = interestFee * transation;
    let total = transation + transationFee + interestAmount;
    return total;

}

maria(1000)  //1013
console.log(maria(1000))