import React from 'react';

import CartCard from './CartCard';

const CartList = ({listOfDrugs, removeFromCart}) => {

  return (
    listOfDrugs.map((drug, i) => <CartCard key={i} drug={drug} removeFromCart={removeFromCart}/>)
  );
};

export default CartList;