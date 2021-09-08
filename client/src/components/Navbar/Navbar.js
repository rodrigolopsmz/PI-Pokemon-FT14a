import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export function Nav() {
  return (
    <div>
      <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to='/busqueda' className={styles.textoboton}>
              <span>Buscar Pokemon</span>
            </Link>
          </li>

          <li className={styles.li}>
            <Link to='/add' className={styles.textoboton}>
              <span>Agregar Pokemon</span>
            </Link>
          </li>
          
      </ul>

    </div>
  )
};

export default Nav;