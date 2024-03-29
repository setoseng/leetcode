const max_sub_array_of_size_k = function(k, arr) {
  // TODO: Write your code here
  let maxSum = 0,
      windowSum = 0;
  for(let i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for(let j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
};
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
