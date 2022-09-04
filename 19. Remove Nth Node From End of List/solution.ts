/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // A new phantom head incase of deleting the first node
    let newHead = new ListNode(0, head);
    let left = newHead;
    let right = head;
    
    while (n--) {
        // Advance the leading pointer `n` steps ahead of the trailing pointer
        right = right.next;
    }

    while (right) {
        // Advance both pointers until the leading pointer hits the end of the list
        left = left.next;
        right = right.next;
    }
    
    // Delete the trailing pointer's next node by unlinking it
    left.next = left.next?.next || null;
    
    return newHead.next;
};
