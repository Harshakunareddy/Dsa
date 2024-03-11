function primefactors(num){
    let pFactors = [];
    let divisor = 2; 
    while(num>=2){
        if(num % divisor === 0){
            pFactors.push(divisor);
            num = num / divisor;
        }
        else{
            divisor = divisor + 1;
        }
    }
    
    return pFactors;
}
console.log(primefactors(84));