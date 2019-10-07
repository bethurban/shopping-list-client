import React, { Component } from 'react';

class ItemCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id
    }

    this.deleteItem = this.deleteItem.bind(this);
  };

  deleteItem = () => {
    fetch(`https://still-plateau-90264.herokuapp.com/items/${this.state.id}`, {
      method: 'DELETE',
      body: JSON.stringify(this.state.id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => console.log("Deleted"));
  }

  render() {
    return (
      <div>
        {this.props.name} - {this.props.amount} - {this.props.section}
        <button onClick={this.deleteItem}>Delete</button>
        <button>Edit item</button>
      </div>
    )
  };

};

export default ItemCard;
