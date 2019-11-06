
import logo from './basket_image.jpg';
import './App.css';
import React, { Component } from 'react';
import Groceries from './Groceries/Groceries';
import Basket from './Basket/Basket';

class App extends Component {

  state = {
    fruitsItems: [
        { "id": 1, "name": "Apple" },
        { "id": 2, "name": "Banana" },
        { "id": 3, "name": "Orange" },
        { "id": 4, "name": "Kiwi" },
        { "id": 5, "name": "Melon" },
    ],
    basket:[]
}
  handleClick = () => {
    console.log("i was clicked");

  }
  showAll = () => {
    this.state.fruitsItems.map((fruitsItem) => <li>{fruitsItem.name}</li>);

  }
  deleteAll=()=>{
    const basketItem= [];
    this.setState({basket:basketItem})
  }
  purchased=()=>{

  }
  selectItem=(item)=>{
    let index = this.state.basket.findIndex((b)=>{return b.id===item.id});
    let count =0;
    let l1 =null;
    if(index == -1)
    {
    l1= [...this.state.basket, {...item,count:1}];
    this.setState({basket: l1})
    }
    else
    {
      const basketList = [...this.state.basket];
      const basketItem = {...basketList[index]};
      basketItem.count++;
      basketList[index] = basketItem;
      // l1= [...this.state.basket, count];
      this.setState({basket: basketList})
    } 
  }
  

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className ="imgFix" />
          <p>
            GROCERY APP
        </p>

        </header>
        <div>
          <div>
          <Groceries grocery={this.state.fruitsItems} selectItem={this.selectItem}/>
          </div>
          <div>
          <Basket basket={this.state.basket} selectItem={this.selectItem}/>
          </div>
        </div>
        <br></br>
        <div className="App-link">
          <a href="#" onClick={this.showAll} >
            All
        </a><br></br>
        <a href="#" onClick={this.selectItem} >
            Purchased
        </a>
          <br></br>
          <a href="#" onClick={this.deleteAll}>
            Clear
        </a>
        </div>
      </div>
    );
  }

}

export default App;
