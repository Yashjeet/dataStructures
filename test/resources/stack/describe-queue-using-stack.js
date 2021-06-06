const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const Queue = require('resources/stack/queue-using-stack.js');

describe('queue using stack', () => {
    const sandbox = sinon.createSandbox();
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });


    it('queue using stack', () => {
        expect(queue.dequeue()).to.be.null;
        queue.enqueue('Yashjeet')
        expect(queue.dequeue()).to.be.eql('Yashjeet');
        queue.enqueue('Yashjeet')
        queue.enqueue('Luthra')
        expect(queue.dequeue()).to.be.eql('Yashjeet');
        expect(queue.dequeue()).to.be.eql('Luthra');
        queue.enqueue('Yashjeet')
        queue.enqueue('Luthra')
        queue.enqueue('Ram')
        expect(queue.dequeue()).to.be.eql('Yashjeet');
        expect(queue.dequeue()).to.be.eql('Luthra');
        expect(queue.dequeue()).to.be.eql('Ram');
    });


   

    afterEach(async () => {
        sandbox.verifyAndRestore();
    });
});
