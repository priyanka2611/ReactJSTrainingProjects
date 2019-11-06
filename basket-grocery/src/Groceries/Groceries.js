
import React, { Component } from 'react';
import './Groceries.css';

class Groceries extends Component {
    


    render() {
        const fruitsItemsList = this.props.grocery.map((fruitsItem) => {
            return (
                
                <li onClick={this.props.selectItem.bind(this,fruitsItem)}>
                    {fruitsItem.name}
                </li>);
        });
        return (
            <div className = "Box">
                <h2>Grocery</h2>
                {fruitsItemsList}
            </div>
        );
    }

}

export default Groceries;
