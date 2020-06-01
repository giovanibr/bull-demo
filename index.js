// express
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// configura filas
const { setQueues, UI } = require('bull-board');
const minhaFila = require("./fila");
setQueues([minhaFila]);

// + endpoint bull-board
app.use("/bull-demo/admin/filas", UI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const options = {
    delay: 1000, // 10 seg in ms
    attempts: 5,
    backoff: { type: 'exponential', delay: 5000 } // fixed ou exponential
};

// configura endpoints
app.post('/bull-demo/novo-job', function (req, res) {
    console.log(new Date().toLocaleTimeString());

    // fila ok?
    if(!minhaFila.isReady){
        res.statusCode = 500;
        res.json("Fila fora do ar"); 
        return res;
    }

    const dadosJob = req.body;
    minhaFila.add(dadosJob, options);

    res.statusCode = 200;
    res.json(dadosJob.numero + " recebido"); 
    return res;
});

// start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});