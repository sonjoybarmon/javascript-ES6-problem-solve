const allNum =[10, 15, 20, 25, 30 ,40, 57,82];

let sum = 0;
for (let i = 0; i < allNum.length; i++) {
    sum += allNum[i];
}
console.log(sum);

const reduceSum = allNum.reduce(function(a, b){
    return a + b; 
})
const reducebiyog = allNum.reduce(function(a, b){
    return a - b; 
})
const reducePoron = allNum.reduce(function(a, b){
    return a * b; 
})
const reducediv = allNum.reduce(function(a, b){
    return a / b; 
})
console.log(reduceSum);
console.log(reducebiyog);
console.log(reducePoron);
console.log(reducediv);