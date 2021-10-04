import React from 'react';
import { Card } from 'react-bootstrap';

const Course = (props) => {
    const {title, img, rating, enroll,tutor }=props.course
    return (
       
        
        <div className="col-md-3 m-2 shadow-lg rounded">
            <Card style={{height: '500px'}} >
  <Card.Img style={{ height:'270px'}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>Course: {title}</Card.Title>
    <Card.Text>Rating:{rating}</Card.Text>
    <Card.Text> Enrolled by:{enroll}</Card.Text>
    <Card.Text>Course By:{tutor}</Card.Text>
    
    
  </Card.Body>
</Card>
        </div>
        
    );
    
};

export default Course;