function getHello(req, res){
    res.status(200).send({
        msg:"hola mundo desde controllers"
    })
}

module.exports = {
    getHello
}