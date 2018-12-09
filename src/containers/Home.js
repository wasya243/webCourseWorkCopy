import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Container} from 'semantic-ui-react';
import Loader from 'react-loader-spinner'

import DrugsList from '../components/DrugsList';
import {drugsActions, cartActions, categoryActions} from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.fetchDrugs();
    this.props.fetchCategories();
  }

  onAddToCart = (drug) => {
    this.props.addToCart(drug);
  };

  render() {
    const {listOfDrugs, isPending} = this.props;
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {isPending
            ? <Loader type="Circles" color="#00BFFF" height="100" width="100"/>
            : <DrugsList listOfDrugs={listOfDrugs} onAddToCart={this.onAddToCart}/>
          }
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({drugs, category}) => {
  return ({
    isPending: drugs.isPending,
    listOfDrugs: drugs.items,
    listOfCategories: category.items
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchDrugs: drugsActions.fetchDrugs(dispatch),
  fetchCategories: categoryActions.fetchCategories(dispatch),
  addToCart: cartActions.addToCart(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
