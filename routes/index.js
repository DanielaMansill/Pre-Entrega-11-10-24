const express = require('express')
const router = express.Router()
router.get("/" , (req, res)=>{
    console.log(req.body)
    console.log(req.params)

    res.status("200").send("'Hello World!'")
    
})


router.get("/users" , (req, res)=>{
    res.status("200").send("usuarios")
   
})

router.get("/users/:uid" , (req, res)=>{
    res.status("200").send("usuarios")
    const uid = req.params.uid
    const usuarioFlitrado = usuarios.filter((usuario) => usuario.uid === uid)

    console.log(req.params)
})
module.exports = router

