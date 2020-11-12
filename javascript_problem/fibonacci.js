let fibo = [0 ,1];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
    for(let i =2 ; i <= 10; i++){
        fibo[i] = fibo[i -1] +fibo[i-2]    
    }
    console.log(fibo);


    function fibonacci(n){
        let fib = [0 ,1];
        for(let i =2 ; i <= n; i++){
            fib[i] = fib[i -1] +fib[i-2]    
        }
        return fib;
    }
    var results = fibonacci(12);
    console.log(results);

    function fibonacci(n){
        if (n == 0){
            return 0;
        }
        if (n == 1){
            return 1;
        }else{
            return fibonacci(n - 1) + fibonacci(n-2);
        }
    }
    var result = fibonacci(10);
    console.log(result);