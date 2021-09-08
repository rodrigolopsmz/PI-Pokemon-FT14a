import React from 'react';
import styles from './Panel.module.css';
import { connect } from 'react-redux';
import Cards from './subcomponents/Cards/Cards.js';
import {SET_START_INDEX } from '../../../../actions/index.js';
export function Panel (props)
{
  const handleClick=  function (e){
    e.preventDefault();
    if (props.lengthcards!==0)
    {
      var possibleIndex=[]
      var s1
      var i=0
      while (i<props.lengthcards){
        possibleIndex.push(i)
        i=i+12
      }
      i=possibleIndex.findIndex((element) => element === props.startIndex)

      if (e.target.name==='next')
      { 
        s1=i+1
        if(possibleIndex[s1]===undefined) props.setIndex(0)
        else props.setIndex(possibleIndex[s1])
      }
      else if (e.target.name==='previous') 
      {
        s1=i-1
        if(possibleIndex[s1]===undefined) props.setIndex(possibleIndex[possibleIndex.length-1])
        else props.setIndex(possibleIndex[s1])
      }
    
    }

   }
    return(<div>
            
            <div className={styles.flexcontainer}>
            <button name={'previous'} className={`${styles.button}`}  onClick={handleClick} >{String.fromCharCode(60)}</button>
            <Cards />
            <button name={'next'} className={`  ${styles.button}`}  onClick={handleClick} >{String.fromCharCode(62)}</button>
          </div>
    </div>);


}
const mapStateToProps = (state) => {
  return {
    startIndex: state.startIndex,
    lengthcards: state.showlength,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    setIndex: (payload) => dispatch(SET_START_INDEX(payload))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);