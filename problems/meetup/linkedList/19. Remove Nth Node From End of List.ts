/**
 * 19. Remove Nth Node From End of List
 *  Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Follow up: Could you do this in one pass?
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Difficulty: Medium
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Approach: Two Pointers
// Time complexity: O(n)
// Space complexity: O(1)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(); // Dummy head node
  dummyHead.next = head; // Point the dummy head to the head of the list
  let slow: ListNode | null = dummyHead; // Pointer to the node before the node to be removed
  let fast: ListNode | null = dummyHead; // Pointer to the node to be removed

  // Move the fast pointer n steps ahead of the slow pointer
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  // Move both pointers simultaneously until the fast pointer reaches the end of the list
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next;
  }

  // Remove the nth node from the end of the list
  slow!.next = slow!.next!.next;

  // Return the head of the list (excluding the dummy head)
  return dummyHead.next;
}
