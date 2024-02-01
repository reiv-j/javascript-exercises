const palindromes = function (str) {
    const alphaNum = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    
    const splitArr = str.split("").map(char => char.toLowerCase());
    const onlyLetters = splitArr.filter(char => alphaNum.includes(char));
    const finalArr = [];
    onlyLetters.map(char => finalArr.unshift(char));
  
    let result = true;
    for (let i = 0; i < finalArr.length; i++) {
      if (finalArr[i] === onlyLetters[i]) {
        continue;
      } else {
        result = false;
      }
    }
  
    return result;
  };

// Do not edit below this line
module.exports = palindromes;
