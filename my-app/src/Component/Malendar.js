import React,{useEffect, useState} from 'react'
// import Calendar from 'react-calendar'
import './Malendar.css';
import { Button} from 'react-bootstrap';
// import {  toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from 'react-date-picker';
import moment from 'moment';





  const Malendar = () => {

    const [time,settime] = useState()
    const [item,setitem] = useState(  new Date());
   const [ccc,setccc] = useState()
   const datahandel = () =>{
     
    //  toast('success')
  
   
   }
   
   
   useEffect(()=>{
     var ddd = moment(item)
     var zzz = moment(ccc)
     var fff = time
     fff= ddd.diff(zzz,'day');
     console.log('333',fff)
     settime(fff)
    
   

   },[item,ccc])

 
  return (
   <>
<div className='malendar'>
  <div  className='main-malendar'>
    <h1>Book your Filght  🗓  </h1>
    <DatePicker onChange={ (item) =>setitem(item)}
    selectStart
    minDate={item}
    value={item}
    startDate={item}
    endDate={ccc}
    selected={item}
  szxs/>
   
   <div>
    <p> <FontAwesomeIcon icon={faArrowDown}/></p><p><FontAwesomeIcon icon={faArrowUp}/></p> 
    </div>
    <DatePicker onChange={(ccc) =>setccc(ccc)}
    selectStart
    minDate={item}
    value={ccc} 
    startDate={ccc}
    selected={ccc}/> <br></br>
    
    <Popup trigger={<Button variant="secondary" onClick={datahandel}> Go somewhere</Button>} position="bottom">
    <div>
      <h2 style={{ textAlign: 'center',color:"#03adfc" }} >Thank you</h2>
      <p style={{ textAlign: 'center',color:"black" }} >your Ticket is booked from  {item} to   {ccc} </p>
    
    </div>
  </Popup>
   </div>
 
   <h1> time diff 🗓  {time}</h1>
   </div>


   </>
  )
}

export default Malendar