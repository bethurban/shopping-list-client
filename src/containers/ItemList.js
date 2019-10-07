import React, { Component } from 'react';
import ItemCard from './ItemCard.js';

class ItemList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.getItems = this.getItems.bind(this);
  };

  getItems = () => {
    fetch('https://still-plateau-90264.herokuapp.com/items')
      .then(resp => resp.json())
      .then(json => {
        console.log("JSON: ", json)
        this.setState({
          items: json
        })
        // json.map(item =>  (
        //   <div class="item">
        //     <ItemCard name={item.name} amount={item.amount} section={item.section} />
        //   </div>
        // ))
      });
  };

  componentDidMount() {
    this.getItems()
  }

  componentDidUpdate() {
    this.getItems()
  }

  render() {
    return (
      <h2>List</h2>
    )
  };

};

export default ItemList;
