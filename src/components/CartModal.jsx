import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Tooltip} from 'reactstrap';

import CartList from './CartList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      toolTip: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleToolTip = this.toggleToolTip.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleToolTip() {
    this.setState({
      toolTip: !this.state.toolTip
    });
  }

  render() {

    const {cartSize, totalSum, items, removeFromCart} = this.props;
    const roundedTotalSum = Number(totalSum).toFixed(2);

    return (
      <div>
        <div>
          <FontAwesomeIcon className="mr-2 pointer" icon="shopping-cart" onClick={this.toggleModal}/>
          <span className="mr-2">Товаров: <b>{cartSize}</b></span>
          <span>Общая сумма: <b>{roundedTotalSum}</b></span>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Корзина</ModalHeader>
          <ModalBody>
            <CartList listOfDrugs={items} removeFromCart={removeFromCart}/>
          </ModalBody>
          <ModalFooter>
            <Button id="TooltipExample" color="primary" onClick={this.toggleModal}>Оформление покупки</Button>{' '}
            <Tooltip placement="top-end" isOpen={this.state.toolTip} target="TooltipExample" toggle={this.toggleToolTip}>
              Только авторизированные пользователи могу совершать покупки
            </Tooltip>
            <Button color="secondary" onClick={this.toggleModal}>Продолжить покупки</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;