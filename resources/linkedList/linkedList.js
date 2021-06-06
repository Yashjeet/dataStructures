module.exports = class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    newNode(value) {
        return {
            value,
            next: null
        }
    }

    add(value) {
        const node = this.newNode(value)
        if (this.getHead() === null) {
            this.head = node
        } else {
            this.getTail().next = node
        }
        this.tail = node;
        return node;
    }

    get(index) {
        let currNode = this.getHead();
        let postion = 0;
        if (index <= -1) {
            return false;
        }

        while (postion < index) {

            if (currNode.next === null) {
                return false;
            }

            currNode = currNode.next;
            postion++;
        }

        return currNode;

    }

    insert(index, value) {
        const currNode = this.get(index);
        const prevNode = this.get(index - 1);
        const node = this.newNode(value);

        if (currNode === false) {
            return false;
        }

        if (index === 0) {
            this.head = node
            this.head.next = currNode;
        } else {
            prevNode.next = node;
            node.next = prevNode;
        }

        return node;
    }

    remove(index) {
        const currNode = this.get(index);
        const prevNode = this.get(index - 1);
        if (currNode === false) {
            return false;
        }

        if (index === 0) {
            this.head = prevNode;
        }
        else if (currNode.next === null) {
            this.tail = prevNode;
            prevNode.next = null
        }
        else {
            prevNode.next = currNode.next;
        }

    }
}