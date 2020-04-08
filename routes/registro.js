/**
 * @description: Archivo de peticiones en donde se obtiene la información de las tablas para realizar el registro,
 * lo cual son puras peticiones GET
 */

// Importando librerias
const express = require('express');
const pool = require('../database/conexionDB');

// Inicializando express para realizar peticiones
const app = express();

// Rutas

// Obtener los tipos
app.get('/tipo', async(req, res) => {

    // Consulta para obtener todos los estudios profesionales
    const consulta = 'select ID_TIPO, NOMBRE_TIPO from tipo;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los diferentes tipos de usuarios
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes tipos de usuarios',
        datos
    });
});


// Obtener los estudios profesionales
app.get('/EstudiosProfesionales', async(req, res) => {

    // Consulta para obtener todos los estudios profesionales
    const consulta = 'select ID_ESTUDIO,NOMBRE_ESTUDIO from estudios_profesionales;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los estudios profesionales
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes estudios profesionales',
        datos
    });
});

// Peticion para obtener las escuelas o facultades donde se imparten clases
app.get('/Escuelas', async(req, res) => {
    // Consulta para obtener todos las escuelas
    const consulta = 'select ID_ESCUELA, NOMBRE_ESCUELA from escuela;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los estudios profesionales
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes escuelas',
        datos
    });
})

// Peticion para obtener los grados maximos de estudios
app.get('/GradoEstudios', async(req, res) => {
    // Consulta para obtener todos los grados de estudios
    const consulta = 'select ID_GRADO, NOMBRE_ESTUDIO from grado_estudios;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los estudios profesionales
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes grados de estudios',
        datos
    });
})

// Peticion para obtener los cargos academicos
app.get('/CargoAcademico', async(req, res) => {
    // Consulta para obtener todos los cargos academicos
    const consulta = 'select ID_CARGO, NOMBRE_CARGO from cargo_academico;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los cargos academicos
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes cargos academicos',
        datos
    });
})

// Peticion para obtener los nombramientos
app.get('/Nombramiento', async(req, res) => {
    // Consulta para obtener todos los cargos academicos
    const consulta = 'select ID_NOMBRAMIENTO, NOMBRE_NOMBRAMIENTO from nombramiento;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los nombramientos
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes nombramientos',
        datos
    });
})

// Peticion para obtener los lugares donde imparten clases
app.get('/imparticion', async(req, res) => {
    // Consulta para obtener todos los cargos academicos
    const consulta = 'select ID_LUGAR, LUGAR from imparticion_clase;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los lugares donde se imparten clases
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes lugares',
        datos
    });
})

// Peticion para obtener los programas academicos
app.get('/ProgramaAcademico', async(req, res) => {
    // Consulta para obtener todos los programas académicos
    const consulta = 'select ID_PROGRAMA, NOMBRE_PROGRAMA from programa_academico;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los programas academicos
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes programas académicos',
        datos
    });
})

// Peticion para obtener los departamentos de adscripcion
app.get('/DepartamentoAdscripcion', async(req, res) => {
    // Consulta para obtener todos los programas académicos
    const consulta = 'select ID_DEPARTAMENTO, NOMBRE_DEPARTAMENTO from departamento_adscripcion;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos los siguientes departamentos de adscripcion
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron los siguientes departamentos de adscripcion',
        datos
    });
})

// Peticion para obtener las modalidades
app.get('/modalidad', async(req, res) => {
    // Consulta para obtener todos los programas académicos
    const consulta = 'select ID_MODALIDAD, NOMBRE_MODALIDAD from modalidad;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos las modalidades
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron las siguientes modalidades',
        datos
    });
})


// Peticion para obtener las secretarias
app.get('/secretarias', async(req, res) => {
    // Consulta para obtener todos los programas académicos
    const consulta = 'select ID_SECRETARIA,NOMBRE_SECRETARIA from secretarias;';

    // Obtenemos los datos, se devuelve un arreglo de objetos con los resultado, cada clave del objeto es la columna
    let datos = await pool.query(consulta);

    if (datos.length <= 0) {
        return res.status(404).json({
            estado: false,
            mensaje: 'No se encontraron resultados'
        });
    }

    // Regresamos las secretarias
    res.status(200).json({
        estado: true,
        mensaje: 'Se encontraron las siguientes secretarias',
        datos
    });
})

// Peticion para saber si un curp ya esta registrado
app.get('/verifica/:curp', async ( req, res ) => {

  //Obtenemos el parametro de la ruta
  let curp = req.params.curp;

  // Realizamos la consulta a la base de datos con el parametro
  let consulta = 'SELECT 1 FROM usuario WHERE curp = ?';

  // Obtenemos los datos
  let datos = await pool.query(consulta, [curp]);

  // Si la consulta devuelve un arreglo por lo menos con un elementom entonces el curp existe
  if( datos.length > 0 ){
    return res.status(404).json({
        estado: false,
        mensaje: 'El curp ya existe'
    });
  }

  res.status(200).json({
      estado: true,
      mensaje: 'El curp no esta registrado',
  });
});

// Peticion para saber si un correo ya existe
app.get('/verificaCorreo/:correo', async(req, res) => {
  //Obtenemos el parametro de la ruta
  let correo = req.params.correo;

  // Realizamos la consulta a la base de datos con el parametro
  let consulta = 'SELECT 1 FROM usuario WHERE correo = ?';

  // Obtenemos los datos
  let datos = await pool.query(consulta, [correo]);

  // Si la consulta devuelve un arreglo por lo menos con un elementom entonces el curp existe
  if( datos.length > 0 ){
    return res.status(404).json({
        estado: false,
        mensaje: 'El correo ya existe'
    });
  }

  res.status(200).json({
      estado: true,
      mensaje: 'El correo no esta registrado',
  });
})

// Peticion para obtener las asignaturas del area clinica
app.get("/AreaClinica", async(req, res ) => {

  // Realizamos la consulta a la base de datos para obtener las asignaturas de area clinica
  let consulta = 'select id_asignatura_clinica, nombre_asignatura_clinica from area_clinica;';

  // Obtenemos los datos
  let datos = await pool.query(consulta);

  // Si el arreglo de objetos es vacio entonces no hay resultado
  if( datos.length <= 0 ){
    return res.status(404).json({
        estado: false,
        mensaje: 'No se encontraron resultado'
    });
  }

  res.status(200).json({
      estado: true,
      mensaje: 'Se encontraron las siguientes asiganturas de area clinica',
      datos
  });
})

// Peticion para obtener las asignaturas de bases biomedicas
app.get("/BaseBiomedica", async(req, res ) => {

  // Realizamos la consulta a la base de datos para obtener las asignaturas de area clinica
  let consulta = 'select id_asignatura_biomedica, nombre_asig_biomedica from bases_biomedicas;';

  // Obtenemos los datos
  let datos = await pool.query(consulta);

  // Si el arreglo de objetos es vacio entonces no hay resultado
  if( datos.length <= 0 ){
    return res.status(404).json({
        estado: false,
        mensaje: 'No se encontraron resultados'
    });
  }

  res.status(200).json({
      estado: true,
      mensaje: 'Se encontraron las siguientes asiganturas de bases biomedicas',
      datos
  });
})

// Peticion para obtener las asignaturas de bases sociomedicas
app.get("/BaseSociomedica", async(req, res ) => {

  // Realizamos la consulta a la base de datos para obtener las asignaturas de area clinica
  let consulta = 'select id_asignatura_sociomedica, nombre_asig_sociomedica from bases_sociomedicas;';

  // Obtenemos los datos
  let datos = await pool.query(consulta);

  // Si el arreglo de objetos es vacio entonces no hay resultado
  if( datos.length <= 0 ){
    return res.status(404).json({
        estado: false,
        mensaje: 'No se encontraron resultados'
    });
  }

  res.status(200).json({
      estado: true,
      mensaje: 'Se encontraron las siguientes asiganturas de bases biomedicas',
      datos
  });
})
// Exportamos las rutas
module.exports = app;
