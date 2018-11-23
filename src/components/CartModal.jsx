import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import CartList from './CartList';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    const {cartSize, totalSum, items, removeFromCart} = this.props;

    return (
      <div>
        <p>Товаров: {cartSize}</p>
        <p>Общая сумма: {totalSum}</p>
        <Button color="danger" onClick={this.toggle}>Корзина</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Корзина</ModalHeader>
          <ModalBody>
            <CartList listOfDrugs={items} removeFromCart={removeFromCart}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Оформление покупки</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Продолжить покупки</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;