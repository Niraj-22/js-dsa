class Queue {
  constructor() {
    this.que = [];
  }
  enqueue(element) {
    this.que.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Queue underflow ! cant perform dequeue";
    this.que.shift();
  }
  rear() {
    if (this.isEmpty()) return "Queue is empty ! ";
    return this.que[this.size() - 1];
  }
  front() {
    if (this.isEmpty()) return "Queue is empty ! ";
    return this.que[0];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.que.length;
  }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.dequeue();
console.log("🚀 ~ queue.size():", queue.size());
console.log("🚀 ~ queue.front():", queue.front());
console.log("🚀 ~ queue.rear():", queue.rear());
