import React, { Component } from 'react';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
