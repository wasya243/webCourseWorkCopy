import React from 'react';

import CartCard from './CartCard';

const CartList = ({listOfDrugs, removeFromCart, addToCartByIncrement, removeFromCartByDecrement}) => {

  const length = listOfDrugs.length;

  return (
    listOfDrugs.map((drug, i) => <CartCard
        key={i}
        drug={drug}
        removeFromCart={removeFromCart}
        addToCartByIncrement={addToCartByIncrement}
        removeFromCartByDecrement={removeFromCartByDecrement}
        divider={i < length - 1}
      />
    )
  );
};

export default CartList;
