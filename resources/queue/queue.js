// Queue is FIFO
// stack contain two methods enqueue and dequeue
// enqueue to push node the queue
// dequeue to remove node first node that is inserted

module.exports = class Queue {

    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        const node = {
            value,
            next: null
        }
        if (!this.front) {
            this.back = node
            this.front = this.back
        }
        else {
            this.back.next = node;
            this.back = node;
        }
    }

    dequeue() {
        const value = this.front.value
        if (value) {
            this.front = this.front.next;
            return value
        }
        return null
    }

    isEmpty() { 
        return !this.front
    }
}