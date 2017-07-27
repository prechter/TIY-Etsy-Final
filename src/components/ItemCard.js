import React, { Component } from 'react';
import '../styles/ItemCard.css'

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ItemCard">
        <div className="stuffff">
          <img className="cardImage" src={this.props.mainImage}></img>
        </div>
        <div className="titlePriceRow">
          <div className="cardTitle">{this.props.title}</div>
            <div className="cardSellerPrice">
              <div className="seller">{this.props.loginName}</div>
              <div className="price">{this.props.price}</div>
            </div>
        </div>
      </div>
    );
  }
}
