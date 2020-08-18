function factorialRecursive(num){
    if(num == 1){
        // console.log(num);
        return 1;
    }else{
        // console.log(num ,num -1);
        return num * factorialRecursive(num - 1);
    }
};
let results = factorialRecursive(5);
console.log(results);