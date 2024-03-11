function PerfectNum(n){
    let sum = 0;
    for (let i=1; i<= n/2; i++){
        if(n%i === 0){
            sum += i;
        }
        
    }
    if (sum == n){
        return "Perfect number"
    }else{
        return "Not a Perfect number"

    }
}
let ans = PerfectNum(8);
console.log(ans);