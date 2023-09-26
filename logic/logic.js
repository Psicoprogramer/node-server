const readline = require('readline');
const { crearTarea, listarTareas, eliminarTarea, completarTarea } = require('../tareas');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function iniciarPrograma() {
    rl.question('¿Qué tarea deseas realizar? (crear/listar/eliminar/completar/salir): ', (respuesta) => {
      switch (respuesta) {
        case 'crear':
          rl.question('titulo: ', (titulo) => {
            rl.question('Descripción: ', (descripcion) => {
              crearTarea(titulo, descripcion)
                .then(() => {
                  console.log('✔');
                  iniciarPrograma(); // Llamo recursiva para continuar el programa
                })
                .catch(error => console.error(error));
            });
          });
          break;
  
        case 'listar':
          listarTareas();
          iniciarPrograma();
          break;
  
        case 'eliminar':
          listarTareas();
          rl.question('Índice de la tarea a eliminar: ', (indice) => {
            eliminarTarea(indice)
              .then(() => {
                console.log('✔');
                listarTareas();
                iniciarPrograma();
              })
              .catch(error => console.error(error));
          });
          break;
  
        case 'completar':
          listarTareas();
          rl.question('Índice de la tarea a completar: ', (indice) => {
            completarTarea(indice)
              .then(() => {
                console.log('✔');
                listarTareas();
                iniciarPrograma();
              })
              .catch(error => console.error(error));
          });
          break;
  
        case 'salir':
          rl.write('adios nos vemos pronto')
          rl.close(); 
          break;
  
        default:
          console.log('Opción no válida');
          iniciarPrograma();
          break;
      }
    });
  }
  

  module.exports = iniciarPrograma;