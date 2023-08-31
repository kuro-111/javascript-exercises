const fibonacci = function (cycles) {
     if (cycles < 0) return "OOPS";
     if (cycles == 0) return 0;
     if (cycles == 1) return 1;
     let prevCycle = 0;
     let currentTotal = 1;
     for (var i = 2; i <= cycles; i++) {
          let pastTotal = currentTotal;
          currentTotal = prevCycle + currentTotal;
          prevCycle = pastTotal;
     }
     return currentTotal;
};

// Do not edit below this line
module.exports = fibonacci;
