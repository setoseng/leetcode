/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */
const nums = [1,1,1,1,1];
var runningSum = function(nums) {
  const output = [nums[0]];
  for(let x=0; x<nums.length-1; x++){
    output.push(output[output.length-1] + nums[x+1]);
  }
  return output;
};
runningSum(nums);