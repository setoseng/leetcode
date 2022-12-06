/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// My Method
// Issue: Returned Object and not linked list
// Uses 2 loops
//  var middleNode = function(head) {
//   let count = 0;
//   let newHead = [];
//   for(let x = 0;  x < head.length;  x++) {
//     count++
//   }
//   count = count / 2;
//   (Number.isSafeInteger(count)) ? count += 1 : count = Math.ceil(count);
//   for(let y = count; y <= head.length; y++) {
//     newHead.push(y);
//   }
//   return newHead;
// };

var middleNode = function(head) {
  var p1 = head;
  var p2 = head;
  while(p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1;
}

console.log(middleNode([1,2,3,4,5]));
console.log(middleNode([1,2,3,4,5,6]));
//middleNode([1,2,3,4,5])