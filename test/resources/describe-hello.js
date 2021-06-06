const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const hello = require('resources/hello.js');

describe.only('hello', () => {
    const sandbox = sinon.createSandbox();
    beforeEach(async () => {
    });

    it('should create company', async () => {
        const response = hello.perform()
        console.log(response)
     
    });

    afterEach(async () => {
        sandbox.verifyAndRestore();
    });
});
