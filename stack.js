class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) return "Stack is empty! cant perform pop";
    else {
      return this.stack.pop();
    }
  }
  peek() {
    if (this.isEmpty()) return "Stack is empty! cant perform peek";
    else {
      return this.stack[this.size() - 1];
    }
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

const stk = new Stack();
stk.push(3);
stk.push(9);
stk.push(27);
console.log(stk.size());
console.log(stk.peek());
