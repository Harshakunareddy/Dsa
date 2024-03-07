function BigOf3(a,b,c){
    if(a>b && a>c){
        return "a is big"
    }
    if(b>a && b>c){
        return "b is big"
    }
    if(c>a && c>b){
        return "c is big"
    }
}
let ans = BigOf3(10,200,30)
console.log(ans);