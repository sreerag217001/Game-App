
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Home from './components/Home';
import About from './components/About';
import Newrelease from './components/Newrelease';
import Reg from './components/Reg';
import Ourgames from './components/Ourgames';
import Subgames from './components/Subgames';
import Deals from './components/Deals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        {
       window.location.pathname!=="/"? <Header/> : null
     
      }
      
        
        <Routes>
        <Route path="/" element={<Intro/>}/>
          <Route path="/Home" element={<Home/>}/>
        
        <Route path="/Home/about" element={<About/>}/>
          <Route path="/Home/newrelease" element={<Newrelease/>}/>
          <Route path="/Home/ourgames" element={<Ourgames/>}/>
          <Route path="/Home/register" element={<Reg/>}/>
          <Route path="/Home/submit" element={<Subgames/>}/>
          <Route path="/Home/deals" element={<Deals/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
