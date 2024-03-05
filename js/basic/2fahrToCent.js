let fah = 40;
let cen =  (fah - 32) * 5/9 ;
console.log(cen);

const fahrenheit = (f)=>{
    let centi = (f-32) * 5/9 ;
    return centi;
}
let centigrades = fahrenheit(40);
console.log(centigrades);