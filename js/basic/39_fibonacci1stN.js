function fiboUptoNterms(n){
    let seq = [0,1];
    for (let i=2; i<n ;i++){
        let nextNum = seq[i-1] + seq[i-2]
        seq.push(nextNum);
    }
    return seq;
}
console.log(fiboUptoNterms(6));

