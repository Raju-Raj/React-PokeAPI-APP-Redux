import './App.css';
import {Routes,Route,NavLink} from 'react-router-dom'
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';

function App() {
  return (
    <div className='App'>
      <nav>
        <nav>
        <NavLink to="/" className='title'>Pokemon</NavLink>
          <NavLink to="/">Search</NavLink>
        </nav>
      </nav>
      <Routes>
         <Route exact path="/" element={<PokemonList/>}/>
         <Route exact path="/pokemon/:pokemon" element={<Pokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;
