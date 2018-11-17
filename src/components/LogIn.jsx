import React, {Component} from 'react';
import {Button, FormGroup, Form, Label, Input} from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('log in');
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="enter password here"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </FormGroup>
                <Button disabled={!this.validateForm()} type="submit">Submit</Button>
            </Form>
        );
    }
}