
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
    return new Promise((resolve, reject)=>{
        if (Array.isArray(tareas)) {
            tareas.forEach((tarea, index) => {
                resolve(console.log(`${index + 1}  
                titulo : ${tarea.titulo}\n
                description : ${tarea.description}\n                
                estatus:  [${tarea.status ? '✔' : 'X'}] `))
            });
        } else {
         reject(console.error("No se proporcionó una lista de tareas válida."));
        }
    })
  
}

function eliminarTarea(indice) {
    return new Promise((resolve, reject)=>{
            if (indice > tareas.length || indice < 1) {
                reject('El índice proporcionado no es válido');
                return;
            }
            tareas.splice(indice - 1, 1);
            resolve(console.log('Tarea eliminada correctamente'));
        }
    )
   
  }

function completarTarea(indice) {
    return new Promise((resolve, reject)=>{
        if (indice > tareas.length || indice < 1) {
            reject('El índice proporcionado no es válido');
            return;
        }
        tareas[indice - 1].status = true;
        resolve(console.log('Tarea completada correctamente'))
    })
}


module.exports = {tareas, crearTarea, listarTareas, eliminarTarea, completarTarea };
