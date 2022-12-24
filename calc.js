function add(a,b){
    return a+b;
}

function primeNumbers(num){
    let isPrime ;
    for(let i = 2; i < num;i++){
    
        if(num % i == 0){
            isPrime = false;
            break;
        }else{
            isPrime = true;
        }
    }
return isPrime;
}

exports.add = add;
exports.primeNumbers = primeNumbers;