import React from 'react';
import styles from './Cards.module.css';
import { connect } from 'react-redux';
import Card from './Card.js';
import {SET_MEMORY, SET_SHOW_LENGTH } from '../../../../../../actions/index.js';
const fetch = require("node-fetch");

export function Cards (props){

    const[show,setShow]=React.useState([])
    const setShowLength=props.setShowLength
    const setMemory=props.setMemory
    React.useEffect( ()=>{
       async function ordeno(){
            var ord1
            if(props.search.length===0)
            {
            if (props.memory.length===0) {ord1= await fetch(`http://localhost:3001/pokemons/`).then(r=>r.json())
            for (var i=0;i<ord1.length;i++)
            {
                var typ1=''
                for (var j=0;j<ord1[i].types.length;j++)
                {
                    typ1=typ1+ord1[i].types[j].charAt(0).toUpperCase() + ord1[i].types[j].slice(1)+','
                    
                }
                ord1[i].typesstr=typ1.substring(0, typ1.length - 1)
            }
            setMemory(ord1)    
        }
            else if (props.memory.length>0) ord1=[...props.memory]
            }
            else if(props.search.length>0) 
            {
                console.log(props.search)
                ord1=[...props.search]
            }
            if(props.panelOrder.type==='alphabet') ord1.sort((a, b) => (a.name > b.name) ? 1 : -1)
            if(props.panelOrder.type==='force') ord1.sort((a, b) => (a.attack > b.attack) ? 1 : -1)
            if (props.panelFilter.type.length>0)
            {
                for ( i=0;i<ord1.length;i++)
                {
                   var stay=false
                    for ( j=0;j<ord1[i].types.length;j++)
                        {
                            for (var k=0;k<props.panelFilter.type.length;k++)
                            {
                                if(ord1[i].types[j]===props.panelFilter.type[k])
                                {
                                    stay=true
                                    k=props.panelFilter.type.length
                                    j=ord1[i].types.length
                                }
                            }
                        }
                    if(!stay){ord1[i]=null}

                }
            ord1=ord1.filter(el=>el!==null)
            }
            if(props.panelFilter.created===true)
            {
                ord1=ord1.filter(el=>el.id.charAt(0)==='P')
            }
            else if(props.panelFilter.created===false)
            {
                ord1=ord1.filter(el=>el.id.charAt(0)!=='P')
            }
            if (props.panelOrder.form==='descendent')
            {
                ord1=ord1.reverse()
            }
           
            console.log('ord:--------')
            console.log(ord1)
            setShowLength(ord1.length)
            i=0
            var cardsShowing=[]
            while (i<12)
            {
                let card1,card2
                if ((i+props.startIndex)<ord1.length)
                {
                    console.log('i:'+i)
                    console.log('start:'+props.startIndex)
                    console.log('length:'+ord1.length)
                    card1=<Card key={ord1[i+props.startIndex].id} type={ord1[i+props.startIndex].typesstr} name={ord1[i+props.startIndex].name} img={ord1[i+props.startIndex].image} id={ord1[i+props.startIndex].id}/>
                    if ((i+1+props.startIndex)<ord1.length)
                    {
                        card2=<Card key={ord1[i+1+props.startIndex].id} type={ord1[i+1+props.startIndex].typesstr} name={ord1[i+1+props.startIndex].name} img={ord1[i+1+props.startIndex].image} id={ord1[i+1+props.startIndex].id}/>
                    }
                    else if ((i+1+props.startIndex)>ord1.length)
                    {
                        card2=<Card key={'undefined'}/>
                    }
                    cardsShowing.push(<div className={styles.flexcontainer} key={i}>
                        
                        {[card1,card2]}
                    </div>)
                }
                i=i+2
            }
            setShow(cardsShowing)          
        }
        ordeno()        
    },[setMemory,setShowLength,props.panelOrder,props.panelFilter,props.startIndex,props.memory,props.search])

    
    return(
        
        <div className={styles.div}>
            {show}  
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      types: state.typeselected,
      panelOrder: state.panelOrder,
      panelFilter: state.panelFilter,
      previousordered: state.ordered,
      startIndex: state.startIndex,
      memory: state.memory,
      memorylength: state.showlength,
      search: state.search
      
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
  
      setShowLength: (payload) => dispatch(SET_SHOW_LENGTH(payload)),
      setMemory: (payload) => dispatch(SET_MEMORY(payload))
  
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cards);