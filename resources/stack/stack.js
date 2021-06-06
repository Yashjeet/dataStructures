// Stack is LIFO
// stack contain two methods push and pop
// push to push node to the top
// pop to remove node from the top

module.exports = class Stack {
    constructor() {
        this.top = null
    }

    push(value) {
        const node = {
            value,
            next: this.top
        }
        this.top = node
    }

    pop(){
        if(this.top !=null){
            const value =  this.top.value;
            this.top = this.top.next;
            return value
        }
        return null
    }

    isEmpty(){
        return !this.top
    }
}