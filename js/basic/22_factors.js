function factors(num){
    let factors = [];
    for(let i = 0; i <= Math.floor(Math.sqrt(num)) ; i++){
        if(num%i == 0){
            factors.push(i);
            if(num/i !== i){
                factors.push(num/i);
            }
        }
    } return factors.sort((a,b) => a-b);
}
let ans = factors(14)
console.log(ans);