'use strict';

class Queue {

    constructor() {
        this.collection = [];
    }

    enqueue(element) {
        return this.collection.push(element);
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
    
}

module.exports = Queue;
