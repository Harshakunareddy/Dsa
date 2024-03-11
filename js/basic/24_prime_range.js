function PrimeNumInRange(a,b){
    let primeNums = []
    if(a<2 || b<2){
        return "Give > 1"
    }
    for(let i = a ; i<=b ; i++){
        let isPrime = true;

        for(let j = 2 ; j<=Math.sqrt(i) ; j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
            
        }
        if(isPrime){
            primeNums.push(i)
        }
        
    }
    return primeNums.sort((a,b)=>a-b)
}
console.log(PrimeNumInRange(2,10));