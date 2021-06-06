const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const Stack = require('resources/stack/stack.js');

describe('stack push and pop', () => {
    const sandbox = sinon.createSandbox();
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });


    it('should return isEmpty true if the stack is empty', () => {
        expect(stack.isEmpty()).to.be.true;
    });


    it('should return `null` if the stack is empty', () => {
        expect(stack.pop()).to.equal(null);
        expect(stack.pop()).to.equal(null);
        expect(stack.pop()).to.equal(null);
    });

    it('should return the last value pushed onto the stack', () => {
        stack.push('turtle');
        stack.push('dog');
        stack.push('cat');
        expect(stack.pop()).to.equal('cat');
    });

    it('should remove the last element from the stack when popped', () => {
        stack.push('turtle');
        stack.push('dog');
        stack.push('cat');
        stack.pop();
        expect(stack.pop()).to.equal('dog');
    });

    it('should rereturn null when all of the nodes have been popped off the stack', () => {
        stack.push('turtle');
        stack.push('dog');
        stack.push('cat');
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.pop()).to.equal(null);
    });

    afterEach(async () => {
        sandbox.verifyAndRestore();
    });
});
