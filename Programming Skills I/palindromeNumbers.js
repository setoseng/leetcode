/**
 * @param {number} x
 * @return {boolean}
 */
//  Not optimial and slow.
//  var isPalindrome = function(x) {
//   var newArr = Array.from(String(x));
//   newArr.reverse();
//   var newInt = 0;
//   for(var i = 0; i < newArr.length ; i++) {
//     newInt = newInt * 1 + newArr[i];
//   }
//   if(newInt == x) {
//     return true;
//   } else return false;
// };

var isPalindrome =  function(x) {
  if (x < 0 || x % 10 == 0 && x !=0)  {
    return false;
  }
  var t = 0;
  while(x > t) {
    t = t * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return t == x || x == Math.floor(t/10);
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(10));
//isPalindrome(121);