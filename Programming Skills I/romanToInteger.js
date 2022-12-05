/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const symbols = {
    "I": 1,
    "V": 5,
    "X": 10, 
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let value = 0;
  for(let x = 0; x < s.length; x++){
    console.log(symbols[s[x]]);
    if(symbols[s[x]] < symbols[s[x+1]]) {
      value -= symbols[s[x]]
    } else {
      value += symbols[s[x]]
    }
  }
  return value;
};

//console.log(romanToInt('III'))
//console.log(romanToInt('LVIII'))
//console.log(romanToInt('MCMXCIV'))

romanToInt('III')
//romanToInt('LVIII')



