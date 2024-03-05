let num = 10;
console.log("num = " + num);
let a = num * (num+1); 
console.log("sum of " + num + " natural numbers =" + a/2); 

// squares of sum
let sumOfSquare = 0; 
let sumOfCube = 0; 
for( let i = 1; i<= 10 ; i++){
    sumOfSquare += i*i;
    sumOfCube += i*i*i;
}
console.log("sumOfSquare = " + sumOfSquare);
console.log("sumOfCube = " + sumOfCube);