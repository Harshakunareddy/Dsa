function PerfetInRange(a,b){
    let perfectCount = []
    for(let i = a; i<= b; i++){
        let sum = 0;
        let num = a;

        for(let j = 1; j<= i/2 ; j++){
            if(i % j === 0){
                sum += j;
            }
        }
        if (sum === i){
            perfectCount.push(i)
        }
    }
    
    
    return perfectCount;
}
console.log(PerfetInRange(1,20));