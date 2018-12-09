import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default class Category extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const {categories, fetchDrugsByCategory} = this.props;

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Меню
        </DropdownToggle>
        <DropdownMenu>
          {
            categories.map((category) =>
              <DropdownItem onClick={() => fetchDrugsByCategory(category._id)}>{category.name}</DropdownItem>
            )
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}
