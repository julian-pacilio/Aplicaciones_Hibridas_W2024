const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const telefonoRegEx = /([\+1\-\(]{4})?(\d{3}\)?[\.\-]?){2}(\d{4})/g

const validarTelefono = telefono => {

    if(telefono.match(telefonoRegEx)) {
       return true
    } else {
       return false;
    }
}

const validarEmail = email => {

    if(email.match(emailRegEx)) {
        return true
    } else {
       return false;
    }
}

export default {
    validarEmail,
    validarTelefono
}

