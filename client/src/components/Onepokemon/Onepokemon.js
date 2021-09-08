import React from 'react';
import styles from './Onepokemon.module.css';
import { connect } from 'react-redux';
import background from "./images/One.png";
import Nav from '../Navbar/Navbar';
const fetch = require("node-fetch");
export function Onepokemon (props){
    const[pokeshow,setPokeshow]=React.useState({
        name:'',
        id:null,
        height:null,
        weight:null,
        life:null,
        attack:null,
        defense:null,
        speed:null,
        types:'',
        image: null

    })
    React.useEffect(()=>{
        async function pokid()
        {
            try
            {var t=await fetch(`http://localhost:3001/pokemons/${props.id}`).then(r=>r.json())
            var typ=''
            t.types.forEach(el=>{typ=typ+el.charAt(0).toUpperCase() +el.slice(1)+','})
            t.types=typ.substr(0,typ.length-1)
            setPokeshow(t)
            }catch(error){
                setPokeshow({
                    name:'No existe el pokemon buscado',
                    id:null,
                    height:null,
                    weight:null,
                    life:null,
                    attack:null,
                    defense:null,
                    speed:null,
                    types:'',
                    image: null
                })
            }      
        }
        pokid()
    },[props.id])
    

    return(
        <div className={styles.sizediv}  style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat' }}>
            <Nav/>
            <div className={styles.div1}>
            <h1 >Nombre: { pokeshow.name.charAt(0).toUpperCase() +pokeshow.name.slice(1)}</h1>
            </div>
            <div className={styles.div1}>
            <h2>Id: { pokeshow.id}</h2>
            </div>
            <div className={styles.div1}>
            <h2>Peso: { pokeshow.weight}</h2>
            </div>
            <div className={styles.div1}>
            <h2>Altura: { pokeshow.height}</h2>
            </div>
            <div className={styles.div1}>
            <h2>Defensa: { pokeshow.defense}</h2>
            </div>
            <div className={styles.div1}>
            <h2>Ataque: { pokeshow.attack}</h2>
            </div>
            <div className={styles.div1}>
            <h2>Velocidad: { pokeshow.speed}</h2>
            </div>
            <div className={styles.div1}>
            <h2>Tipos: { pokeshow.types}</h2>
            </div>
            <div className={styles.divimg}>
            <img alt={'PokemonImg'} src={pokeshow.image}/></div>
            
        </div>
    )

}

export default connect(null, null)(Onepokemon);