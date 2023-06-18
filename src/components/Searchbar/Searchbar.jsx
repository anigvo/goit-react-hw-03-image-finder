import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Header, Form, Button, Input, Icon } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue.trim().length === 0) {
      alert('Введіть значення для пошуку!');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Icon/>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
