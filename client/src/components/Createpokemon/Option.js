import React from 'react';
import styles from './Option.module.css';
import { connect } from 'react-redux';
import {TYPE_SELECTED_CREATEPOKEMON} from '../../actions/index.js'

export function Option (props){
    const [fondo,setFondo]=React.useState('')
   const handleClick=  function (e){
     e.preventDefault();
     let f1=props.selected.filter(type=>type===props.id)
     if (f1.length===1) setFondo('')
     else if (f1.length===0) setFondo('rgba(177, 177, 10, 0.472)')  
     props.select(props.id)
    }
    
    return(
        <div >
            <button className={styles.button}  onClick={handleClick} style={{backgroundColor:fondo}}>{props.name}</button> 
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      selected: state.typeselectedcreatepokemon,      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      select: (name) => dispatch(TYPE_SELECTED_CREATEPOKEMON(name)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Option);