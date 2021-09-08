import React from 'react';
import styles from './FilterCreated.module.css';
import { connect } from 'react-redux';
import { CHECK_CREATED,UNCHECK_CREATED, CHECK_NOTCREATED, UNCHECK_NOTCREATED } from '../../../../../actions/index.js';


export function FilterCreated (props){
    function ExecuteCheck (name,check)
      {
        switch (name)
        {
          case 'created':
            if (check===true) return props.check_created();
            else if (check===false) return props.uncheck_created();
            break;
          case 'notcreated':
            if (check===true) return props.check_notcreated();
            else if (check===false) return props.uncheck_notcreated();
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
    return(
        <div className={styles.div}>
             <label className={styles.label}>Creado:</label>
             <label htmlFor="created">
               Creado
             </label>
             <input type="checkbox" name="created" value="created" onChange={handleCheckChange} checked={props.created}/> 
             
             <label htmlFor="notcreated">
               No Creado
             </label>
             <input type="checkbox" name="notcreated" value="notcreated" onChange={handleCheckChange} checked={props.notcreated}/> 
           
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
      created: state.created,
      notcreated:state.notcreated
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      check_created: () => dispatch(CHECK_CREATED()),
      uncheck_created: () => dispatch(UNCHECK_CREATED()),
      check_notcreated: () => dispatch(CHECK_NOTCREATED()),
      uncheck_notcreated: () => dispatch(UNCHECK_NOTCREATED())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FilterCreated);