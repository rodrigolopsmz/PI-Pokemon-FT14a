import React from 'react';
import styles from './Filtrar.module.css';
import { connect } from 'react-redux';
import FilterType from './subcomponents/FilterType.js';
import FilterCreated from './subcomponents/FilterCreated';
import { FILTER_PANEL, SET_START_INDEX,ORDER_PANEL } from '../../../../actions/index.js';
export function Filtrar(props)
{
  const handleClickOrder= function (e){
    e.preventDefault();
    if (props.force===true)
    {
      if (props.ascendent===true)
      {
        props.order_panel({type:'force',form:'ascendent'})
      }
      else if(props.ascendent===false)
      {
        if (props.descendent===true)
        {
          props.order_panel({type:'force',form:'descendent'})
        }
        else if (props.descendent===false)
        {
          props.order_panel({type:'force',form:'ascendent'})
        }
      }
    }
    else if(props.force===false)
    {
      if(props.alphabet===true)
      {
        if (props.ascendent===true)
        {
          props.order_panel({type:'alphabet',form:'ascendent'})
        }
        else if(props.ascendent===false)
        {
          if (props.descendent===true)
          {
            props.order_panel({type:'alphabet',form:'descendent'})
          }
          else if (props.descendent===false)
          {
            props.order_panel({type:'alphabet',form:'ascendent'})
          }
        }
      }
      else if (props.alphabet===false)
      {
        props.order_panel({type:'default',form:null})
      }
    }
  }
  const handleClick= function (e){
      e.preventDefault();
      handleClickOrder(e)
      props.setIndex(0)
      
      if (props.types.length===0)
      {
          if (props.created===true)
          {
            props.filter_panel({type:[],created:true})
          }
          else if (props.created===false)
          {
            if (props.notcreated===true)
            {
              props.filter_panel({type:[],created:false})
            }
            else if( props.notcreated===false)
            {
              props.filter_panel({type:[],created:null})
            }
          }
      }
      else if(props.types.length>0)
      {
        if (props.created===true)
        {
          props.filter_panel({type:props.types,created:true})
        }
        else if (props.created===false)
        {
          if (props.notcreated===true)
          {
            props.filter_panel({type:props.types,created:false})
          }
          else if( props.notcreated===false)
          {
            props.filter_panel({type:props.types,created:null})
          }
        }
      }
      
    }
       return (<div className={styles.div}>
       <span className={styles.label}>Filtrar:</span>
       <br/>
          <div className={styles.flexcontainer}>
              <FilterType/>
              <FilterCreated/>
              <button className={styles.button} onClick={handleClick}>Ordenar y Filtrar</button> 
          </div>
            
     </div>)
}
const mapStateToProps = (state) => {
    return {
      types: state.typeselected,
      created: state.created,
      notcreated: state.notcreated,
      force: state.force,
      alphabet: state.alphabet,
      ascendent: state.ascendent,
      descendent: state.descendent,
      
      
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      
      filter_panel: (payload) => dispatch(FILTER_PANEL(payload)),
      order_panel: (payload) => dispatch(ORDER_PANEL(payload)),
      setIndex: (payload) => dispatch(SET_START_INDEX(payload)),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Filtrar);