/**
 * @param {string} s
 * @return {number}
 */
console.time('looper');
const symbolValues = {
    "I" : 1,
    "V" : 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {

let i = s.length;
i--;
let sum = symbolValues[s[i]];



while(i > 0) {
    sum += symbolValues[s[i]] > symbolValues[s[i-1]] ? -symbolValues[s[i-1]] : symbolValues[s[i-1]]
    i--;
}

return sum;

}

console.log(romanToInt("MCMXCIV"));
console.timeEnd('looper');