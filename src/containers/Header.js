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
  NavLink,
  NavbarBrand
} from 'reactstrap';

import {cartActions, userActions, drugsActions} from '../actions';

import UserInfo from '../components/UserInfo';
import ModalExample from '../components/CartModal';
import Category from "../components/Category";

const loggedInMenu = (logoutHandler) => (
  <DropdownMenu right>
    <DropdownItem>
      <Link to="/orders">Заказы</Link>
    </DropdownItem>
    <DropdownItem>
      <Link to="/">Главная</Link>
    </DropdownItem>
    <DropdownItem onClick={() => logoutHandler()}>
      <Link to="/log-in">Выход</Link>
    </DropdownItem>
  </DropdownMenu>
);

const notLoggedInMenu = () => (
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
);

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

  removeFromCart = (drugToRemove) => {
    this.props.removeFromCart(drugToRemove)
  };

  addToCartByIncrement = (drugToAdd) => {
    this.props.addToCartByIncrement(drugToAdd);
  };

  removeFromCartByDecrement = (drugToRemove) => {
    this.props.removeFromCartByDecrement(drugToRemove);
  };

  fetchDrugsByCategory = (categoryId) => {
    this.props.fetchDrugsByCategory(categoryId);
  };

  render() {
    const {isOpened} = this.state;
    const {totalSum, items, logout, isLoggedIn, userInfo, categories} = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            {
              isLoggedIn
                ? <UserInfo userInfo={userInfo}/>
                : <span className="user-info">Неавторизованный пользователь</span>
            }
          </NavbarBrand>
          <NavbarToggler onClick={this.setIsOpened}/>
          <Collapse isOpen={isOpened} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <ModalExample
                    cartSize={items.length}
                    items={items}
                    totalSum={totalSum}
                    removeFromCart={this.removeFromCart}
                    addToCartByIncrement={this.addToCartByIncrement}
                    removeFromCartByDecrement={this.removeFromCartByDecrement}
                  />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Личный кабинет
                </DropdownToggle>
                {
                  isLoggedIn
                    ? loggedInMenu(() => logout(userInfo.email))
                    : notLoggedInMenu()
                }
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="menu">
          {
            categories && <Category categories={categories} fetchDrugsByCategory={this.fetchDrugsByCategory}/>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({cart, user, category}) => {
  return ({
    totalSum: cart.totalSum,
    items: cart.items,
    isLoggedIn: user.isLoggedIn,
    userInfo: user.userInfo,
    categories: category.items
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    removeFromCart: cartActions.removeFromCart(dispatch),
    removeFromCartByDecrement: cartActions.removeFromCartByDecrement(dispatch),
    addToCartByIncrement: cartActions.addToCartByIncrement(dispatch),
    logout: userActions.logOut(dispatch),
    fetchDrugsByCategory: drugsActions.fetchDrugsByCategory(dispatch)
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
