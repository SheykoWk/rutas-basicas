import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Menu from './components/Menu';
import Redirect from './pages/Redirect';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/redirect' element={<Redirect />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
