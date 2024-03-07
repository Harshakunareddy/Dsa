const bigOrSmall = (a,b)=>{
    if(a>b){
        return "a is big"
    }else if(b>a){
        return "b is big"
    }
    else{
        return "equal"
    }
}
let ans =  bigOrSmall(10,100)
console.log(ans);
