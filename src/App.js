import './App.css';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
      return (
        <div className="App">
          <NavbarComp/>
          <div className='NavBAR'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          </div>
        </div>
  );
}

export default App;