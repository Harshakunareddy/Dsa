function RootsOfQuadratic(a,b,c){
    var dis = b*b - 4*a*c
    var d = Math.sqrt(dis)
    let r1 = 0;
    let r2 = 0;
    let below = 2*a
    if (d>0){
        r1 = -b + d
        r2 = -b - d
        return [r1/below , r2/below]
    }
    else if(d<0){
        r1 = -b - d
        r2 = -b + d
        return [r1/below , r2/below]  
    }
    else{
        r1 = -b
        r2 = -b
        return [r1/below]
    }     
}

let a = 1,b = 4, c = 4
let ans = RootsOfQuadratic(a,b,c)
console.log(ans);