var addTwoNumbers = function(l1, l2) {
    let curr1 = l1, curr2 = l2, l3 = {val: 0, next: null},
    curr3 = l3
    
    while(curr1 || curr2){
        let newVal = curr3.val+(curr2 ? curr2.val : 0)+(curr1 ? curr1.val : 0)
        curr3.val = newVal%10
        if(curr1?.next || curr2?.next || newVal>=10){
         if(newVal>=10){
            curr3.next={val: 1, next:null}
        }else curr3.next={val: 0, next:null}   
        }
        if(curr1)
        curr1 = curr1.next
        if(curr2)
        curr2 = curr2.next
        curr3 = curr3.next
    }
    return l3
};