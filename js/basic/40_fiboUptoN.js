function fiboUptoN(n){
    let seq = [0,1];
    for(let i = 2; i<n ;i++){
        let nextNum = seq[i-1]+seq[i-2];
        if(nextNum > n){
            break;
        }
        seq.push(nextNum)
    }
    return seq;
}
console.log(fiboUptoN(10));