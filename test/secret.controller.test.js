
const secret = require('../src/controllers/secret.controller');
const secretService = require('../src/services/sercret.service');
const expect = require('chai').expect;
const sinon = require("sinon");



describe('Secret Test Files Methods', () => {
    
    describe('Secrets Files Tests ', () => {

        
        let secretFilesTest =  {status: 200, ok: true, result: ["test1.csv", "test2.csv"]};
        let secretServiceTest = ["test1.csv", "test2.csv"];
                
        it('Controller Tests', async () => {
            sinon.stub(secretService, "findAll").returns(secretServiceTest);
            const mReq = {};
            const mRes =  {status: 200, ok: true, result: secretServiceTest};
            const mock = sinon.mock(mRes);
            secret.getList(mReq,mRes);
            expect(mRes.result.length).to.equal(secretFilesTest.result.length);
            expect(mRes.result).to.have.members(secretFilesTest.result);
            mock.verify();
        });
        
    });

    describe('Secrets Files Tests ', () => {

        let secretDownloadTest = [
            {
                "file": "test1.csv",
                "lines": [
                    {
                        "text": "cNOTKW",
                        "number": "9945850131",
                        "hex": "f46623f167cb2d4dca75947d80ee7415"
                    },
                    {
                        "text": "tDJOxkkvW",
                        "number": "873",
                        "hex": "d554ad5c6420f7083f5bd08ed0917cda"
                    }
                ]
            }
        ]
                
        it('Controller Tests', async () => {
            sinon.stub(secretService, "findOne").returns(secretDownloadTest);
            const mReq = {params:{file:"test1"}};
            const mRes =  {status: 200, ok: true, result: secretDownloadTest};
            const mock = sinon.mock(mRes);
            secret.getList(mReq,mRes);
            expect(mRes.result).to.have.members(secretDownloadTest);
            mock.verify();
        });
        
    });

});