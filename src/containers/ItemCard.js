import React, { Component } from 'react';

class ItemCard extends Component {

  // constructor(props) {
  //   super(props)
  // };

  render() {
    return (
      <div>
        {this.props.name} - {this.props.amount} - {this.props.section}
      </div>
    )
  };

};

export default ItemCard;
