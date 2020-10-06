module.exports = function reverse (n) {
    let positive = Math.abs(n);
    return +(positive.toString(10).split('').reverse().join(''))
};