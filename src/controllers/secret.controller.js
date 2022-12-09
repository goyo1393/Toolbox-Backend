const SecretService = require("../services/sercret.service");
const { getSuccessfullResponse } = require("../utils/utils");

const  getList = async ( request, response ) => {
    try {
        const resp = getSuccessfullResponse( await SecretService.findAll() );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

const  getOne = async ( request, response ) => {
    try {
        const { file } = request.params;
        const resp = getSuccessfullResponse( await SecretService.findOne( file ) );
        response.status(resp.status).send(resp);
    } catch (error) {
        response.status(500).send({ ok: false, error: error.code, message: error.message });
    }
}

module.exports = {
    getList,
    getOne
};