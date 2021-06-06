const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const Stack = require('resources/queue/stack-using-two-queue.js');

describe('stack using two queue', () => {
    const sandbox = sinon.createSandbox();
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });


    it('stack operation', () => {
        stack.push("Yashjeet")
        expect(stack.pop()).to.be.eql("Yashjeet")
        stack.push("Yashjeet")
        stack.push("Luthra")
        expect(stack.pop()).to.be.eql("Luthra")
        stack.push("Ram")
        expect(stack.pop()).to.be.eql("Ram")
        expect(stack.pop()).to.be.eql("Yashjeet")

    });

    afterEach(async () => {
        sandbox.verifyAndRestore();
    });
});
