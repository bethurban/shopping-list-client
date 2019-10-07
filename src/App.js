import React from 'react';
import './App.css';
import NewItem from './containers/NewItem.js';
import ItemList from './containers/ItemList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stop and Shop Shopping List</h1>
      </header>

      <div className="form">
        <NewItem />
      </div>

      <div className="ItemList">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
