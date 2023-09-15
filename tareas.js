const tareas = [];

function crearTarea(titulo, description) {
    let tarea = {
        titulo: titulo,
        description: description,
        status: false
    };
    tareas.push(tarea); 
    console.log('Tarea creada');
}

function listarTareas() {
    if (Array.isArray(tareas)) {
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}  titulo : ${tarea.titulo} description : ${tarea.description}  estatus:  [${tarea.status ? '✔' : 'X'}] `);
        });
    } else {
        console.log("No se proporcionó una lista de tareas válida.");
    }
}

function eliminarTarea(indice) {
    tareas.splice(indice - 1, 1);
  }

  function completarTarea(indice) {
    tareas[indice - 1].status = true;
    console.log('tarea eliminada correctamente')
  }


  module.exports = {tareas, crearTarea, listarTareas, eliminarTarea, completarTarea };
