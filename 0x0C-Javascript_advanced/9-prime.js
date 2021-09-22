let n = 100

var countPrimeNumbers = function(n){
    let nums = [...Array(n).keys()]

    for (let i = 2; i*i < n; i++){
        if(nums[i] !== '1'){
            for(let j = i*i; j < n; j+= i) {
                nums[j] = '1'
            }
        }
    }

    let primes = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 1) {
            primes.push(nums[i])
        }
    }

    return primes.length


let start = performance.now();
countPrimeNumbers();
let end = performance.now();

let final = end - start;
console.log('Execution time of printing countPrimeNumbers was ${final} milliseconds.');