const initialState = {
    force: false,
    alphabet: false,
    ascendent: false,
    descendent: false,
    created: false,
    notcreated: false,
    typebutton: {
        state: 'none',
        color: 'transparent'
    },
    typebuttoncreatepokemon: {
        state: 'none',
        color: 'transparent'
    },
    typeselectedcreatepokemon: [],
    typeselected: [],
    ordered:[],
    panelOrder: {type:'default',form:null},
    panelFilter:{type:[],created:null},
    startIndex:0,
    showlength:0,
    memory:[],
    search: []
};



const all = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_DEFAULT':
        return {
            ...initialState,
            showlength:state.showlength,
            memory: state.memory
        }
    case 'CHECK_FORCE':
        return {...state, 
            force: true,
            alphabet: false};

    case 'UNCHECK_FORCE':
        return {...state, 
            force:false};

    case 'CHECK_ALPHABET':
        return {...state, 
            force: false,
            alphabet: true};

    case 'UNCHECK_ALPHABET':
        return {...state, 
            alphabet:false};

    case 'CHECK_ASCENDENT':
        return {...state, 
            ascendent: true,
            descendent: false};

    case 'UNCHECK_ASCENDENT':
        return {...state, 
            ascendent:false};

    case 'CHECK_DESCENDENT':
        return {...state, 
            ascendent: false,
            descendent: true};

    case 'UNCHECK_DESCENDENT':
        return {...state, 
            descendent:false};
    
    case 'CHECK_CREATED':
        return {...state, 
            created: true,
            notcreated: false};

    case 'UNCHECK_CREATED':
        return {...state, 
            created:false};
    
    case 'CHECK_NOTCREATED':
        return {...state, 
            created: false,
            notcreated: true};

    case 'UNCHECK_NOTCREATED':
        return {...state, 
            notcreated:false};
    
    case 'FILTER_TYPE_CLICKED':
        if (state.typebutton.state==='none')
        {
            return {...state,
                typebutton: {
                    state: 'block',
                    color: 'black'
                }                
            }
            
        }
        else if (state.typebutton.state==='block')
        {
            return {...state,
                typebutton: {
                    state: 'none',
                    color: 'transparent'
                }                
            }
           
        }
        break;
    case 'FILTER_TYPE_CLICKED_CREATEPOKEMON':
        if (state.typebuttoncreatepokemon.state==='none')
        {
            return {...state,
                typebuttoncreatepokemon: {
                    state: 'block',
                    color: 'black'
                }                
            }
            
        }
        else if (state.typebuttoncreatepokemon.state==='block')
        {
            return {...state,
                typebuttoncreatepokemon: {
                    state: 'none',
                    color: 'transparent'
                }                
            }
           
        }
        break;
    case 'TYPE_SELECTED':
        var f=state.typeselected.filter(type => type!==action.payload)
        
        if (f.length===state.typeselected.length)
        {
            return {...state,typeselected: [...state.typeselected,action.payload]}
        } 
        else if(f.length<state.typeselected.length) 
        {
            return {...state,typeselected:f}
        }
        break;
    case 'TYPE_SELECTED_CREATEPOKEMON':
        var f1=state.typeselectedcreatepokemon.filter(type => type!==action.payload)
        
        if (f1.length===state.typeselectedcreatepokemon.length)
        {
            return {...state,typeselectedcreatepokemon: [...state.typeselectedcreatepokemon,action.payload]}
        } 
        else if(f1.length<state.typeselectedcreatepokemon.length) 
        {
            return {...state,typeselectedcreatepokemon:f1}
        }
        break;
    case 'ORDER_PANEL':
        return {
            ...state,
            panelOrder: {type:action.payload.type,form:action.payload.form}
        }
    case 'FILTER_PANEL':
        return {
            ...state,
            panelFilter:{type:action.payload.type,created:action.payload.created}
        }
    case 'ADD_ORDER':
        return {
            ...state,
            ordered: [...state.ordered,action.payload]
        }
    case 'SET_START_INDEX':
        return {...state, 
            startIndex:action.payload};

    case 'SET_SHOW_LENGTH':
        return {...state, 
            showlength:action.payload};
    case 'SET_MEMORY':
        return {
            ...state,
            memory:action.payload
        }
    case 'ADD_MEMORY':
        return {
            ...state,
            memory:[...state.memory,action.payload]
        }
    case 'SET_SEARCH':
        return {...state, 
            search: action.payload};    
    default:
      return state;

  }
}

export default all;