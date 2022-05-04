import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Menu from './components/Menu';
import Redirect from './pages/Redirect';
import Pokemon from './pages/Pokemon';
import PokemonList from './pages/PokemonList';
import ProtectedUrl from './components/ProtectedUrl';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(false)


  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Routes>
          <Route element={<ProtectedUrl isUser={user} />}>
            <Route path='/blog' element={<h2>Este es el blog</h2>} />
            <Route path='/contact' element={<h2>Este es mi contacto</h2>} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/redirect' element={<Redirect />} />
          <Route path='/login' element={<Login handlerUser={setUser} />} />
          <Route path='/pokemons' element={<PokemonList />} />
          <Route path='/pokemons/:id' element={<Pokemon />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
