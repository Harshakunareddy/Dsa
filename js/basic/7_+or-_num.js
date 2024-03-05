function posiOrNeg(num){
    if(num>0){
        return "positive number";
    }
    else if(num===0){
        return "Zero";
    }
    else{
        return "negative number";
    }
}

const ans = posiOrNeg(-10);
console.log(ans);