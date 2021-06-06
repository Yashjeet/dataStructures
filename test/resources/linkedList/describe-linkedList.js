const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const LinkedList = require('resources/linkedList/linkedList.js');

describe.only('linkedList', () => {
    const sandbox = sinon.createSandbox();
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });


    it('linkedList add operation', () => {
        linkedList.add('Yashjeet')
        expect(linkedList.get(0).value).to.be.eql('Yashjeet')
        linkedList.add('Yashjeet')
        linkedList.add('Luthra')
        linkedList.add('Ram')
        expect(linkedList.get(1).value).to.be.eql('Yashjeet')
    });

    it('linkedList insert operation', () => {
        linkedList.add('Yashjeet')
        linkedList.add('Luthra')
        linkedList.add('Ram')
        linkedList.insert(1,'Satish')
        expect(linkedList.get(1).value).to.be.eql('Satish')
    });

    it('linkedList remove operation', () => {
        linkedList.add('Yashjeet')
        linkedList.add('Luthra')
        linkedList.add('Ram')
        linkedList.remove(1)
        expect(linkedList.get(1).value).to.be.eql('Ram')
    });


    afterEach(async () => {
        sandbox.verifyAndRestore();
    });
});
