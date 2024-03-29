import { Node } from './Node.js';

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {

    // 재귀로 구현을 해보자.
    const pivot = (index = this.values.length - 1) => {
      const parent = Math.floor((index - 1) / 2);
      if (parent < 0 || this.values[parent].priority < this.values[index].priority) return null;
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      pivot(parent);

      return this;
    };

    return pivot();
  }

  enqueue(priority, value) {
    const newNode = new Node(priority, value);

    this.values.push(newNode);
    this.bubbleUp();

    return this.values;
  }

  // 재귀로 구현해보자.
  bubbleDown() {
    const pivot = (index = 0) => {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallIndex = null;

      if (this.values[left]) {
        if (this.values[right]) {
          smallIndex = (this.values[left].priority < this.values[right].priority) ? left : right;
        }

        smallIndex = left;
      } else if (this.values[right]) {
        smallIndex = right;
      } else return null;

      if (this.values[smallIndex].priority < this.values[index].priority) {
        [this.values[smallIndex], this.values[index]] = [this.values[index], this.values[smallIndex]];
      }

      pivot(smallIndex);

      return this;
    };

    return pivot();
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    const result = this.values.pop();
    return result;
  }
}

export {PriorityQueue};
