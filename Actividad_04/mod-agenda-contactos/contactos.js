import validaciones from "./validaciones.js";
import fs from 'node:fs';

let agenda = [];

const agregarContacto = (nombre, telefono, email) => {

    if (validaciones.validarTelefono(telefono) && validaciones.validarEmail(email)) {

        let contacto = {
            "nombre" : nombre,
            "telefono" : telefono,
            "email" : email,
        }

        agenda.push(contacto)

        console.log(`El contacto ${nombre}, ha sido agendado con éxito.`)
    } else {

        console.log(`Ha ocurrido un error al agendar el contacto '${nombre}'. Intenta nuevamente.`)
    }
}

const eliminarContato = indice => {
    agenda.splice(indice, 1)
    console.log(`El contato ha sido eliminado con éxito.`)
}

const buscarContacto = indice => {
    let contacto = agenda.find( () => agenda[indice])
    console.log(`Mostrando información de ${contacto.nombre}`)
    console.log(contacto)
}

const listarContactos = agenda => {
    console.log(`Mostrando agenda. Total de contactos agendados (${agenda.length})`)
    console.log(agenda)
}

const exportarCSV = agenda => {

    let filas = []
    let csvContenido;

    agenda.forEach(contacto => {
        let fila  = `${contacto.nombre}, ${contacto.telefono}, ${contacto.email}`
        filas.push(fila)
    });

    csvContenido = `Nombre, Teléfono, Email\n${filas.join('\n')}`;

    fs.writeFile(
         'agenda.csv',
         csvContenido,
        { encoding: "utf-8", flag: "w" },
        (err) => {
            if (err) {
            console.log("No se pudo exportar la agenda de contactos, inténtalo nuevamente.");
            } else {
            console.log("La agenda de contactos, ha sido exportada con éxito.");
            }
        }
     )
}

export default {
    agenda,
    agregarContacto,
    buscarContacto,
    eliminarContato,
    listarContactos,
    exportarCSV
}

// let agendaString = []

// agenda.forEach(contacto => {
//     contacto = `\n${contacto.nombre}, ${contacto.telefono}, ${contacto.email}`
//     console.log(contacto);
//     agendaString.push(contacto)
// });

// console.log(agendaString);

// fs.writeFile(
//      'agenda.csv',
//      `Nombre, Teléfono, Email ${agendaString}`,
//     { encoding: "utf-8", flag: "w" },
//     (err) => {
//         if (err) {
//         console.log("No se pudo escribir el archivo");
//         } else {
//         console.log("Escrito correctamente");
//         }
//     }
//  )