let vowels = ['a','e','i','o','u'];
function VowOrCons(letter){
    for(let i=0; i<vowels.length; i++){
        if(letter === vowels[i]){
            return "Vowel";
        }
        
    }
    return "Consonant";

}
let letter = 'p';
const ans = VowOrCons(letter);
console.log(ans);