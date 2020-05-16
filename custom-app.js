const fileSystem = require('fs');

for(let base = 0; base <= 10; base++){
    let table = '';
    for(let number = 0; number <= 10; number++){
        table += `${base} * ${number} = ${(base * number)} \n`;
    }
    fileSystem.writeFile(`./Custom-Tablas/tabla-${base}.txt`, table, (error) => {
        if(error){
            throw new Error(`Un error ha ocurrido ${error}`);
        }
        console.log(`La tabla del ${base} ha sido creada.`);
    });
}

