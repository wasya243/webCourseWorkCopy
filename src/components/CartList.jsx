import React from 'react';

import CartCard from './CartCard';

const CartList = ({listOfDrugs, removeFromCart}) => {

  const length = listOfDrugs.length;

  return (
    listOfDrugs.map((drug, i) => <CartCard
      key={i}
      drug={drug}
      removeFromCart={removeFromCart}
      divider={i < length - 1}
    />
    )
  );
};

export default CartList;