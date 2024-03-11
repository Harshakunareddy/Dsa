function PatNumbRight(n){
    for(let r=1; r<=n; r++){
        let row = '';
        for(let c=1; c<=r; c++){
            row += c;
        }
        console.log(row);

    }
}
PatNumbRight(5)