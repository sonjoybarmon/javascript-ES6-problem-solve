
function factorial(n){
    if (n == 0) {
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
let result = factorial(12);
console.log(result);



function fibonacci(n){
    let fibo = [0 , 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];   
    }
    return fibo;
}
let resultFibo = fibonacci(15);
console.log(resultFibo);

function fibonacci2(n){
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else{
        return fibonacci2(n - 1) + fibonacci2(n - 2);
    }
}
const resultFibonacci = fibonacci2(15);
console.log(resultFibonacci);


function inPrime(num){
    for (let i = 0; i < num; i++){
        if (num % 2 == 0) {
            return 'your number is a prime number'
        }
        else{
            return 'your number is not a prime number'
        }
    } 
}
const prime = inPrime(111);
console.log(prime);

let x = 5;
let y = 4;
 x = x + y;
 y = x - y;
 x = x - y;
 console.log(x , y);

 const marks = [20 , 25 , 45 ,65 ,78 ,89 ,50];
 let max = marks[0];
 for (let i = 0; i < marks.length; i++) {
     const newMax = marks[i];
     if(newMax > max){
        max = newMax;
     }
     
 }
 console.log(max);



 function totalNumber(num){
     let max = 0;
     for (let i = 0; i < num.length; i++) {
         const newMax = num[i];
         max = max + newMax;
     }
     return max;
 }
 const numbers = [12 ,52 ,45 ,78 ,95 ,64 ,62];
 const resultNum = totalNumber(numbers);
 console.log(resultNum)

 const mark = [ 52 , 45 ,65 ,74 ,52,87 ,56 ,65];
 let uniMarks = [];

 for (let i = 0; i < marks.length; i++) {
     const element = mark[i];
     let newIndex = uniMarks.indexOf(element);

     if (newIndex == -1) {
         uniMarks.push(element);
     }   
 }
 console.log(uniMarks);


 const Num = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,1 ,2 ,3 ,4 ,5 ,6, 7, 8 ,9];
 let uniNum = [];
 for (let i = 0; i < Num.length; i++) {
     const element = Num[i];
     let NumIndex = uniNum.indexOf(element);
     if (NumIndex == -1) {
         uniNum.push(element);
     }
     
 }
console.log(uniNum);

const word = 'i am sonjoy. coming  soon a good developer'
let totalWord = 0;
let reverse = '';
for (let i = 0; i < word.length; i++) {
    const element = word[i];
    if (element == ' ' && word[i - 1]!= ' ') {
        totalWord++;
    }

    reverse = element + reverse;
}
totalWord++
console.log(totalWord);
console.log(reverse);