//Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    const lowercaseStr = str.toLowerCase();
  
    const countX = lowercaseStr.split('').filter(char => char === 'x').length;
    const countO = lowercaseStr.split('').filter(char => char === 'o').length;
  
    return countX === countO;

}