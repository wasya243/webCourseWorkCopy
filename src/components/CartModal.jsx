import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import CartList from './CartList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
        <div>
          <FontAwesomeIcon className="mr-2 pointer" icon="shopping-cart" onClick={this.toggle}/>
          <span className="mr-2">Товаров: <b>{cartSize}</b></span>
          <span>Общая сумма: <b>{totalSum}</b></span>
        </div>
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