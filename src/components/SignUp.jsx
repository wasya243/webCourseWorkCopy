import React, {Component} from 'react';
import {Button, FormGroup, Form, Label, Input, Container, FormFeedback} from 'reactstrap';

import validation from '../lib/validation';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      originalPassword: "",
      confirmPassword: "",
      validation: {
        email: {
          valid: null,
          className: ""
        },
        firstName: {
          valid: null,
          className: ""
        },
        lastName: {
          valid: null,
          className: ""
        },
        address: {
          valid: null,
          className: ""
        },
        originalPassword: {
          valid: null,
          className: ""
        },
        confirmPassword: {
          valid: null,
          className: ""
        },
        phoneNumber: {
          valid: null,
          className: ""
        }
      }

    };
  }

  validateForm() {
    return validation.validateForm(this.state.validation)
      && this.state.originalPassword === this.state.confirmPassword;
  }

  handleChange = event => {
    const {validateInput} = validation;
    const {value, name} = event.target;
    const toSet = validateInput(
      value,
      validation.validators[
        (name === 'originalPassword' || name === 'confirmPassword')
          ? 'password' : name ].validator
    );
    this.setState({
      [ name ]: value,
      validation: {
        ...this.state.validation,
        [ name ]: toSet
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {onSignUp} = this.props;
    // assemble user info object to sign up with
    const userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.originalPassword,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    };
    onSignUp(userInfo);
  };

  render() {
    const {
      email: {errorMessage: emailErrorMessage},
      password: {errorMessage: passwordErrorMessage},
      firstName: {errorMessage: firstNameErrorMessage},
      lastName: {errorMessage: lastNameErrorMessage},
      address: {errorMessage: addressErrorMessage}
    } = validation.validators;

    const {
      email,
      originalPassword,
      confirmPassword,
      firstName,
      lastName,
      address
    } = this.state.validation;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Основные данные</legend>
            <FormGroup inline>
              <Label for="firstName">Имя</Label>
              <Input
                valid={firstName.className === 'has-success'}
                invalid={firstName.className === 'has-danger'}
                type="text"
                name="firstName"
                placeholder="Имя"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
              <FormFeedback invalid>
                {firstNameErrorMessage}
              </FormFeedback>
            </FormGroup>
            <FormGroup inline>
              <Label for="lastName">Фамилия</Label>
              <Input
                valid={lastName.className === 'has-success'}
                invalid={lastName.className === 'has-danger'}
                type="text"
                name="lastName"
                placeholder="Фамилия"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
              <FormFeedback invalid>
                {lastNameErrorMessage}
              </FormFeedback>
            </FormGroup>
            <FormGroup inline>
              <Label for="lastName">Мобильный телефон</Label>
              <Input
                valid={lastName.className === 'has-success'}
                invalid={lastName.className === 'has-danger'}
                type="text"
                name="phoneNumber"
                placeholder="Мобильный номер"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
              />
              <FormFeedback invalid>
                {lastNameErrorMessage}
              </FormFeedback>
            </FormGroup>
            <FormGroup inline>
              <Label for="email">E-Mail</Label>
              <Input
                valid={email.className === 'has-success'}
                invalid={email.className === 'has-danger'}
                type="email"
                name="email"
                placeholder="Для инофрмирования о заказе"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <FormFeedback invalid>
                {emailErrorMessage}
              </FormFeedback>
            </FormGroup>
          </fieldset>
          <fieldset>
            <legend>Ваш адрес</legend>
            <FormGroup inline>
              <Label for="address">Адрес доставки</Label>
              <Input
                valid={address.className === 'has-success'}
                invalid={address.className === 'has-danger'}
                type="text"
                name="address"
                placeholder="улица, дом, подьезд, кв."
                onChange={this.handleChange}
                value={this.state.address}
              />
              <FormFeedback invalid>
                {addressErrorMessage}
              </FormFeedback>
            </FormGroup>
          </fieldset>
          <fieldset>
            <legend>Ваш пароль</legend>
            <FormGroup>
              <Label for="originalPassword">Пароль</Label>
              <Input
                valid={originalPassword.className === 'has-success'}
                invalid={originalPassword.className === 'has-danger'}
                type="password"
                name="originalPassword"
                placeholder="Пароль"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <FormFeedback invalid>
                {passwordErrorMessage}
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Подтверджения пароля</Label>
              <Input
                valid={confirmPassword.className === 'has-success'}
                invalid={confirmPassword.className === 'has-danger'}
                type="password"
                name="confirmPassword"
                placeholder="Подтверджения пароля"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
              <FormFeedback invalid>
                {passwordErrorMessage}
              </FormFeedback>
            </FormGroup>
          </fieldset>
          <Button disabled={!this.validateForm()} type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
