// consumidor com 'done' callback
module.exports = function (job, done) {
    //progresso
    job.progress(100);

    // sucesso 
    done(null, "Feito");

    // erro
    //done(new Error('Deu erro!'));

    // erro não tratado, Bull reage do msm jeito
    //throw new Error('Erro inesperado');
}