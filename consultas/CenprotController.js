const fetch = require('node-fetch');
const headers = require('../header');



module.exports = {
    async enviarDadosCenprot(req, res){
        const {nome, cpfCnpj} = req.body;

    try {
        const resp = await fetch('https://api.plexi.com.br/api/maestro/cenprot/consulta-protesto', 
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

    async receberDadosCenprot(req, res){

        try {
            const resposta = await fetch('https://app.plexi.com.br/api/maestro/result/8f7c26e0-45ad-4e22-a909-ba7e69744614', { method: 'GET', headers: headers });
            const some = await resposta.data.json();
            res.json(some)
            console.log(some)
        } catch (error) {
            res.status(401).send('Nao foi possivel');
        }


    }
}