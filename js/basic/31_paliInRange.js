function PaliInRange(a,b){
    let palirange = []

    for(let i = a ; i<=b ; i++){
        let pali = 0;
        let num = i;
        while(num>0){
            pali = pali * 10 + num % 10;
            num = Math.floor(num/10)
        }
        if(i == pali){
            palirange.push(i)
        }
    }
    return palirange;
}

console.log(PaliInRange(10,100));