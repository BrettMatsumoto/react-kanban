import React, { Component } from 'react';
import Card from '../../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const cardList = this.props.cards
      .map((card, idx) => {
        return <Card key={idx} title={card.title} body={card.body} />;
      });

    return (
      <>
        {cardList}
      </>
    );
  }
}

export default CardList;
