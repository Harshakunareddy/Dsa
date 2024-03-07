function SmallOf3(a,b,c){
    if(a<b && a<c){
        return "a is Small"
    }
    if(b<a && b<c){
        return "b is Small"
    }
    if(c<a && c<b){
        return "c is Small"
    }
}
let ans = SmallOf3(10,-2220,-100);
console.log(ans);