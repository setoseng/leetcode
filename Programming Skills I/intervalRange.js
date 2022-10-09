// Count Odd Numbers in an Interval Range
// Given two non-negative integers low and high.
// Return the count of odd numbers between low and high (inclusive).

var countOdds = function(low, high ) {
  if(typeof low != 'number' || typeof high != 'number') return;
  if(low>high) return;
  let count =  [];
  for(var x=low; x<=high; x++) {
    if(x%2!=0) {
      count.push(x);
    }
  }
  return count.length;
};

// Clean Path
// var countOdds = function(low, high) {
//   return Math.round((high-low)/2) + (low%2&&high%2) 
// };

countOdds(3,7);
countOdds(8,10)
