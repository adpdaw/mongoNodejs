function getHello(req,res){
    res.send("Hola Mundo desde controllers");
}

//fichero opara cargar la sdiferentes funciones de nuestra aplicación

module.exports = {
    getHello,
}