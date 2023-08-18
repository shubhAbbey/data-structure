var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let curr1 = list1,
    curr2 = list2,
    curr3 = null;
  while (curr1 || curr2) {
    if (curr1 && curr2) {
      if (curr1.val <= curr2.val) {
        curr3 = new ListNode(curr1.val, curr3);
        curr1 = curr1.next;
      } else {
        curr3 = new ListNode(curr2.val, curr3);
        curr2 = curr2.next;
      }
    } else if (curr1) {
      curr3 = new ListNode(curr1.val, curr3);
      curr1 = curr1.next;
    } else if (curr2) {
      curr3 = new ListNode(curr2.val, curr3);
      curr2 = curr2.next;
    }
  }
  let prev = null,
    next = null;
  while (curr3) {
    next = curr3.next;
    curr3.next = prev;
    prev = curr3;
    curr3 = next;
  }
  return prev;
};

var mergeTwoListsWithItr = function (l1, l2) {
  // maintain an unchanging reference to node ahead of the return node.
  let prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // At least one of l1 and l2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list.
  prev.next = l1 == null ? l2 : l1;

  return prehead.next;
};
