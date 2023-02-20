
import './App.css';
import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Newrelease from './components/Newrelease';
import Reg from './components/Reg';
import Ourgames from './components/Ourgames';
import Subgames from './components/Subgames';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/about" element={<About/>}/>
          <Route path="/newrelease" element={<Newrelease/>}/>
          <Route path="/ourgames" element={<Ourgames/>}/>
          <Route path="/register" element={<Reg/>}/>
          <Route path="/submit" element={<Subgames/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
