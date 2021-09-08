import React from 'react';
import { Link } from 'react-router-dom';
import background from "./images/45634.png";
import title from "./images/titlePokemon.png";
import styles from './LandingPage.module.css';


export function LandingPage() {
  return (
    <div className={styles.sizediv} style={{ backgroundImage: `url(${background})`,
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat' }}>
      
     <div className={styles.div1}> <img  className={styles.title} src={title} alt='Title Pokemon img'/></div>
     
     <div className={styles.div1}/>
     <div className={styles.div1}>
          <button className={styles.boton} >
            <Link to='/busqueda' className={styles.textoboton}>
                <span>Iniciar!</span>
            </Link>
          </button>
     </div>
     
      
    </div>
  )
};

export default LandingPage;