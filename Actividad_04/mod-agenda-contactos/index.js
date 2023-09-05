import contactos from './contactos.js';

contactos.agregarContacto('Brian Lara', '123-456-7890', 'blara@email.com')
contactos.agregarContacto('Juan Gonzalez', '123-456-7899', 'jgonzalez@email.com')
contactos.agregarContacto('Roberto Carlos', '321-654-9978', 'jgonzalez@email.com')
contactos.agregarContacto('Ayrton Senna', '132-465-7998', 'jgonzalez@email.com')

contactos.listarContactos(contactos.agenda);

contactos.agregarContacto('Error No Funciona', '000000', 'email-invalido')

contactos.listarContactos(contactos.agenda)

contactos.buscarContacto(1)

contactos.eliminarContato(0)

contactos.listarContactos(contactos.agenda)

contactos.exportarCSV(contactos.agenda)