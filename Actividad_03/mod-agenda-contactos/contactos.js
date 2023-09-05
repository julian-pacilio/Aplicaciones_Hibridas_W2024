import validaciones from "./validaciones.js";

let agenda = [];

const agregarContacto = (nombre, telefono, email) => {

    if (validaciones.validarTelefono(telefono) && validaciones.validarEmail(email)) {

        let contacto = {
            "nombre" : nombre,
            "telefono" : telefono,
            "email" : email
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

export default {
    agenda,
    agregarContacto,
    buscarContacto,
    eliminarContato,
    listarContactos
}