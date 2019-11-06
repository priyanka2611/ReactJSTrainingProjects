
import React, { Component } from 'react';
import './Basket.css';

class Basket extends Component {

    render() {
         
        // if(this.props.basket != null)
        let basketList;
        if (this.props.basket != null && this.props.basket.length > 0)
          {
            basketList = this.props.basket.map((fruitsItem) => 
            <li>
            {fruitsItem.name}{fruitsItem.count}
            </li>
            );

          } 
        else
            basketList = <p>Your list is empty!</p>;

        return (
            <div className="BoxL">
                <h2>BASKETT</h2>
                
                <p onclick={this.strikeOut}>{basketList}</p>
            </div>
        );
    }

}

export default Basket;
