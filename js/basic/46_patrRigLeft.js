function PatRighLeft(n){
    for(let r = 1; r<=n ;r++){
        let row = ''
        for(let c = 1; c<= r ; c++){
            row += "* "
        }
        console.log(row);
    }
        
    // decrease
    for(let r = n-1 ; r>=1 ; r-- ){
        let row = '';
        for(let c = 1; c<= r; c++){
            row += "* "
        }
        console.log(row);
    }
}
PatRighLeft(5)