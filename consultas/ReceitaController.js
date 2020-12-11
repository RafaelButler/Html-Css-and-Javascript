const fetch = require('node-fetch');
const headers = require('../header');

module.exports = {
    async enviarDadosReceita(req, res){
        const {nome, cpfCnpj} = req.body;

    try {
        const resp = await fetch('https://api.plexi.com.br//api/maestro/receita/certidao-negativa', 
            { method: 'POST', 
              body: JSON.stringify({
                  nome: `${nome}`,
                  cpfCnpj: `${cpfCnpj}`
              }), 
              headers: headers 
            })
        const respostaJson = await resp.json();

        res.json(respostaJson);
    } catch (error) {
        res.status(401).send('Nao foi possivel fazer a consulta');
    }
    
    },

    async receberDadosReceita(req, res){

        try {
            const resposta = await fetch('https://app.plexi.com.br/api/maestro/result/d4c9340a-e890-4844-9da0-b6ad4d964ea1', { method: 'GET', headers: headers });
            const some = await resposta.json();
            res.json(some)
            console.log(some)
        } catch (error) {
            res.status(401).send('Nao foi possivel');
        }
    }
}