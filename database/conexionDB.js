// Archivo de configuracion de la base de datos

// Importando las libreria para usar el conecto de mysql
const mysql = require('mysql');

// Importanto la utilidad promisify para convertir callback en async/await
const { promisify } = require('util');

// Creando el objeto de configuración para la base de datos
configuracion = {
    conexion: {
        connectionLimit: 10,
        host: 'siriuda.cmrja00exsvf.us-east-1.rds.amazonaws.com',
        user: 'Ian',
        password: 'Ian_110396',
        database: 'siriuda'
    }
}

// Creando la conexión 
const pool = mysql.createPool(configuracion.conexion);

pool.getConnection((err, connection) => {

    // Si ha ocurrido un error
    if (err) throw err;

    // Si hay error en la conexion
    if (!connection) {
        console.log('Ha ocurrido un error durante la conexión hacia la BD');
        return;
    }

    // Se lanza la conexion
    connection.release();
    console.log('Conexión con la BD establecida');
});

pool.query = promisify(pool.query);
pool.getConnection = promisify(pool.getConnection);

// Exportamos la configuracion de la base de datos que en esta caso esta guardado en la variable pool
module.exports = pool;