const fs = require('fs');

const manipulando = {

  Criar(path, content){
    fs.open(`${path} ${content}`, 'w', (err) => {
      if (err) throw (err);
    })
  },

  Deletar(path, content){
    fs.unlink(`${path} ${content}`, (err) => {
      if (err) throw (err);
      console.log('Deletado com sucesso');
    })
  }
}

module.exports = manipulando
