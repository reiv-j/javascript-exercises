const fibonacci = function(num) {
    num = Number(num);

    if (num === 0) return 0;
    if (num < 0) return "OOPS";

    const arr = [1, 1]
    for (let i = num - 2; i > 0; i--) {
      arr.push(arr.at(-1) + arr.at(-2))
    }
    return arr.at(-1);
  };

// Do not edit below this line
module.exports = fibonacci;
