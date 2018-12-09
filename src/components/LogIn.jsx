import React, {Component} from 'react';
import {Button, FormGroup, Form, Label, Input, Container, FormFeedback} from 'reactstrap';

import validation from '../lib/validation';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validation: {
        email: {
          valid: null,
          className: ''
        },
        password: {
          valid: null,
          className: ''
        }
      }
    };
  }

  validateForm() {
    return validation.validateForm(this.state.validation);
  }

  handleChange = event => {
    const {validateInput} = validation;
    const {value, name} = event.target;
    const toSet = validateInput(value, validation.validators[ name ].validator);
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
    const {onLogin} = this.props;
    onLogin(this.state.email, this.state.password);
  };

  render() {
    const {
      email: {errorMessage: emailErrorMessage},
      password: {errorMessage: passwordErrorMessage}
    } = validation.validators;

    const {email, password} = this.state.validation;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">E-mail</Label>
            <Input
              valid={email.className === 'has-success'}
              invalid={email.className === 'has-danger'}
              type="email"
              name="email"
              placeholder="your@email.com"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <FormFeedback invalid>
              {emailErrorMessage}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Пароль</Label>
            <Input
              valid={password.className === 'has-success'}
              invalid={password.className === 'has-danger'}
              type="password"
              name="password"
              placeholder="Введите ваш пароль..."
              onChange={this.handleChange}
              value={this.state.password}
            />
            <FormFeedback invalid>
              {passwordErrorMessage}
            </FormFeedback>
          </FormGroup>
          <Button disabled={!this.validateForm()} type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
