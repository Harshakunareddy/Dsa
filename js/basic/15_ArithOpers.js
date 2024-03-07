function ArithOpers(oper,a,b) {
    if(oper == '+'){
        return a+b
    }
    else if(oper == '-'){
        return a-b
    }
    else if(oper == '*'){
        return a*b
    }
    else if(oper == '/'){
        return a/b
    }
    else if(oper == '%'){
        return a%b
    }
}

oper = '%';
a = 10;
b = 20;
let ans = ArithOpers(oper,a,b)
console.log(ans);