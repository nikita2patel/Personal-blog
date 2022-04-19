
import './App.css';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Malendar from './Component/Malendar';
import Erroe from './Component/Erroe';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {  BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import RRR from './Component/RRR';


function App() {
  return (
    <div className='App'>
    <  ToastContainer/>
    

<BrowserRouter>
<div className="Header">
<Link to="/" >Home    </Link>
<Link to="/Contact" >Contact</Link>
<Link to="/About">About</Link>
<Link to ="/Calendra">Calendar</Link>
<Link to ="/RRR">RRR</Link>
</div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="Contact" element={<Contact/>}/>
<Route path="About" element={<About/>}/>
<Route path="Calendra" element={<Malendar/>}/>
<Route path='RRR' element={<RRR/>}/>
<Route path='*' element={<Erroe/>}/>


</Routes>







</BrowserRouter>


    
    
    </div>
  );
}

export default App;
