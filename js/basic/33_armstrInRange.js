function ArmStrInRange(a,b){
    let armCount = []

    for(let i = a ; i<=b ; i++){
        let num = String(i);
        let sum = 0;
        for(let j = 0 ; j<num.length ; j++){
            sum += Math.pow(parseInt(num[j]),num.length)
        }
        if (i == sum){
            armCount.push(i)
        }
    }
    return armCount;
}
console.log(ArmStrInRange(10,1000));