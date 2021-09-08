import React from 'react';
import styles from './Createpokemon.module.css';
import { connect } from 'react-redux';
import background from "./images/Pokeball.png";
import Nav from '../Navbar/Navbar';
import FilterType from './FilterType.js';
import { ADD_MEMORY } from '../../actions/index.js';
const fetch = require("node-fetch");
export function Createpokemon (props){
  

    const [input, setInput] = React.useState({
      name: '',
      life: '0',
      attack: '0',
      defense: '0',
      speed: '0',
      height: '0',
      weight: '0',
      types:[]

    });

    const [errors, setErrors] = React.useState({});

    const handleInputChange = function(e) {
      console.log(props.types)
      var s=['name','life','attack','defense','speed','height','weight'].filter(el=>el===e.target.name)
      if (s.length>0)
      {
        setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });  }  
    }
  
    const handleClick=  async function (e){
      e.preventDefault();
      var err=validate(input)
      
      setErrors(err);
      if (Object.entries(err).length===0)
      {
        e.target.disabled=true
        var obj={...input}
        obj.types=props.types
        console.log(obj)
        var sol= await fetch('http://localhost:3001/pokemons/', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        
          if (sol.hasOwnProperty('msg')) 
          {
            alert(sol.msg)
            e.target.disabled=false
          }
          else if (sol.hasOwnProperty('name')) 
          {
            
             fetch(`http://localhost:3001/pokemons/?name=${obj.name.toLowerCase()}`).then(res => res.json()).then((t)=>{
            var typ1=''
            for (var j=0;j<t.types.length;j++)
            {
                typ1=typ1+t.types[j].charAt(0).toUpperCase() + t.types[j].slice(1)+','
                
            }
            t.typesstr=typ1.substring(0, typ1.length - 1)
            props.add(t)
            e.target.disabled=false
            alert('Se ha creado exitosamente!')
          })
          }
       
          
      }
      
    
    
    }
    

    return(
        <div className={styles.sizediv}  style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat' }}>
            <Nav/>
            <div className={styles.div1}>
           <button className={styles.button} onClick={handleClick} >Cargar</button>
           </div>
            <form >
          <div className={styles.div}>
            <label>Nombre:</label>
            <input type="text" name="name" value={input.name} onChange={handleInputChange} className={errors.name && styles.danger1} />
            {errors.name && (
            <p className={styles.danger}>{errors.name}</p>
            )}
          </div>

          <div className={styles.div}>
            <label>Vida:</label>
            <input type="text" name="life" value={input.life} onChange={handleInputChange} className={errors.life && styles.danger1}/>
            {errors.life && (
            <p className={styles.danger}>{errors.life}</p>
            )}
          </div>

          <div className={styles.div}>
            <label>Ataque:</label>
            <input type="text" name="attack" value={input.attack} onChange={handleInputChange} className={errors.attack && styles.danger1}/>
            {errors.attack && (
            <p className={styles.danger}>{errors.attack}</p>
            )}
          </div>

          <div className={styles.div}>
            <label>Defensa:</label>
            <input type="text" name="defense" value={input.defense} onChange={handleInputChange} className={errors.defense && styles.danger1}/>
            {errors.defense && (
            <p className={styles.danger}>{errors.defense}</p>
            )}
          </div >

          <div className={styles.div}>
            <label>Velocidad:</label>
            <input type="text" name="speed" value={input.speed} onChange={handleInputChange} className={errors.speed && styles.danger1}/>
            {errors.speed && (
            <p className={styles.danger}>{errors.speed}</p>
            )}
          </div>

          <div className={styles.div}>
            <label>Altura:</label>
            <input type="text" name="height" value={input.height} onChange={handleInputChange} className={errors.height && styles.danger1}/>
            {errors.height && (
            <p className={styles.danger}>{errors.height}</p>
            )}
          </div>

          <div className={styles.div}>
            <label>Peso:</label>
            <input type="text" name="weight" value={input.weight} onChange={handleInputChange} className={errors.weight && styles.danger1}/>
            {errors.weight && (
            <p className={styles.danger}>{errors.weight}</p>
            )}
          </div>

          
           <FilterType />
           
        </form>
            
        
            
        </div>
    )

}
const mapStateToProps = (state) => {
  return {
    types: state.typeselectedcreatepokemon,      
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    add: (obj) => dispatch(ADD_MEMORY(obj))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Createpokemon);

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Por favor completar el campo Nombre';
  } else if (!/^[A-Z]+$/i.test(input.name.replaceAll(' ', ''))) {
    errors.name = 'Nombre solo puede tener carácteres alfábeticos';
  }
  var prop=['attack','defense','life','height','weight','speed']
  var prop1=['ataque','defensa','vida','altura','peso','velocidad']
  prop.forEach((propiedad,index)=>{
    if (!input[propiedad]) {
      errors[propiedad] = 'Por favor completar el campo '+prop1[index];
    } else if (!/^[0-9]*$/.test(input[propiedad])) {
      errors[propiedad] = prop1[index].charAt(0).toUpperCase() +prop1[index].slice(1)+' solo puede ser un número entero';
    }

  })
  
  
  return errors;
}