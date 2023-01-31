
const mongoose  = require("mongoose");
mongoose.set('strictQuery', true);
const app = require("./app");
const port = 3000;
const urlMongoAtlas = "mongodb+srv://admin:admin123456@cluster0.dvtcrv3.mongodb.net/?"

//fichero para levantar el dservidor

mongoose.connect(urlMongoAtlas,(err,res)=>{
    try {
        if(err){
            throw err
        }else{
            console.log("La conexión a la BD es correcta");

            app.listen(port, ()=>{
                console.log(`El servidor del API REST está funcionando en http://localhost:${port}`);
            });
        }
        
    } catch (error) {
        console.log(error);
        
    }
});


