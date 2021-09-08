import React from 'react';
import Nav from '../Navbar/Navbar';
import Buscar from './subcomponents/Buscar/Buscar.js';
import Ordenar from './subcomponents/Ordenar/Ordenar.js';
import Filtrar from './subcomponents/Filtrar/Filtrar.js';
import Panel from './subcomponents/Panel/Panel.js';
import background from "./images/Pokeball.png";
import styles from './Busqueda.module.css';
import {SET_DEFAULT} from '../../actions/index.js'
import { connect } from 'react-redux';


export function Busqueda(props) {
  const setting=props.setDefault
  React.useEffect(()=>{
    setting()
  },[setting])

  return (
    <div className={styles.sizediv} style={{ backgroundImage: `url(${background})`,
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat' }}>
     <Nav/>
      
      <Buscar/>
      <Ordenar/>
      <Filtrar/>
      <Panel/>
      
      
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    state: state
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    setDefault: () => dispatch(SET_DEFAULT())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);
