import React from 'react';

import DrugCard from './DrugCard';

const DrugsList = ({listOfDrugs, onAddToCart}) => {

  return (
    listOfDrugs.map((drug, i) => <DrugCard key={i} drug={drug} addToCart={() => onAddToCart(drug)}/>)
  );
};

export default DrugsList;
