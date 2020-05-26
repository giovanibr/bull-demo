// consumidor usando promisses
module.exports = function (job) {
    return new Promise(function(resolve, reject) {
        // sucesso 
        //resolve("Feito");

        // erro
        //reject(new Error('Deu erro!'));

        // erro não tratado, Bull reage do msm jeito
        throw new Error('Erro inesperado');
    });
}