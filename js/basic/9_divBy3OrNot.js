function DivBy3(num){
    if(num%3 == 0){
        return "Yes Divisible by 3";
    }else{
        return "Not Divisible by 3";
    }
}
let ans = DivBy3(8);
console.log(ans);