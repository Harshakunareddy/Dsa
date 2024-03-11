function strongInRange(a,b){
    function factorial(n){
        if(n==0 || n==1){
            return 1;
        }
        else{
            return n * factorial(n-1);
        }
    }

    let strongCount = []; 
    for (let i = a; i<=b ; i++ ){
        let num = i;
        let sum = 0;
        while(num > 0){
            let digit = num % 10;
            sum += factorial(digit);
            num = Math.floor(num / 10);
        }
        if(i == sum){
            strongCount.push(i)
        }
    }
    return strongCount;
}

let ans = strongInRange(10,1000000);
console.log(ans);