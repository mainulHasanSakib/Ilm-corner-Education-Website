import Button from '@restart/ui/esm/Button';
import React from 'react';
import { ButtonGroup, Form } from 'react-bootstrap';

const Join = () => {
    return (
        <div>

            <div className="my-3">
                <h2 className="text-warning text-center py-3">Log In / Regester</h2>

<div className="container ">
<Form className="w-50 bg-success m-auto"  >
  <Form.Group className="mb-3 text-white " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className=" text-warning">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
             
            </div>
            
        </div>
    );
};

export default Join;