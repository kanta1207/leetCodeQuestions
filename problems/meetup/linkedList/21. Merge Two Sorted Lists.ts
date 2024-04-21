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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(); // Dummy head node
  let current = dummyHead; // Pointer to the current node in the merged list

  // Iterate through both lists simultaneously
  while (l1 !== null && l2 !== null) {
    // Compare the values of the current nodes in both lists
    if (l1.val < l2.val) {
      // Append the smaller node from list1 to the merged list
      current.next = l1;
      // Move to the next node in list1
      l1 = l1.next;
    } else {
      // Append the smaller node from list2 to the merged list
      current.next = l2;
      // Move to the next node in list2
      l2 = l2.next;
    }
    // Move to the next node in the merged list
    current = current.next;
  }

  // Append the remaining nodes from list1 or list2 to the merged list
  current.next = l1 !== null ? l1 : l2;

  // Return the head of the merged list (excluding the dummy head)
  return dummyHead.next;
}
