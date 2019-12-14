const readline = require('readline-sync');
const manipulando = require('./manipulate.js');


function start(){
    const informations = {};
    const name = askName();
    const extension = askExtension();
    informations.file = name + extension;
    informations.path = askPath();
    informations.generate = askPrefix();

    const manipular = manipulando[informations.generate];
    manipular(informations.path, informations.file);

    function askPrefix(){
        const prefix = ['Criar', 'Deletar', 'Alterar', 'Visualizar'];
      const choice = readline.keyInSelect(prefix, 'Escolha uma opção: ');
      return prefix[choice];
    }

    function askName(){
      return readline.question('Qual é o nome do arquivo que gostaria de criar: ');
    }

    function askExtension(){
      return readline.question('Qual a extensão do arquivo: ');
    }

    function askPath(){
      return readline.question('Qual o caminho do arquivo: ');
    }
    console.log(informations);
}


start()
