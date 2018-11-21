import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    }
  }

  setIsOpened = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    const {isOpened} = this.state;
    const {totalSum} = this.props;

    return (
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={this.setIsOpened}/>
        <Collapse isOpen={isOpened} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <p>Общая сумма: {totalSum}</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Личный кабинет
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/sign-up">Регистрация</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/log-in">Авторизация</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/">Главная</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({cart}) => {
  return ({
    totalSum: cart.totalSum
  });
};

export default connect(mapStateToProps, null)(Header);