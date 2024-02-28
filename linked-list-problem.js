//LeetCode 234
var isPalindrome = (head) => {
  let str1 = (str2 = "");
  let node = head;
  while (node != null) {
    str1 = `${str1}${node.val}`;
    str2 = `${node.val}${str2}`;
    node = node.next;
  }
  return str1 === str2;
};
//LeetCode 206
var reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  while (current != null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
};
//LeetCode 237
var deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};
//LeetCode 19
var removeNthNode = (head, n) => {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) {
    return head.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
//LeetCode 2
var addTwoLinkedList = (l1, l2) => {
  var dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  while (l1 != null || l2 != null || carry > 0) {
    var val1 = l1 ? l1.val : 0;
    var val2 = l2 ? l2.val : 0;
    var sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;
    current.next = new ListNode(sum);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};
