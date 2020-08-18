let marks = [45 , 55, 60 ,73, 98, 92];
let max = marks[0];

for(let i = 0; i < marks.length ; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
};
console.log("highest value is: ", max);

let numbers =[20, 32, 65, 84, 59 , 24];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    let element1 = numbers[i];
    sum = sum + element1;
}
console.log("total =", sum);

function getArraySum(sums){
    let sumNum = 0;
    for(let i = 0; i < numbers1.length; i++){
        let element2 = numbers1[i];
        sumNum = sumNum + element2;
    }
    return sumNum;
}
let numbers1 =[20, 32, 65, 80, 59 , 24,200];
let results = getArraySum(numbers1)
console.log(results);