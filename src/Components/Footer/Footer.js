import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container fluid>
  <Row className="text-center bg-dark text-white">
    <Col className="py-5">Developed By: Mainul Hasan Sakib <br />
    @2021-22
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;