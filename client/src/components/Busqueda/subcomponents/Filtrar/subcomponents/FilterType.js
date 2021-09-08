import React from 'react';
import styles from './FilterType.module.css';
import Options from './Options.js';
import {FILTER_TYPE_CLICKED} from '../../../../../actions/index.js'
import { connect } from 'react-redux';

export function FilterType (props){
    return(
        <div className={styles.div}>
           <label className={styles.label}>Tipo:</label>
           <Options/>
           <button className={styles.button} onClick={(e)=>{
               e.preventDefault();
               props.typeclicked()}}>{String.fromCharCode(9660)}</button>           
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
      
      typeclicked: () => dispatch(FILTER_TYPE_CLICKED()),    

    }
  }

export default connect(null, mapDispatchToProps)(FilterType);