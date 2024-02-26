let MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};
MyCircularQueue.prototype.Enqueue = function (value) {
  if (this.size === this.queueSize) return false;
  this.queue.push(value);
  return true;
};
MyCircularQueue.prototype.Dequeue = function () {
  if (this.isEmpty()) return false;
  this.queue.shift();
  return true;
};
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.queue[0];
};
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.queueSize() - 1];
};

MyCircularQueue.prototype.queueSize = function () {
  return this.queue.length;
};
MyCircularQueue.prototype.isEmpty = function () {
  return this.queueSize() === 0;
};
MyCircularQueue.prototype.isFull = function () {
  return this.queueSize() === this.size;
};

const cirQueue = new MyCircularQueue(3);
console.log("🚀 ~ cirQueue.enqueue(3);:", cirQueue.Enqueue(3));
console.log("🚀 ~ cirQueue.enqueue(3);:", cirQueue.Enqueue(5));
console.log("🚀 ~ cirQueue.enqueue(3);:", cirQueue.Enqueue(7));
console.log("🚀 ~ cirQueue.dequeue(3);:", cirQueue.Dequeue());
console.log(cirQueue.Front());
console.log(cirQueue.Rear());
console.log(cirQueue.isEmpty());
console.log(cirQueue.isFull());
