function factorial(n) {
    if(n==0 || n==1){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}
function Strong(n){
    let num = n;
    let sum = 0;
    while(num>0){
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10)
    }
    if(sum === n){
        return "Strong Number"
    }
    else{
        return "Not Strong Number"
    }
}

let ans = Strong(145);
console.log(ans);