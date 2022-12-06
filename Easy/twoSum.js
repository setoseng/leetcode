/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Two Loop Method. Time Complexity is not good
//  var twoSum = function(nums, target) {
//   var newArr = [];
//   for(var i = 0; i < nums.length ; i++) {
//     for(var j = i + 1; j < nums.length; j++) {
//       if((nums[i] + (nums[j])) == target) {
//         newArr.push(i, j);
//       }    
//     }
//   }
//   return newArr;
// };

// Hash Dictionary Method
var twoSum = function(nums, target) {
  var map = {};
  for(var i = 0; i < nums.length; i++) {
    var n = nums[i];
    console.log(map[target - n]);
    if(map[target - n] >= 0) {
      return [map[target-n], i];
    }
    else {
      map[n] = i;
    }
  }

}

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));
// console.log(twoSum([3,2,3], 6));


twoSum([3,2,3,1,1], 6);