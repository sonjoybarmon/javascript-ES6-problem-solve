function primeNum(n){
    for(i =2 ; i < n; i++){
        if(n%i== 0){
            return 'Not a prime number bro...!!';
        }
    }
    return 'yes bro this is a prime number ...Yay';
}

let num1 = primeNum(5);
let num2 = primeNum(27);
let num3 = primeNum(97);
let num4 = primeNum(109);
let num5 = primeNum(120);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);