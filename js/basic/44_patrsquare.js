function PatternSquare(n){
    for(let i=1;i<=n;i++){
        let row = '';
        for(let col = 1; col<= n; col++){
            row += "*"
        }
        console.log(row);
    }
}
PatternSquare(5)