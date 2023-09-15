const readline = require('readline');
const { crearTarea, listarTareas, eliminarTarea, completarTarea } = require('./tareas');

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
              crearTarea(titulo, descripcion);
              iniciarPrograma(); // llamo recursiva para continuar el programa
            });
          });
          break;
  
        case 'listar':
          listarTareas();
          iniciarPrograma();
          break;
  
        case 'eliminar':
          rl.question('Índice de la tarea a eliminar: ', (indice) => {
            eliminarTarea(indice);
            listarTareas();
            iniciarPrograma();
          });
          break;
  
        case 'completar':
          rl.question('Índice de la tarea a completar: ', (indice) => {
            completarTarea(indice);
            listarTareas();
            iniciarPrograma();
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
  // llamo a la función para iniciar el programa
  iniciarPrograma();
  