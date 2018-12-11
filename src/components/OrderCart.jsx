import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Image, Icon} from 'semantic-ui-react';


const OrderCart = (props) => {
  // { totalPrice: number, createdAt: Date
  // items: [ { drug: {name: string, manufacturer: string, price: string, logoUrl: string}, quantity: number } ] }
  // TODO: rework this, 'cause I don't have time to do this the right way
  // TODO: add styling
  const {order} = props;

  return (
    <Container>
      <Row>
        <Col md={3}><span>Создан</span></Col>
        <Col md={3}>{order.createdAt}</Col>
        <Col md={3}><span>Общая сумма</span></Col>
        <Col md={3}>{order.totalPrice}</Col>
      </Row>
      {
        order.items.map(item =>
          <Row>
            <Col md={2}><Image src={item.drug.logoUrl}/></Col>
            <Col md={3}>{item.drug.name}</Col>
            <Col md={2}><Icon name="rub"/>&nbsp;{item.drug.price}</Col>
            <Col md={2}>{item.quantity}</Col>
            <Col md={2}><Icon name="rub"/>&nbsp;{item.drug.price * item.quantity}</Col>
          </Row>
        )
      }
    </Container>
  );
};

export default OrderCart;
