function ArithSwitch(oper,a,b){
    switch(oper){
        case '+':
            return a + b
            
        case '-':
            return a - b
            
        case '*':
            return a * b
            
        case '/':
            return a / b
            
        case '%':
            return a & b
            
        default:
            return "Not Valid Arith Operator Type"
    }
}
let oper = '$'
let a = 0
let b = 10

let ans = ArithSwitch(oper,a,b);
console.log(ans); 