class ArrayService {
    constructor() {
      this.array = [10, 20, 30, 40, 50];
    }
  
    update(index, value) {
      if (index < 0 || index >= this.array.length) {
        throw new Error('Invalid index!');
      }
      this.array[index] = value;
      return this.array;
    }
  
    getArray() {
      return this.array;
    }
  }
  
  module.exports = ArrayService;
  