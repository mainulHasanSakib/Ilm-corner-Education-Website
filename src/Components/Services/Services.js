import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Services.css'
const Services = () => {
    return (
        <div>
            <Container className="my-5">
  <Row>
      <h2 className="text-warning my-5">Best Selling Courses</h2>
    <Col><Card >
  <Card.Img className="imgTop" variant="top" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVyYW4lMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Marriage Preparaton</Card.Title>
    <Card.Text>
    Course By: Shaiekh Imam <br />
    Enrolled: 11544
    </Card.Text>
  
  </Card.Body>
</Card></Col>
    <Col><Card >
  <Card.Img className="imgTop" variant="top" src="https://images.unsplash.com/photo-1585036156171-384164a8c675?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVyYW4lMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Be a Productive Muslim </Card.Title>
    <Card.Text>
    Course By: Shaiekh Kamruzzaman <br />
    Enrolled: 5440
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col><Card >
  <Card.Img className="imgTop" variant="top" src="https://images.unsplash.com/photo-1554230333-6fee16f4a12b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVyYW4lMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Islamic Time Management</Card.Title>
    <Card.Text>
    Course By: Shaiekh Imran <br />
    Enrolled: 2544
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col><Card >
  <Card.Img className="imgTop" variant="top" src="https://images.unsplash.com/photo-1587617425953-9075d28b8c46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cXVyYW4lMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Diploma In Islamic Lifestyle</Card.Title>
    <Card.Text>
    Course By: Shaiekh Tanzim <br />
    Enrolled: 5110
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  </Row>
</Container>
        </div>
    );
};

export default Services;