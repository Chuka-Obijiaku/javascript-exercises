const fibonacci = function(fibIndex) {
    if (fibIndex < 0) {
        return 'OOPS'
    }
    if (fibIndex == 0) {
        return 0;
    }
    if (fibIndex == 1) {
        return 1;
    }
    let num_2 = 0;
    let num_1 = 1;
    for (let i = 2; i <= fibIndex; i++) {
        let currentNum = num_2 + num_1;
        num_2 = num_1;
        num_1 = currentNum;
    }
    return num_1;

};

// Do not edit below this line
module.exports = fibonacci;
