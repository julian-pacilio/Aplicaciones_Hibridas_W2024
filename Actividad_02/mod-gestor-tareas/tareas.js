let listaDeTareas = [];

const agregarTarea = tarea => {
 listaDeTareas.push(tarea);
};

const listarTareas = listaDeTareas => { 
 console.log(listaDeTareas);
};

const eliminarTarea = indice => {
 listaDeTareas.splice(indice, 1);
 
};

export default { 
    listaDeTareas,
    agregarTarea,
    listarTareas,
    eliminarTarea 
}