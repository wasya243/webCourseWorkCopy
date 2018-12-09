import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Image, Icon} from 'semantic-ui-react';


const CartCard = (props) => {

  const {drug, removeFromCart, divider} = props;

  return (
    <Container>
      <Row className={divider ? 'mb-2' : 'mb-0'}>
        <Col md="3"><Image src={drug.logoUrl}/></Col>
        <Col md="5">{drug.name}</Col>
        <Col md="2" className="d-flex"><Icon name="rub"/>&nbsp;{drug.price}</Col>
        <Col md="2"><Button onClick={() => removeFromCart(drug)}>X</Button></Col>
      </Row>
    </Container>
  );
};

export default CartCard;
