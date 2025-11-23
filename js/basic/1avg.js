// let stud_marks = [55,65,75,85,87,96];
// let sum = 0;
// for(let i=0; i<stud_marks.length ; i++){
//     sum += stud_marks[i];
// }
// console.log("sum = " + sum);
// console.log("avg = "+sum/stud_marks.length);















const marks = [90,40,90,40,50,60];
const count = marks.length;
console.log(count);
let total_marks = 0;
for(let i=0; i<count; i++){
    total_marks += marks[i];
}
console.log(total_marks);
const avg_marks = parseInt(total_marks/count);
// use floor, seal here
console.log(avg_marks);