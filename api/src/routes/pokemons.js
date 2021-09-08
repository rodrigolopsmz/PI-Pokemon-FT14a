var express = require('express');
const { Router } = require('express');
const fetch = require("node-fetch");
const { Pokemon, Type} = require('../db.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(express.json());
router.get('/',(req,res)=>{
    async function Pok(){
        var limit
        var offset
        if (req.query.offset==undefined && req.query.limit==undefined)
        {
            limit=40
            offset=0
        }
        else{
            limit=req.query.limit
            offset=req.query.offset
        }
        
        var result = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then(r => r.json())
        var result2= await Pokemon.findAll({attributes:['name','id','attack'], include: Type})
        var Primeros=result.results
        var respuesta=[]
        for (i=0;i<Primeros.length;i++)
        {
            let One={}
            
            One.name=Primeros[i].name
            let OneDetail= await fetch(Primeros[i].url).then(r => r.json())
            One.id=OneDetail.id.toString()
            One.image=OneDetail.sprites.front_default
            One.types=OneDetail.types.map(typ=>{return typ.type.name})
            OneDetail.stats.forEach(el=>{
                if(el.stat.name=="attack") One.attack=el.base_stat
            })
            
            respuesta.push(One)
        }
        
       var result3=result2.map(el=>{return {name:el.name,id:'P'+el.id.toString(),attack:el.attack,
       types:el.types.map(el1=>{return el1.name})}})
       respuesta=respuesta.concat(result3)
       res.json(respuesta)
    }
    async function Pokname(){
        
       
            var result= await Pokemon.findOne({ where: { name: req.query.name }, include: Type  })
            if (result==null){
                    fetch(`https://pokeapi.co/api/v2/pokemon/${req.query.name}`).then(r => r.json()).then((result2)=>{

                    let One={}
                    One.name= result2.name
                    One.id=result2.id.toString()
                    One.image=result2.sprites.front_default
                    One.types=result2.types.map(typ=>{return typ.type.name})
                    result2.stats.forEach(el=>{
                        if(el.stat.name=="attack") One.attack=el.base_stat
                        })
                    res.json(One)
                    }).catch((error)=>{res.status(400).json({msg: 'No existe el name ingresado'})})
                    
                
            }
            else {
                var result3= {name:result.name,id:'P'+result.id.toString(),attack:result.attack,
       types:result.types.map(el1=>{return el1.name})}
                res.json(result3)}
            
        
        
    }
    
    
    if (req.query.name==undefined) Pok()
    else if (req.query.name!= undefined) Pokname()
    
})

router.get('/:idPokemon',(req,res)=>{

    async function PokId(location){
        
        
            var result
            if (location=='DB') {
                result= await Pokemon.findOne({ where: { id: req.params.idPokemon.slice(1) }, include: Type })
                if (result==null) res.status(400).json({msg: 'No existe el ID ingresado en la base de datos'})
                else{
                    var Pokemonresult={
                        name:result.name,
                        id:'P'+result.id,
                        image:null,
                        height:result.height,
                        weight:result.weight,
                        life: result.life,
                        attack: result.attack,
                        defense: result.defense,
                        speed: result.speed,
                        types: result.types.map(typ=>{return typ.name})
                    }
                    res.json(Pokemonresult)
                }
            }
            else if(location=='API') {
                try{
                    result = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`).then(r => r.json()) 
                    var Pokemonresult={
                        name:result.name,
                        id:result.id,
                        image: result.sprites.front_default,
                        types: result.types.map(typ=>{return typ.type.name}),
                        height:result.height,
                        weight:result.weight,
                    }
                    result.stats.forEach(est=>{
                        switch(est.stat.name){
                            case "hp":
                                Pokemonresult.life=est.base_stat
                            case "attack":
                                Pokemonresult.attack=est.base_stat
                            case "defense":
                                Pokemonresult.defense=est.base_stat
                            case "speed":
                                Pokemonresult.speed=est.base_stat
                        }
                        
                    })
                    res.json(Pokemonresult)

                }catch (error){res.status(400).json({msg: 'No existe el ID ingresado en POKEAPI'})}}
        
    }

    if(req.params.idPokemon[0]=='P') PokId('DB')
    else PokId('API')
    
    
})

router.post('/',(req,res)=>{
    async function PokeCreate()
    {
       var result= await Pokemon.findOne({ where: { name: req.body.name.toLowerCase() } })
       if (result==null)
       {

        try{
            var result2 =await fetch(`https://pokeapi.co/api/v2/pokemon/${req.body.name.toLowerCase()}`).then(r => r.json())
            res.status(400).json({msg: 'Ya existe el Pokemon creado en POKEAPI'})
        }catch (error){
            var Create=await Pokemon.create({
                name: req.body.name.toLowerCase(),
                life: req.body.life,
                attack: req.body.attack,
                defense: req.body.defense,
                speed: req.body.speed,
                height: req.body.height,
                weight: req.body.weight,
                })
            Create.setTypes(req.body.types)        
            res.json(Create)
        }
        }
        else {res.status(400).json({msg: 'Ya existe el Pokemon creado en la base de datos'})}
    }
    PokeCreate()
    
    
})



module.exports = router;
