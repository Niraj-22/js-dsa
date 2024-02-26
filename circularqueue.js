let myCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};
myCircularQueue.prototype.enqueue = function (value) {
  if (this.size === this.queueSize) return false;
  this.queue.push(value);
  return true;
};
myCircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return false;
  this.queue.shift();
  return true;
};
myCircularQueue.prototype.front = function () {
  if (this.isEmpty()) return "queue empty";
  return this.queue[0];
};
myCircularQueue.prototype.rear = function () {
  if (this.isEmpty()) return "queue empty";
  return this.queue[this.queueSize() - 1];
};

myCircularQueue.prototype.queueSize = function () {
  return this.queue.length;
};
myCircularQueue.prototype.isEmpty = function () {
  return this.queueSize() === 0;
};
myCircularQueue.prototype.isFull = function () {
  return this.queueSize() === this.size;
};

const cirQueue = new myCircularQueue(3);
console.log("🚀 ~ cirQueue.enqueue(3);:", cirQueue.enqueue(3));
console.log("🚀 ~ cirQueue.enqueue(3);:", cirQueue.enqueue(5));
console.log("🚀 ~ cirQueue.enqueue(3);:", cirQueue.enqueue(7));
console.log("🚀 ~ cirQueue.dequeue(3);:", cirQueue.dequeue());
console.log(cirQueue.front());
console.log(cirQueue.rear());
console.log(cirQueue.isEmpty());
console.log(cirQueue.isFull());
