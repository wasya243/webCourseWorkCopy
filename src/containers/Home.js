import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Container} from 'semantic-ui-react';

import DrugCard from '../components/DrugCard';
import {drugsActions} from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.fetchDrugs();
  }

  render() {
    const {listOfDrugs, isPending} = this.props;
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {isPending
            ? 'Загрузка...'
            : listOfDrugs.map((drug, i) => <DrugCard key={i} {...drug} />)}
        </Card.Group>
      </Container>

    )
  }
}

const mapStateToProps = ({drugs}) => {
  console.log(drugs);
  return ({
    isPending: drugs.isPending,
    listOfDrugs: drugs.items
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchDrugs: drugsActions.fetchDrugs(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);