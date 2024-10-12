// llamar a express

const express = require("express") // va a llamar a express en node_modules
const router = require('./routes/index')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb+srv://danielamansill29:iCF6zPP5ieZ2l0HK@plataforma5.5kujg.mongodb.net/?retryWrites=true&w=majority&appName=Plataforma5'
const userModel = require('./models/User')
const albumModel = require('./models/album')
app.use(express.json())

app.use('/', router)

// función para llamar a nuestro servidor 5000 según pledu 


const connectMongo = async()=>{
    try{ 
        await mongoose.connect(url)
        app.listen(4000 , ()=> {
            console.log('Servidor escuchando en el puerto 4000')
        }) 

    }catch(error) { console.log(error)}//si falla 

    mongoose.connect(url)
};

connectMongo()

// mongodb+srv://danielamansill29:iCF6zPP5ieZ2l0HK@plataforma5.5kujg.mongodb.net/?retryWrites=true&w=majority&appName=Plataforma5