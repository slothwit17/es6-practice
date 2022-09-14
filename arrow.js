function doubleIt(num){
    return num*2;
}

//alternative way arrow function
//single parameter
const doubleIt2 = num => num*2;
//multiple parameter
const add = (num1, num2) => num1 + num2;
// without parameter
const give5 = () => 5;
// multiple lines 
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}

const result = doubleIt2(10);
const result2 = add(15, 15);
const result3 = give5();
const result4 = doMath(7, 5);
console.log(result4);