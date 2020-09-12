let factorial = 1;
for (let i = 1; i <= 10; i++){
    factorial = factorial * i
    console.log(i, factorial);
};

let factorial1 = 1;
let i = 1;
while(i<=10){
    factorial1 =factorial1 * i;
    // console.log(factorial1);
    i++
}
console.log(factorial1);

function factorial2(n){
    let factorial = 1;
    for(let i = 1; i<=n ; i++){
        factorial = factorial *i;
    }
    return factorial;
}
console.log(factorial2(5));

function fact(m){
    if(m==0){
        return 1;
    }else{
        return m * fact (m -1);
    }
}
var result = fact(10);
console.log(result);