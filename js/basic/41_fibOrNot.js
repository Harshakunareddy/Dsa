function fibOrNot(n){
    let seq = [0,1]
    for(let i=2; i<=n; i++){
        let nextNum = seq[i-1]+seq[i-2]
        seq.push(nextNum)
    }
    return seq.includes(n)
}
let ans = fibOrNot(10);
console.log(ans); 