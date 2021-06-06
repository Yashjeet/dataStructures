// Queue is FIFO
// stack contain two methods enqueue and dequeue
// enqueue to push node the queue
// dequeue to remove node first node that is inserted

const Stack = require('resources/stack/stack.js');
module.exports = class Queue {

    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(value) {
        while (!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop())
            
        }
        this.s1.push(value)
        while (!this.s2.isEmpty()) {
            this.s1.push(this.s2.pop())
        }
    }

    dequeue() {
        const value = this.s1.pop();
        if (value) {
            return value
        }
        return null
    }

}