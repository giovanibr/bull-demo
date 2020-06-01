// consumidor com 'done' callback
module.exports = function (job, done) {
    console.log(new Date().toLocaleTimeString());
    //progresso
    job.progress(100);

    // sucesso 
    //done(null, "Feito");

    // erro
    done(new Error('Deu erro!'));

    // erro não tratado, Bull reage do msm jeito
    //throw new Error('Erro inesperado');
}