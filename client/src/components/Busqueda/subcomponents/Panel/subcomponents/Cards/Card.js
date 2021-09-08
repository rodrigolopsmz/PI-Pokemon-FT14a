import React from 'react';
import styles from './Card.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
export function Card (props){
    


    return(
        <div className={styles.div}>
            <Link to={`/busqueda/${props.id}`} className={styles.link}>
            <h1 className={styles.name}>Name: {props.name.charAt(0).toUpperCase() +props.name.slice(1)} </h1>
            </Link>
            <h1 className={styles.types} >Types: {props.type}</h1>
            <img className={styles.img} alt={'PokemonImg'} src={props.img}/>
        </div>
    )

}

export default connect(null, null)(Card);