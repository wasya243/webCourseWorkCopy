import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Image} from 'semantic-ui-react';

const CartCard = (props) => {

  const {drug, removeFromCart, divider} = props;

  return (
    <Container>
      <Row className={divider ? "mb-2" : "mb-0"}>
        <Col md="3"><Image src={drug.url}/></Col>
        <Col md="5">{drug.name}</Col>
        <Col md="2">{drug.price}</Col>
        <Col md="2"><Button onClick={() => removeFromCart(drug)}>X</Button></Col>
      </Row>
    </Container>
  );
};

export default CartCard;