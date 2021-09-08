import React from 'react';
import styles from './Options.module.css';
import { connect } from 'react-redux';
import Option from './Option.js';

const fetch = require("node-fetch");

export function Options (props){
  const [types,setTypes]= React.useState([])
  React.useEffect(()=>{
    fetch('http://localhost:3001/types/?table=consulta').then(r=>r.json()).then(typ=>{
      setTypes(typ)
    })
  },[])
    return(
        <div >
            
           <ul className={styles.ul1} > 
           <li className={styles.li1} style={{color:'transparent',backgroundColor:'transparent'}} key={'0'}>Seleccionar</li>
            {types.map((elemento)=>{
             return <li className={styles.li1} style={{display:props.show}} key={elemento.id.toString()}><Option name={elemento.name.charAt(0).toUpperCase() + elemento.name.slice(1)}  id={elemento.id}/></li>
            })}
           </ul>        
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      show: state.typebuttoncreatepokemon.state,
      colorletter: state.typebuttoncreatepokemon.color,
      
    };
  };

export default connect(mapStateToProps, null)(Options);