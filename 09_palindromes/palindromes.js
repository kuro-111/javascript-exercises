function containsSpecialChars(words) {
     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
     return specialChars.test(words);
}

const palindromes = function (words) {
     let charArray = [];
     let wordsL = words.toLowerCase();

     let checkSP = containsSpecialChars(wordsL);

     if (checkSP == true) {
          wordsL = wordsL.replace(/[^a-zA-Z0-9]/g, "");
     }

     for (let i = 0; i < wordsL.length; i++) {
          charArray.push(wordsL[i]);
     }

     let reverse = charArray.reverse();

     let reversedWord = reverse.join("");

     if (wordsL === reversedWord) {
          return true;
     } else {
          return false;
     }
};
// Do not edit below this line
module.exports = palindromes;
