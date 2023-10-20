const repeatString = function(word, numOfRepeats) {
    if (numOfRepeats < 0) {
        return "ERROR";
    }
    let newWord = ""; 
    for (let i = 0; i < numOfRepeats; i++) {
        newWord += word ;
    }
    return newWord;

};

// Do not edit below this line
module.exports = repeatString;
