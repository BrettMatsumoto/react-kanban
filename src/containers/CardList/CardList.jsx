import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './CardList.css';
import PutCardForm from '../../containers/PutCard';

const status1Cards = {
  backgroundColor: 'red',
  width: '80%',
  marginBottom: '1em',
  marginLeft: '1em'
};

const status2Cards = {
  backgroundColor: 'yellow',
  width: '80%',
  marginBottom: '1em',
};

const status3Cards = {
  backgroundColor: 'green',
  width: '80%',
  marginBottom: '1em',
  marginRight: '1em',
};

const colStyle = {
  width: '33%',
}

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = { hidden: true, id: 0 };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide() {
    if (this.state.hidden === true) {
      this.setState({
        hidden: false,
      });
    } else {
      this.setState({
        hidden: true,
      });
    }
  }

  render() {
    const cardList1 = this.props.cards.map((card, idx) => {
      console.log('&*&*&*&*',card)
      if (parseInt(card.status_id) === 1) {
        return (
          <div style={status1Cards}>
            <div href={idx} className="IndividualCard">
              <Card
                key={idx}
                id={card.id}
                title={card.title}
                body={card.body}
                priority={card.priorities}
                status={card.statuses}
                createdBy={card.created_by}
                assignedTo={card.assigned_to}
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    const cardList2 = this.props.cards.map((card, idx) => {
      if (parseInt(card.status_id) === 2) {
        return (
          <div style={status2Cards}>
            <div href={idx} className="IndividualCard">
              <Card
                key={idx}
                id={card.id}
                title={card.title}
                body={card.body}
                priority={card.priorities}
                status={card.statuses}
                createdBy={card.created_by}
                assignedTo={card.assigned_to}
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    const cardList3 = this.props.cards.map((card, idx) => {
      if (parseInt(card.status_id) === 3) {
        return (
          <div style={status3Cards}>
            <div href={idx} className="IndividualCard">
              <Card
                key={idx}
                id={card.id}
                title={card.title}
                body={card.body}
                priority={card.priorities}
                status={card.statuses}
                createdBy={card.created_by}
                assignedTo={card.assigned_to}
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div id="board">
        <div id="gallery">
          <div id="Col1" style={colStyle}>
            <div>{cardList1}</div>
          </div>
          <div id="Col2" style={colStyle}>
            <div>{cardList2}</div>
          </div>
          <div id="Col3" style={colStyle}>
            <div>{cardList3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
