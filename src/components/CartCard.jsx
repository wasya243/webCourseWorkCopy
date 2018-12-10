import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Image, Icon} from 'semantic-ui-react';


const CartCard = (props) => {
  // TODO: rename tempDrug
  const {drug: tempDrug, removeFromCart, removeFromCartByDecrement, addToCartByIncrement, divider} = props;
  const amountOfDrugs = tempDrug.amountOfDrugs;
  const drug = tempDrug.drug;

  return (
    <Container>
      <Row className={divider ? 'mb-2' : 'mb-0'}>
        <Col lg="2"><Image src={drug.logoUrl}/></Col>
        <Col lg="3">{drug.name}</Col>
        <Col lg="2">
          <div className="d-flex align-items-center">
            <button className="product-quantity-button" onClick={() => addToCartByIncrement(drug)}>+</button>
            <span className="p-2">{amountOfDrugs}</span>
            <button className="product-quantity-button" onClick={() => removeFromCartByDecrement(drug)}>-</button>
          </div>
        </Col>
        <Col lg="2" className="d-flex"><Icon name="rub"/>&nbsp;{drug.price}</Col>
        <Col lg="2" className="d-flex"><Icon name="rub"/>&nbsp;{amountOfDrugs * drug.price}</Col>
        <Col lg="1"><Button onClick={() => removeFromCart(drug)}>X</Button></Col>
      </Row>
    </Container>
  );
};

export default CartCard;
