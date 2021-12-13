/**
 * 155. Min Stack
 *
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 * initialize your data structure here.
 */
var MinStack = function () {
    this.memory = []
    this.min = []
}

/**
 * example
 * push(-2) // -2
 * push(0) // 0, -2
 * push(-3) // -3, 0, -2
 * push(-1) // -1, -3, 0, -2
 * push(-4) // -4, -1, -3, 0, -2
 * getMin() // -3
 * pop()
 * top() // 0
 * getMin() // -2
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.memory.push(val)
    if (val <= this.min[this.min.length - 1] || this.min.length === 0) {
        this.min.push(val)
    }
}

/**
 * -3, 0, -2
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let result = this.memory.pop()
    if (this.min[this.min.length - 1] === result) {
        this.min.pop()
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.memory[this.memory.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1]
}

let minStack = new MinStack() // null
minStack.push(2147483646) // null
minStack.push(2147483646) // null
minStack.push(2147483647) // null
console.log(minStack.top()) // 2147483647
minStack.pop() // null
console.log(minStack.getMin()) // 2147483646
minStack.pop() // null
console.log(minStack.getMin()) // 2147483646
minStack.pop() // null
minStack.push(2147483647) // null
console.log(minStack.top())
console.log(minStack.getMin()) // return -3
minStack.push(-2147483648)
console.log(minStack.top())
console.log(minStack.getMin()) // return -3
minStack.pop()
console.log(minStack.getMin()) // return -3

let minStack2 = new MinStack()
minStack2.push(0)
minStack2.push(1)
minStack2.push(0)
console.log(minStack2.getMin()) // return -3
minStack2.pop()
console.log(minStack2.top()) // return 0
console.log(minStack2.getMin()) // return -2
