const student =[
    {id: 1 , name : 'sonjoy' , num : 017},
    {id: 2 , name : 'ajoy' , num : 016},
    {id: 3 , name : 'anik' , num : 017},
    {id: 4 , name : 'sree' , num : 013},
]
const student1 = student.map(id => id.name);
const student2 = student.map(id => id.num);
const student3 = student.map(id => id.id);
console.log(student1);
console.log(student2);
console.log(student3);







// function getNumber(a , b){
// const n = Math.floor(Math.random() * (a - b + 1) + b);

//     if(a <= n && b >= n){
//         return n;
//     }else{
//         return -1;
//     }
// };
// console.log(getNumber(98766 , 100000));
// console.log(getNumber(120 , 130));