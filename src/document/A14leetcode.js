import React from 'react'

const A14leetcode = () => {
    let q1 = () => {
        var addTwoNumbers = function (l1, l2) {
            let dummyHead = new ListNode(0);
            let current = dummyHead;
            let carry = 0;

            while (l1, l2){
                let x = l1 ? l1.val : 0;
                let y = l2 ? l2.val : 0;
                let sum = carry + x + y;

                carry = Math.floor(sum/10);
                current.next = new ListNode(sum % 10);
                current = current.next;

                if (l1) l1 = l1,next;
                if (l2) l2 = l2, next;

                if (carry > 0) {
                    current.next = new ListNode(carry);
                }
                return dummyHead.next;
            }
        }
    }
    return (<>
       {/* {q1()}    */}
        <h2><b><u>A14leetcode (need 100 eg.)</u></b></h2>
    </>)
};

export default A14leetcode;   