import React, { Component } from 'react';

class NewItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      amount: 0,
      section: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Item name: </label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
          <label>Number: </label>
          <input
            name="amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleChange} />
          <label>Section: </label>
          <input
            name="section"
            type="text"
            value={this.state.section}
            onChange={this.handleChange} />
          <button type="submit">Add item</button>
        </form>
      </div>
    );
  }

};

export default NewItem;
