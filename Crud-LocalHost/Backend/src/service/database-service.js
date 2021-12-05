
//import
const base = require('../config/base.json');
const fs = require("fs");

const path = 'C:\\Users\\ASUS\\Desktop\\DEV\\CRUD\\Crud-LocalHost\\Backend\\src\\config\\base.json';

function listarTodos(){

    let data;

    try{
        data = fs.readFileSync(path, "utf-8");

    }catch( error ){
        console.log(error);
    }

    return data;
}

function Editar(){

}

function Apagar(){

}

function Escrever(){

}

module.exports = {
    listarTodos: listarTodos
};

