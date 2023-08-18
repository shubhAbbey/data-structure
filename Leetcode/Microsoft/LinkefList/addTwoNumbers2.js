function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
   let curr1 = l1, curr2 = l2, stack1 = null, stack2 = null, stack3=null
   while(curr1){
       stack1 = push(curr1.val, stack1)
       curr1=curr1.next
   }
   while(curr2){
       stack2 = push(curr2.val, stack2)
       curr2=curr2.next
   }
   let carry=0
   while(stack1 || stack2){
       let newVal = carry+(stack1 ? stack1.val : 0)+(stack2 ? stack2.val : 0)
       let val = newVal%10
       carry=Math.floor(newVal/10)
       stack3=push(val, stack3)
       if(stack1) stack1=stack1.next
       if(stack2) stack2=stack2.next
   }
   console.log(stack3)
};

var push = function(val, stack){
   let newNode = new ListNode(val, stack)
   stack=newNode
   return stack
}

var addTwoNumbersWithoutStack = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    let curr1 = l1, curr2 = l2, l1Count=0, l2Count=0, curr3 = null
    while(curr1) {
        l1Count++
        curr1 = curr1.next
    }
    while(curr2){
        l2Count++
        curr2 = curr2.next
    }
    curr1 = l1
    curr2 = l2
    if(l1Count>l2Count){
        let diff = l1Count-l2Count
        for(let i = 0; i < diff; i++){
            curr2 = push(0, curr2)
        }
    }else{
        let diff = l2Count-l1Count
        for(let i = 0; i < diff; i++){
            curr1 = push(0, curr1)
        }
    }
    while(curr1 || curr2){
        let newVal = curr1.val+curr2.val
        curr3=push(newVal, curr3)
        curr1 = curr1.next
        curr2 = curr2.next
    }
    let result = curr3
    while(result){
        let mod = result.val%10
        let carry = Math.floor(result.val/10)
        result.val=mod
        if(carry) {
            if(result.next)
            result.next={...result.next, val:result.next.val+carry}
            else result.next={val:carry, next: null}
        }
        result = result.next
    }
    let next = null, prev = null
    result=curr3
    while(result){
        next=result.next
        result.next=prev
        prev=result
        result=next
    }
    return prev
};
    var push = function(val, list){
        let newNode = {val, next:list}
        list = newNode
        return list
    }