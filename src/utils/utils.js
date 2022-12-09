exports.getSuccessfullResponse = ( data, status = 200 ) => {
    return {
        status: status,
        ok: true,
        result: data
    };
}

exports.getNotFoundResponse = ( message = 'Request not Found' ) => {
    return {
        result: [],
        code: 404,
        message
    };
}

exports.config = {
    headers : { authorization : "Bearer aSuperSecretKey" }    
  }

exports.url = {
    secrets: 'https://echo-serv.tbxnet.com/v1/secret/files',
    downloadSecrets: 'https://echo-serv.tbxnet.com/v1/secret/file'
}

exports.options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'CSV File',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };