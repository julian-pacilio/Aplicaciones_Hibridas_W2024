import { listaDeTareas, agregarTarea, listarTareas, eliminarTarea } from './tareas.js';

agregarTarea("Aprender módulos en Node.js");
agregarTarea("Practicar con un proyecto");

listarTareas(listaDeTareas);

eliminarTarea(0);

listarTareas(listaDeTareas);




