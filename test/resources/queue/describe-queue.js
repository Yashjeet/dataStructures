const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const Queue = require('resources/queue/queue.js');

describe('queue', () => {
    const sandbox = sinon.createSandbox();
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });


    it('queue operation', () => {
        expect(queue.isEmpty()).to.be.true;
        queue.enqueue("Yashjeet")
        expect(queue.dequeue()).to.be.eql('Yashjeet');
        queue.enqueue("Yashjeet")
        queue.enqueue("Luthra")
        expect(queue.isEmpty()).to.be.false;
        expect(queue.dequeue()).to.be.eql('Yashjeet');
        expect(queue.dequeue()).to.be.eql('Luthra');
    });

    afterEach(async () => {
        sandbox.verifyAndRestore();
    });
});
