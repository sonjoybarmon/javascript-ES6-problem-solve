/* arguments holo function er bitor array moto kaj kore eta function er bahire kaj korbe na . function er bahire jodi call kora hoi tahole ekta error dibe.*/
function addNumber(num1 , num2){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i]; 
        sum = sum + num ;
    }
    return sum ;
}

let result = addNumber(15,20,24,68,54,79,52,31); // arguments use korar jonno eikhane onek gula peramitar deyer por o kaj korce.
console.log(result);