import React from 'react'
import './Home.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Fotter from './Fotter';


const Home = () => {
  return (

    <div className='Home'>

      <div className='main_home'>
        <Container fluid>
          <div className='item'>
          <h1>Your Choice here.....</h1>
          <Button variant="outline-secondary" >Shopping</Button>
          </div>
        </Container>
      </div>
      <div className='box'>
      <Container>
        <Row>
          <Col md={4}>
            
            <Card style={{ width: '18rem' }}>
            <div className='box2'>
              <Card.Img variant="top" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
              </div>
            </Card>
            
            </Col>
            <Col md={4}>
            <Card style={{ width: '18rem' }}>
            <div className='box2'>
              <Card.Img variant="top" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
              </div>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ width: '18rem' }}>
            <div className='box2'>
              <Card.Img variant="top" src="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="secondary"> Go somewhere</Button>
              </Card.Body>
              </div>
            </Card>
            </Col>
        </Row>
       
      </Container>
      <Fotter/>
    
    
    
    </div>
    </div>
    
  
    
  



  )
}

export default Home