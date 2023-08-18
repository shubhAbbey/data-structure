var reverseList = function(head) {
    if(!head) return head
    if(!head.next) return head
    let curr = head, prev = null, next = null
    while(curr){
        next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    console.log(prev)
};


// loop breakout

// ------------- first iteration --------------
// prev is null


// next=curr.next -> [2,3,4,5,null]
// curr.next=prev -> [null]
// prev=curr      -> [1, null]
// curr=next      -> [2,3,4,5,null]

// ------------- second itr     ---------------
// prev is [1, null]


// next=curr.next -> [3,4,5,null]
// curr.next=prev -> [1, null]
// prev=curr      -> [2, 1, null]
// curr=next      -> [3,4,5,null]


// ------------- third itr     ---------------
// prev is [2, 1, null]


// next=curr.next -> [4,5,null]
// curr.next=prev -> [2, 1, null]
// prev=curr      -> [3, 2, 1, null]
// curr=next      -> [4,5,null]


// ------------- fourth itr     ---------------
// prev is [3, 2, 1, null]


// next=curr.next -> [5, null]
// curr.next=prev -> [3, 2, 1, null]
// prev=curr      -> [4, 3, 2, 1, null]
// curr=next      -> [5, null]


// ------------- fifth itr     ---------------
// prev is [4, 3, 2, 1, null]


// next=curr.next -> [null]
// curr.next=prev -> [4, 3, 2, 1, null]
// prev=curr      -> [5, 4, 3, 2, 1, null]
// curr=next      -> [null]


// prev contains the reversedList 5 -> 4 -> 3 -> 2 -> 1 -> null
// ------------- end --------------