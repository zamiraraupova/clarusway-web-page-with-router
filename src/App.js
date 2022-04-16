import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Logo from './pages/Logo';
import Html from './pages/Html';
import Css from './pages/Css';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/> 
      
        <Route path='/about' element ={<About/>}/>

        <Route path='/github' element ={<Services/>}/>

        <Route path='/login'element ={<Html/>}/>

        <Route path='/login'element ={<Css/>}/>

        <Route path='/login'element ={<Logo/>}/>
       

      </Routes>

      <Card/>

      <Footer/>
      
    </div>
  );
}

export default App;
