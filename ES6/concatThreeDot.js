const num1 = [20 , 52 , 32, 32 , 42 ];
const num2 = [2 , 5 , 3, 9 , 11 ];
const num3 = [28 , 52 , 32, 32 , 42 ];
const allNum = num1.concat(num2).concat(num3);
console.log(allNum);
const allNum2 = [...num1 , 12, 52, ...num2 ,...num3];
console.log(allNum2);

const aam = 60 ;
const jam = 40 ;
const lecu = 220;
const total = Math.max(aam,jam,lecu);
console.log(total);

const threeDot = [200, 300 ,500];
const total2 = Math.max(...threeDot);
console.log(total2);