'use strict'

let PANDING = 0;
let FULFILLED = 1;
let REJECTED = 2;

class MyPromise (){

  let state = PANDING;

  let value = null;

  let handlers = [];

  function fulfill(result) {
    state = FULFILLED;
    value = result;
  }

  function reject(error) {
    state = REJECTED;
    value = error;
  }

  function resolve(result) {
    try {
      let then = getThen(result);
      if(then){
        doResolve(then.bind(result), resolve, reject)
        return
      }
      fulfill(result);
    } catch (e) {
      reject(e);
    }
  }
}

class Queue {
  constructor(qSize){
  this.qSize = qSize;
  this.queue = [];
  this.head = null;
  this.tail = null;
  }

  isEmpty() {
    if (!this.head) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if ((this.qSize-1)== this.tail) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(argument) {
    if (this.head === null){
      this.queue.push(argument);
      this.head = 0;
      this.tail = 0;
      return true;
    } else if (this.isFull()) {
      return false;
    } else {
      this.tail += 1;
      this.queue.push(argument);
      return true;
    }

  }

  dequeue() {
    let result = this.queue.shift();
    this.head += 1;
    if (this.head>=this.qSize){
    this.head = null;
    }
    return result;
  }

}

let q = new Queue(3);
console.log(q.isEmpty());
console.log(q.isFull());
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
