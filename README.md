Demonstração de uso da biblioteca [Bull](https://github.com/OptimalBits/bull).

Para executar:

```console
npm install
node index.js
```

A aplicação recebe um json no endpoint **/bull-demo/novo-job** cria uma tarefa e coloca na fila.

A fila é criada e configurada em **fila.js**.

O consumidor é criado e configurado em **consumidor.js** ou **consumidor-promisse.js**.

ps: É necessário ter uma instância de Redis rodando local.