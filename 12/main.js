//Leetcode 206
var reverseList = function(head) {
    let prev = null ;
    let curr = head ;
    let forward = null;

    while(curr!=null){
        forward = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forward
    }
    return prev
};

console.log(reverseList([1,2,3,4,5]));

//LeetCode 876
var middleNode = function(head) {
    if(head == null || head.next == null) return head
    let slow = head 
    let fast = head 
    while(fast != null && fast.next!= null){
        slow = slow.next ;
        fast = fast.next.next ;
    }
    return slow ;
};
console.log(middleNode([1,2,3,4,5]));

//LeetCode 141
var hasCycle = function(head) {
    let fast = head ;
    let slow = head ;
    while(fast != null && fast.next !=null){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast)return true
    }
    return false
};

//LeetCode 234
function reverse(head){
    let prev = null ;
    let curr = head ;
    let forward = null;
    while(curr != null){
        forward = curr.next;
        curr.next = prev 
        prev = curr
        curr = forward
    } 
    return prev
}
var isPalindrome = function(head) {
    let fast = head
    let slow = head 
    while(fast != null && fast.next!= null){
        fast = fast.next.next ;
        slow = slow.next;
    }
    slow = reverse(slow)

    while(slow != null && slow.val == head.val){
        head = head.next;
        slow = slow.next
    }
    return slow == null

};

//LeetCode 19
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head;

    let slow = dummyHead;
    let fast = head ;
    for(let i=0; i<n ;i++){
        fast = fast.next
    }

    while(fast != null){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next=slow.next.next


    return dummyHead.next
};

//LeetCode 2
var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0)
    let l3 = dummyHead
    let carry = 0

    while (l1!=null || l2 != null) {
        const l1Val = l1 != null ? l1.val : 0
        const l2Val = l2 != null ? l2.val : 0
        let currentSum = l1Val + l2Val + carry
        carry = Math.floor(currentSum/10)
        let lastDigit = currentSum % 10
        let newNode = new ListNode(lastDigit)
        l3.next = newNode;
        if(l1 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
        l3=l3.next
    }

    if(carry > 0){
        const newNode = new ListNode(carry)
        l3.next = newNode
    }
    return dummyHead.next
};

//LeetCode 328
var oddEvenList = function(head) {
    if(head == null) return null;
    let odd = head
    let even = head.next;
    let evenHead = even
    while(even != null && even.next != null){
        odd.next = even.next
        odd = odd.next;
        even.next = odd.next;
        even = even.next
    }
    odd.next = evenHead
    return head
};