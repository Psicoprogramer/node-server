
const tareas = [];

function crearTarea(titulo, description) {

  return  new Promise((resolve)=>{
        let tarea = {
            titulo: titulo,
            description: description,
            status: false
        };
        tareas.push(tarea); 
        resolve(console.log('Tarea creada'));
    })
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
    if (indice > tareas.length || indice < 1) {
        console.log('El índice proporcionado no es válido');
        return;
    }
    tareas.splice(indice - 1, 1);
    console.log('Tarea eliminada correctamente');
  }

function completarTarea(indice) {
    if (indice > tareas.length || indice < 1) {
        console.log('El índice proporcionado no es válido');
        return;
    }
    tareas[indice - 1].status = true;
    console.log('Tarea completada correctamente');
  }


module.exports = {tareas, crearTarea, listarTareas, eliminarTarea, completarTarea };
