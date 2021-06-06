// Stack is LIFO
// stack contain two methods push and pop
// push to push node at the top
// pop to remove top node

const Queue = require('resources/queue/queue.js')

module.exports = class Stack {

    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(value) {
        while(!this.q1.isEmpty()){
            this.q2.enqueue(this.q1.dequeue())
        }
        this.q1.enqueue(value)
        while(!this.q2.isEmpty()){
            this.q1.enqueue(this.q2.dequeue())
        }
    }

    pop() {
        const value = this.q1.dequeue()
        if (value) { 
            return value
        }
        return null
    }
}