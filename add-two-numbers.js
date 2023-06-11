/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = [];
    let i; // I want to use the value of i outside the block

    l1.reverse();
    l2.reverse();

    for (i = 0; l1.length < l2.length ? i < l2.length : i < l1.length; i++) {
        
        sum[i] = l1[i] + l2[i];
        

    }

    if(l1.length != l2.length) {
        sum = writeToArray(l1, l2, sum, i);
    }
    
    return sum;

};

function writeToArray(l1, l2, sum, i){
    
    /* If the lengths are not equal, we use the larger of the two 
        values to keep writing to the sum*/
    
    if(l1.length > l2.length){
        while(i < l1.length){
            sum[i] = l1[i];
            i++;
        } 
    }
    else {
        while(i < l2.length){
            sum[i] = l2[i];
            i++;
        }
    }

    return sum;

}


console.log(addTwoNumbers([2, 4, 3], [5, 6, 4, 5]));