import React from 'react';
import styles from './Buscar.module.css';
import { connect } from 'react-redux';
import { SET_START_INDEX,SET_SEARCH } from '../../../../../src/actions/index.js';
const fetch = require("node-fetch");

export function Buscar (props)
{
  const [input, setInput] = React.useState('');

  const handleInputChange = function(e) {
   
    setInput(e.target.value);   
  }
  const handleClick=  async function (e){
    e.preventDefault();
    if (input!=='')
    {
      var t= await fetch(`http://localhost:3001/pokemons/?name=${input.toLowerCase()}`).then(res => res.json())
      if (t.hasOwnProperty('msg')) 
      {
        alert(t.msg)
        props.setSearch([])
      }
      else if (t.hasOwnProperty('name'))
      {
        var typ1=''
        for (var j=0;j<t.types.length;j++)
          {
            typ1=typ1+t.types[j].charAt(0).toUpperCase() + t.types[j].slice(1)+','
          }
        t.typesstr=typ1.substring(0, typ1.length - 1)
        props.setSearch([t])
      }
    }
    else if(input==='') props.setSearch([])
    props.setIndex(0)
    
  }
    return (
        <div>
        <form className={styles.form}>
            <div>
              <label>Busca tu Pokemon:</label>
              <input type="text" onChange={handleInputChange} />
            </div>
            <button onClick={handleClick}>Cargar</button>
        </form>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {

    setIndex: (num) => dispatch(SET_START_INDEX(num)),
    setSearch: (obj) => dispatch(SET_SEARCH(obj))

  }
}

export default connect(null, mapDispatchToProps)(Buscar);