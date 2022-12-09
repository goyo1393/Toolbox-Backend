const { options, config, url } = require('../utils/utils');
const axios = require('axios');
const arrayToCsv = require('arrays-to-csv');

const findAll = async () => {;
    let data = await axios.get(url.secrets, config)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        throw new Error (error.message);
    });

    return data;
}

const findOne = async ( file ) => {

        let data = await axios.get(`${url.downloadSecrets}/${file}`, config)
        .then((response) => {
            let first_array =  response.data.split('\n');
            let second_array = [];
            first_array.forEach((element, index) => {
                if(index != 0) {
                    let value = element.split(',');
                    if(value.length === 4){
                        if(value[3].length === 32){
                            second_array.push(element.split(','));
                        }
                    }
                }
            });

            const file_name = second_array[0][0];
            
            const lines  = second_array.map( (item) => {
                   return  {
                    text: item[1],
                    number: item[2],
                    hex: item[3]
                   }
            });

            const final_array = [
                {
                    file: file_name,
                    lines: lines
                }
            ]

            if(lines.length === 0) {
                return {
                    message: 'Information not found or not apply in conditions',
                }
            }

            const csvGenerator = new arrayToCsv(lines, { delimiter: ',' });
            
            csvGenerator.saveFile(`./csv/${file_name}`);
            ' ./csv/data.csv'
            return final_array;
        })
        .catch((error) => {
            throw new Error (error.message);
        });

        return data;
}

module.exports = {
    findAll,
    findOne
}