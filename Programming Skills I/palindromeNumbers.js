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

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
//isPalindrome(121);