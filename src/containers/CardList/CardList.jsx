import React, { Component } from 'react';
import Card from '../../components/Card';
import './CardList';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cardList = this.props.cards.map((card, idx) => {
      return <Card key={idx} title={card.title} body={card.body} />;
    });
    // console.log(cardList)

    return (
      <div id="board">
      {cardList}
      <div id="Col1">Col1</div>
        <div id="Col2">Col2</div>
        <div id="Col3">Col3</div>
      </div>
    );
  }
}

export default CardList;
