module.exports = {
    async mostrar(req, res){
        console.log(req.body);

        return res.json({});
    }
}