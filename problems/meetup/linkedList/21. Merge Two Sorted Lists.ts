//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  const shouldStartFromList1 = list1.val <= list2.val;
  const mergedList = new ListNode(shouldStartFromList1 ? list1.val : list2.val);
  let currentNode = mergedList;
  if (shouldStartFromList1) {
    list1 = list1.next;
  } else {
    list2 = list2.next;
  }
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      currentNode.next = new ListNode(list1.val);
      currentNode = currentNode.next;

      list1 = list1.next;
    } else {
      currentNode.next = new ListNode(list2.val);
      currentNode = currentNode.next;

      list2 = list2.next;
    }
  }
  if (list1 !== null) {
    currentNode.next = list1;
  } else if (list2 !== null) {
    currentNode.next = list2;
  }
  return mergedList;
}
