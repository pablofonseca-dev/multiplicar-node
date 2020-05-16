const fileSystem = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!(Number.isNaN(base) && Number.isNaN(limite))){
            console.log('============================='.green);
            console.log(`        Tabla del ${base}    `.green);
            console.log('============================='.green);
            let tabla = '';
            for(let number = 0; number <= limite; number++){
                tabla += `${base} * ${number} = ${(base * number)} \n`.yellow;
            }
            resolve(tabla);
        }else{
            reject(`Los parámetros deben ser numéricos.`);
            return; 
        }
    });
}

let crearArchivoTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        
        if(isNaN(base) || isNaN(limite)){
            reject(`Los parámetros deben ser numéricos.`);
            return; 
        }
    
        let data = '';
        for(let number = 1; number <= limite; number++){
            data += `${base} * ${number} = ${(base * number)} \n`;
        }

        fileSystem.writeFile(`./Tablas/tabla-del-${base}-al-${limite}.txt`, data, (error) => {
            if (error){
                reject(error);
                return; 
            }
            else{
                resolve(`El archivo tabla-del-${base}-al-${limite}.txt ha sido creado satisfactoriamente`.green);
            }
        });
    });
};

module.exports = {
    crearArchivoTabla, 
    listarTabla
}



