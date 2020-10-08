import React from 'react';
import './App.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from './components/Form/Form';

class App extends React.Component {

  addItem = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <ListWrapper />
        <Form submitFn={this.addItem}/>
      </div>
    )
  }
}

export default App;
