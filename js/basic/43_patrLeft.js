function patterLeft(n){
    for (let i=n; i >= 1 ; i--){
        let row = ''
        for (let col = 1; col<= i; col++){
            row += "*"
        }
        console.log(row);
    }
}
patterLeft(5)