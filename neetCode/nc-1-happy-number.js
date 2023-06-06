/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, seen = new Set()) {
    const one = () => n === 1 || seen.has(n)
    while (!one()){
        seen.add(n)
        n = sumSquare(n)
    }
    return (n === 1)
};

var sumSquare = (n, sum = 0) => {
    while(0<n){
        const remainder = n % 10

        n = Math.floor(n/10)
        sum += remainder * remainder
    }
    return sum
}