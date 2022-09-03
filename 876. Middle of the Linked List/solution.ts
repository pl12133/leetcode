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

function middleNode(head: ListNode | null): ListNode | null {
    const arr = toArray(head);
    return arr && arr[Math.floor(arr.length / 2)];
};

function toArray(head: ListNode | null): ListNode[] | null {
    if (!head) {
        return null;
    }
    const result = [];
    walk(head, node => result.push(node));
    return result;
}

function walk(head: ListNode | null, callback: (head: ListNode) => any) {
    callback(head);
    if (head.next) {
        walk(head.next, callback);        
    }
}
