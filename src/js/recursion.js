// 1 1 2 3 5 8 13 21 

function fibo(n) {
    if (n < 3) {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));