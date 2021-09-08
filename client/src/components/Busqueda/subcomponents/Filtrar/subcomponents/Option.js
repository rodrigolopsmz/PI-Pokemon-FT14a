import React from 'react';
import styles from './Option.module.css';
import { connect } from 'react-redux';
import {TYPE_SELECTED} from '../../../../../actions/index.js'

export function Option (props){
    const [fondo,setFondo]=React.useState('')
    // React.useEffect(()=>{
    //   props.selected.forEach(element=>{
    //     if(element===props.name.toLowerCase())
    //     {
    //       setFondo('rgba(177, 177, 10, 0.472)')
    //     }
    //   })
    // })
   const handleClick=  function (e){
     e.preventDefault();
     let f1=props.selected.filter(type=>type===props.name.toLowerCase())
     if (f1.length===1) setFondo('')
     else if (f1.length===0) setFondo('rgba(177, 177, 10, 0.472)')  
     props.select(props.name.toLowerCase())
    }
    
    return(
        <div >
            <button className={styles.button}  onClick={handleClick} style={{backgroundColor:fondo}}>{props.name}</button> 
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      selected: state.typeselected,      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      select: (name) => dispatch(TYPE_SELECTED(name)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Option);