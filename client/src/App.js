import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import LandingPage from './components/Landing Page/LandingPage';
import Busqueda from './components/Busqueda/Busqueda';
import Createpokemon from './components/Createpokemon/Createpokemon';
import Onepokemon from './components/Onepokemon/Onepokemon.js';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <BrowserRouter>
          <Switch>
            <Route 
              exact path='/'
              component={LandingPage}        
            />      
            <Route 
              exact path='/busqueda'
              component={Busqueda}        
            />
            <Route 
              path='/add'
              component={Createpokemon}
            />     
            <Route
          exact path='/busqueda/:Id'
            render={({match}) => <Onepokemon id={match.params.Id}/>}
            />      
          </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
