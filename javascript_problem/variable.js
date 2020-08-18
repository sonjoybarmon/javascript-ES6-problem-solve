let a = 5;
let b = 7;
console.log("before swap: a =", a, "b =", b);
 let temp = a;
    a=b;
    b= temp;
console.log("affer swap: a =", a, "b =", b);

//2nd pocej...

let x = 35;
let y = 57;
x = x + y; // x = 35 +57 = 92
y = x - y; //y = 92 - 57 = 35
x = x -y; // x = 92 - 35 = 57

console.log("after swap: x =", x, "y =", y);

// 3rd proces

let p = 25;
let q = 10;

[p, q] =[q, p];

console.log("after swap: p =", p, "q =", q);
