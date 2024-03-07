// leap => 366 days
// not leap => 365 days
function LeapOrNot(year){
    if((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)){
        return "Leap Year"
    }else{
        return "Not a Leap Year"
    }
}
year = 2024;
let ans = LeapOrNot(year);
console.log(ans);
