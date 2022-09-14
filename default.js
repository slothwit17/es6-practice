function add(num1, num2 = 0){
    return num1 + num2;
}

var result = add(10);
console.log(result);

// default is used to run the code without breaking. It is like backup. Here in add function if we don't pass the num 2 parameter then it will be default 0;