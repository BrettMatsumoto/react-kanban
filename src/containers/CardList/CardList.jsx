import React, { Component } from 'react';
import Card from '../../components/Card';
import './CardList.css';

const status1Cards = {
  border: '1px solid black',
  backgroundColor: 'red',
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '450px',
  marginLeft: '450px'
}

const status2Cards = {
  border: '1px solid black',
  backgroundColor: 'yellow',
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '450px',
  marginLeft: '450px'
}

const status3Cards = {
  border: '1px solid black',
  backgroundColor: 'green',
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '450px',
  marginLeft: '450px'
}

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const cardList1 = this.props.cards.map((card, idx) => {
      // console.log(card);
      if (card.status_id === 1) {
        return (
          <div className="IndividualCard" style={status1Cards}>
            <Card key={idx} title={card.title} body={card.body} status={card.status_id} />
            {/* <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button> */}
          </div>
        );
      } else {
        return null;
      }
    });
    const cardList2 = this.props.cards.map((card, idx) => {
      if (card.status_id === 2) {
        return (
          <div className="IndividualCard" style={status2Cards}>
            <Card key={idx} title={card.title} body={card.body} status={card.status_id} />
            {/* <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button> */}
          </div>
        );
      } else {
        return null;
      }
    });
    const cardList3 = this.props.cards.map((card, idx) => {
      if (card.status_id === 3) {
        return (
          <div className="IndividualCard" style={status3Cards}>
            <Card key={idx} title={card.title} body={card.body} status={card.status_id} />
            {/* <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button> */}
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div id="board">
        <div id="Col1">
          <div className="IndividualCard">{cardList1}</div>
        </div>
        <div id="Col2">
          <div className="IndividualCard">{cardList2}</div>
        </div>
        <div id="Col3">
          <div className="IndividualCard">{cardList3}</div>
        </div>
      </div>
    );
  }
}

export default CardList;
