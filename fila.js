const Queue = require('bull');

// Inicializa fila
const minhaFila = new Queue('minhaFila', {
    redis: {
        host: "127.0.0.1",
        port: "6379",
        // password: 'root'
    },
    settings: { 
        removeOnComplete: true 
    }
});

// Define consumidor
minhaFila.process(__dirname + '/consumidor.js');

// Event listeners
//   caminho feliz [waiting, active, completed]
minhaFila.on('waiting', job => {
    console.log('Job recebido!');
    console.log(`${JSON.stringify(job)}`);
});

minhaFila.on('active', function(job, jobPromise){
    console.log(`Job começou`);
    console.log(`${JSON.stringify(job)}`);
    // A job has started. You can use `jobPromise.cancel()`` to abort it.
})

minhaFila.on('completed', function(job, result) {
    console.log(`${result}, job finalizado com sucesso`);
    console.log(`${JSON.stringify(job)}`);
    // remove job da fila
    //job.remove();
});

//   outros eventos
minhaFila.on('stalled', function(job){
    console.log(`Job travado`);
});
  
minhaFila.on('progress', function(job, progress){
    console.log(`Atualiza progresso`);
});

//   eventos de erro 
minhaFila.on('error', function(error){
    console.log(`Ocorreu um erro`);
    console.log(error);
});
  
minhaFila.on('failed', function(job, error){
    console.log(`Job falhou`);
    console.log(error);
    // retry
    //job.retry();
});

module.exports = minhaFila