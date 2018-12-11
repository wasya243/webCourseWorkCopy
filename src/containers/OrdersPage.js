import React, {Component} from 'react';
import {connect} from 'react-redux';

import {orderActions} from '../actions';
import OrderCart from '../components/OrderCart';
import Loader from "react-loader-spinner";

class OrdersPage extends Component {

  componentDidMount() {
    this.props.getOrdersByUser(this.props.userId);
  }

  render() {
    const {isPending, orders} = this.props;

    return (
      <div>
        {
            isPending
            ? <Loader type="Circles" color="#00BFFF" height="100" width="100"/>
            : orders.map(order => <OrderCart order={order}/>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({user, order}) => ({
  userId: user.userInfo.id,
  orders: order.items,
  isPending: order.isPending
});

const mapDispatchToProps = (dispatch) => ({
  getOrdersByUser: orderActions.getOrdersByUser(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
