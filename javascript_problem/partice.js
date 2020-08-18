//1st methor
let swap1 = 10;
let swap2 = 20;
swap1 = swap1 + swap2;
swap2 = swap1 - swap2;
swap1 = swap1 -swap2;
console.log("after swap1: swap1 =", swap1 ,"after swap2: swap2 =" ,swap2);
//2nd methor
let swapA =50;
let swapB =60;
let tump = swapA;
    swapA = swapB;
    swapB =tump;
console.log(swapA, swapB);
//3rd methor
let swapP = 100;
let swapQ = 120;
[swapP ,swapQ]= [swapQ, swapP];
console.log(swapP,swapQ);


//math rendom sokka 1 theke 6 er modhe je kono 10ta
for(let i = 0; i<10 ; i++){
    let sokkha =Math.random()*6;
    let sokkhaRound= Math.round(sokkha);
    console.log(sokkhaRound);
}
//find max of three values
//1st methor
let aam = 150;
let jam = 120;
let kola = 50;
if (aam > jam) {
    if (aam > kola) {
        console.log("amm is bigest")
    } else {
        console.log("kola is bigest")
    }
} else {
    if (jam > kola) {
        console.log("jam is bigest")
    } else {
        console.log("kola is bigest")
    }
};
//2nd methor
let keBoro = Math.max(aam,jam,kola);
console.log(keBoro);

//array bigest number search
let marks =[25,35,15,48,96,75,48,35,45,68];
let max =marks[0];
for(let n= 0; n < marks.length; n++){
    let element = marks[n];
    if(element > max){
        max = element;
    }
}
console.log(max);
//sobgula jog kore total ta bahir korci.
let sumNum =[23,54,56,85,95,76,20,105];
let totalSum = 0 ;
for (let p = 0; p <sumNum.length; p++){
    let total = sumNum[p];
    totalSum = totalSum + total;
}
console.log(totalSum);

//unique name khuje bahir korar jonno 

let uni =[2, 5 ,2 ,6 ,8 ,4 ,9,5 ,6 ,4, 5];
let uniName = [];

for (let x= 0; x < uni.length; x++){
    let uniAll = uni[x];
    let index = uniName.indexOf(uniAll);
    if(index == -1){
         uniName.push(uniAll);
    }
}
console.log(uniName);
