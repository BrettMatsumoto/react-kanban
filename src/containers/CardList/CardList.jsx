import React, { Component } from 'react';
import Card from '../../components/Card';
import './CardList';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cardList1 = this.props.cards.map((card, idx) => {
      // console.log(card);
      if (card.status_id === 1) {
        return <Card key={idx} title={card.title} body={card.body} status={card.status_id} />;
      }
    });
    const cardList2 = this.props.cards.map((card, idx) => {
      if (card.status_id === 2) {
        return <Card key={idx} title={card.title} body={card.body} status={card.status_id} />;
      }
    });
    const cardList3 = this.props.cards.map((card, idx) => {
      if (card.status_id === 3) {
        return <Card key={idx} title={card.title} body={card.body} status={card.status_id} />;
      }
    });

    return (
      <div id="board">
        {/* {cardList} */}
        <div id="Col1">{cardList1}</div>
        <div id="Col2">{cardList2}</div>
        <div id="Col3">{cardList3}</div>
      </div>
    );
  }
}

export default CardList;
