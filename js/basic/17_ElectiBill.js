let Bill = 0; 
function ElectriBill(totalUnits){
    if(totalUnits <= 100){
        Bill = totalUnits * 2.66;
        return Bill;
    }
    else if(totalUnits <= 200){
        Bill = totalUnits * 4.66
        return Bill;

    }
    else if(totalUnits <= 300){
        Bill = totalUnits * 5.66
        return Bill;
    }
    else{
        Bill = totalUnits * 6.66
        return Bill;
        
    }
}
let totalUnits = 580;
let ans = ElectriBill(totalUnits);
console.log(ans);