class QueueService {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value) {
      this.queue.push(value);
      return this.queue;
    }
  
    dequeue() {
      if (this.queue.length === 0) {
        throw new Error('Queue is empty!');
      }
      this.queue.shift();
      return this.queue;
    }
  
    getQueue() {
      return this.queue;
    }
  }
  
  module.exports = QueueService;
  