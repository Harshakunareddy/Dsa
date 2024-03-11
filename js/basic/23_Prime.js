function PrimeNum(num){
    if(num<=1){
        return "Not Valid Number give > 1";
    }
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return `Not a Prime, DIvisible by ${i}`
        }
    }
    return "Prime"

}
let ans = PrimeNum(323)
console.log(ans);
