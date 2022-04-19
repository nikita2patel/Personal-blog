import React,{useState} from 'react'
// import Calendar from 'react-calendar'
import './Malendar.css';
import { Button} from 'react-bootstrap';
// import {  toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { faArrowDown, faArrowUp, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from 'react-date-picker';





  const Malendar = () => {
    const [item,setitem] = useState(  new Date());
   const [ccc,setccc] = useState()
   const datahandel = () =>{
     
    //  toast('success')
  
   
   }
 
   
   

 
  return (
   <>
<div className='malendar'>
  <div  className='main-malendar'>
    <h1>Book your Filght</h1>
    <DatePicker onChange={ (item) =>setitem(item)} value={item}
    
    selectStart
    minDate={item}
    startDate={item}
    endDate={ccc}
    selected={item}
    
    />
   
   <div>
    <p> <FontAwesomeIcon icon={faArrowDown} /> </p>  <p> <FontAwesomeIcon icon={faArrowUp} /> </p> 
    </div>
    <DatePicker onChange={  (ccc) =>   setccc(ccc)} value={ccc} 
    
    selectStart
    minDate={ccc}
    startDate={ccc}
    endDate={ccc}
    selected={ccc}
/>
    
   
   

   <Popup trigger={<Button variant="secondary" onClick={datahandel}  > Go somewhere</Button>} position="bottom">
    <div>
      <h2 style={{ textAlign: 'center',color:"#03adfc" }} >Thank you</h2>
      <p style={{ textAlign: 'center',color:"black" }} >your Ticket is booked from  {item} to    {ccc} </p>
    
    </div>
  </Popup>
   </div>
   </div>


   </>
  )
}

export default Malendar