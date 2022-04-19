import React,{useState} from 'react'
import { Button, Form, Col,  Row } from 'react-bootstrap';
import './Contact.css';
import Fotter from './Fotter';

const Contact = () => {
    const [data,setdata] = useState({
        email: '',
        password: '',
        name: '',
        last: '',
      


    })

    const handelsubmit = (event) =>{
        event.preventDefault();
        var item = data
        console.log("111",item)
        
        
    }
  return (
    <>
    <div className='contact'>
    <Form  >



   <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type='email'  placeholder='Enter your email'  value={data.email}    onChange={(e)=>setdata({...data,email:e.target.value})}  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password"  value={data.password}  onChange={(e)=>setdata({...data,password:e.target.value})}     />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Name"  value={data.name}  onChange={(e)=>setdata({...data,name:e.target.value})} />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      Last
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Last"  value={data.last}  onChange={(e)=>setdata({...data,last:e.target.value})} />
    </Col>
  </Form.Group> 
</Form> 
<Button variant='primary'  type='submit' onClick={handelsubmit}>submit</Button>
</div>
<Fotter/>
    </>
  )
}

export default Contact


// onChange={(e)=>setdata({...data,name:e.target.value})} 