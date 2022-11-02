/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let commonPre = [];
  strs.forEach((item, index) => {
    if(index == 0) {
      for(let x = 0; x < item.length; x++) {
        commonPre.push(item[x]);
      }
    }
    for(let y = 0; y < item.length; y++) {
      if(commonPre[y] != item[y]) {
        commonPre.pop(item[y])
      }
    }
  })
  return commonPre.join("");
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["ab", "a"]));
//longestCommonPrefix(["flower","flow","flight"]);
//longestCommonPrefix(["ab","a"]);
