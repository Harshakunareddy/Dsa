/* 

sub = 6
90% - 80%> A
70% > B
60% > C
...

*/ 

function StudeGrade(avg){
    if(avg >= 90){
        return "A+"
    }
    else if(avg >= 80 && avg <= 89){
        return "A"
    }
    else if(avg >= 70 && avg <= 79){
        return "B"
    }
    else if(avg >= 60 && avg <= 69){
        return "C"
    }
    else if(avg >= 50 && avg <= 59){
        return "D"
    }
    else if(avg >= 25 && avg <= 49){
        return "E"
    }
    else{
        return "Write Again If You Want";
    }
}

a = [90,90,70,80,90,40];
total = 0;
for(let i = 0; i< a.length; i++){
    total += a[i];
}
console.log("Total Marks:"+total);
let avg = total / 6; 
console.log("Avg Marks:"+ avg);

let ans = StudeGrade(avg);
console.log(ans);
