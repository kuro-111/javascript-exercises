const userIn = [];

const add = function (num1, num2) {
     return num1 + num2;
};

const subtract = function (num1, num2) {
     return num1 - num2;
};

const sum = function (num) {
     return num.reduce((a, b) => a + b, 0);
};

const multiply = function (num) {
     return num.reduce((a, b) => a * b, 1);
};

const power = function (base, expo) {
     return base ** expo;
};

const factorial = function (num) {
     let factor = num;
     if (num === 0 || num === 1) {
          return 1;
     }

     while (num > 1) {
          num--;
          factor = factor * num;
     }
     return factor;
};

// Do not edit below this line
module.exports = {
     add,
     subtract,
     sum,
     multiply,
     power,
     factorial
};
