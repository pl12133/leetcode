
//  Definition for singly-linked list.
/* class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}
*/


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const arr1 = listNodeToArray(l1);
    const arr2 = listNodeToArray(l2);
    
    return arrayToListNode(digitwiseSumWithCarry(arr1, arr2));
};

function listNodeToArray(listNode: ListNode | null): number[] {
    return !listNode ? [] : [
        listNode.val,
        ...(listNode.next ? listNodeToArray(listNode.next) : [])
    ]
}

function arrayToListNode(nums: number[]): ListNode | null {
    return nums.reduce((lastNode: ListNode | null, digit: number) => {
        return new ListNode(digit, lastNode);
    }, null);
}

/**
 * Carry example:
 * [ 9, 9, 8, 9 ] === 09899
 * [ 1, 2, 3, 4 ] === 04321
 *                  = 14220
 *
 *  ~ +1 +1 +1 +1
 * [ 0  2, 2, 4, 1 ]
 */
function digitwiseSumWithCarry(arr1: number[], arr2: number[]): number[] {
    const length = Math.max(arr1.length, arr2.length);
    
    const accumulator = [];
    let carry = false;
    
    for (let index = 0; index < length; ++index) {
        let digit = (arr1[index] || 0) + (arr2[index] || 0) + (carry ? 1 : 0);
        if (digit >= 10) {
            carry = true;
            digit = digit % 10;
        } else {
            carry = false;
        }
        
        accumulator.push(digit);
    }
    
    if (carry) {
        accumulator.push(1);
    }
    
    return accumulator.reverse();
}

