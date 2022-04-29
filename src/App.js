import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Siempre te observo</h1>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
