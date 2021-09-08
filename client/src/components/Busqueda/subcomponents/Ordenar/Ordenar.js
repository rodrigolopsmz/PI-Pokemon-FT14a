import React from 'react';
import styles from './Ordenar.module.css';
import { connect } from 'react-redux';
import { CHECK_FORCE,UNCHECK_FORCE,CHECK_ALPHABET,UNCHECK_ALPHABET } from '../../../../actions/index.js';
import { CHECK_ASCENDENT,UNCHECK_ASCENDENT,CHECK_DESCENDENT,UNCHECK_DESCENDENT } from '../../../../actions/index.js';


export function Ordenar(props)
{
  
    function ExecuteCheck (name,check)
      {
        switch (name)
        {
          case 'force':
            if (check===true) return props.check_force();
            else if (check===false) return props.uncheck_force();
            break;
          case 'alphabet':
            if (check===true) return props.check_alphabet();
            else if (check===false) return props.uncheck_alphabet();
            break;
          case 'ascendent':
            if (check===true) return props.check_ascendent();
            else if (check===false) return props.uncheck_ascendent();
            break;
          case 'descendent':
            if (check===true) return props.check_descendent();
            else if (check===false) return props.uncheck_descendent();
            break;
          default:
            return;
        }
      }
      const handleCheckChange = function(e) {
        if(e.target.checked)
        {
          ExecuteCheck(e.target.name,true)
        }   
        else if(!e.target.checked)
        {
          ExecuteCheck(e.target.name,false)
        }  
      }

      return (<div>
        <span  className={styles.label}>Ordenar:</span>
        <br/>
       <div className={styles.flexcontainer}>
            <div className={styles.div}>
            <label>Característica:</label>
            <label htmlFor="force">
              Fuerza
            </label>
              <input type="checkbox" name="force" value="force" onChange={handleCheckChange}  checked={props.force}/> 
            
            <label htmlFor="alphabet">
              Alfabeticamente
            </label>
              <input type="checkbox" name="alphabet" value="alphabet" onChange={handleCheckChange} checked={props.alphabet}/> 
            
            </div>

            <div className={styles.div}>
            <label>Estilo:</label>
            <label htmlFor="ascendent">
              Ascendente
            </label>
              <input type="checkbox" name="ascendent" value="ascendent" onChange={handleCheckChange} checked={props.ascendent}/> 
            
            <label htmlFor="descendent">
              Descendente
            </label>
              <input type="checkbox" name="descendent" value="descendent" onChange={handleCheckChange} checked={props.descendent}/> 
            
            </div> 
        </div>
      </div>)
}


const mapStateToProps = (state) => {
    return {
      force: state.force,
      alphabet: state.alphabet,
      ascendent: state.ascendent,
      descendent: state.descendent,      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      
      check_force: () => dispatch(CHECK_FORCE()),
      uncheck_force: () => dispatch(UNCHECK_FORCE()),
      check_alphabet: () => dispatch(CHECK_ALPHABET()),
      uncheck_alphabet: () => dispatch(UNCHECK_ALPHABET()),
  
      check_ascendent: () => dispatch(CHECK_ASCENDENT()),
      uncheck_ascendent: () => dispatch(UNCHECK_ASCENDENT()),
      check_descendent: () => dispatch(CHECK_DESCENDENT()),
      uncheck_descendent: () => dispatch(UNCHECK_DESCENDENT()),

      

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Ordenar);