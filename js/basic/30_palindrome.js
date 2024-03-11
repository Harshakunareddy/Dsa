function Palindrome(num){
    let pali = 0;
    while(num>0){
        pali = pali * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return pali;
    
}
var num = 3233;
var pal = Palindrome(num)
if(pal == num){
    console.log("palindrome");
}
else{
    console.log("Not");
}