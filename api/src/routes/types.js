var express = require('express');
const { Router } = require('express');
const fetch = require("node-fetch");
const { Type } = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(express.json());

router.get('/',(req,res)=>{
    async function type(){
        var result = await fetch('https://pokeapi.co/api/v2/type').then(r => r.json())
        var Primeros=result.results
        var respuesta=[]
        for (i=0;i<Primeros.length;i++)
        {
            let One={}
            One.name=Primeros[i].name
            let OneDetail= await fetch(Primeros[i].url).then(r => r.json())
            One.id=OneDetail.id            
            respuesta.push(One)
        }
        var cargando=[]
        for (i=0;i<respuesta.length;i++)
        {
            cargando.push(Type.create({
                name: respuesta[i].name,
                typeId: respuesta[i].id
                }))
        }
        Promise.all(cargando).then(res => {console.log("Types precargadas");});
        res.json(respuesta)
    }
    async function typetable(){
       var result= await Type.findAll()
       var result1= result.map(element=>{
           var obj={}
           obj.name=element.name
           obj.id=element.typeId
           return obj
       })
       res.json(result1)
    }
   if (req.query.table==undefined) type()
   else if (req.query.table=='consulta') typetable()
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
