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
      });
  };

  componentDidMount() {
    this.getItems()
  }

  // componentDidUpdate(prevState) {
  //   debugger
  //   if (this.state.items !== prevState.items) {
  //     this.getItems()
  //   }
  //
  // }

  render() {

    const itemList = this.state.items.map(item =>  (
      <div className="item">
        <ItemCard key={item.id} id={item.id} name={item.name} amount={item.amount} section={item.section} />
      </div>
    ));

    return (
      <div className="ItemList">
        {itemList}
      </div>
    )
  };

};

export default ItemList;
