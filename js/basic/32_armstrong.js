function Armstrong(num){
    let sum = 0;
    let str = String(num);

    // for(let i=0; i<str.length ; i++){

    for(let i of str){
        sum += Math.pow(parseInt(i),str.length); 
    }
    return sum;
}
let n = 153;
let ans = Armstrong(n);
if(ans === n){
    console.log("armstrong");
}
else{
    console.log("Not");
}