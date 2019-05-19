import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './CardList.css';
import PutCardForm from '../../containers/PutCard';
// import { deleteCard } from '../../actions';
import { PutCard } from '../../actions';

const status1Cards = {
  border: '1px solid black',
  backgroundColor: 'red',
  marginRight: '33%',
  marginLeft: '33%',
};

const status2Cards = {
  border: '1px solid black',
  backgroundColor: 'yellow',
  marginRight: '33%',
  marginLeft: '33%',
};

const status3Cards = {
  border: '1px solid black',
  backgroundColor: 'green',
  marginRight: '33%',
  marginLeft: '33%',
};

const detailedCardCSS = {};

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
    const show = {
      display: 'block',
    };

    const hide = {
      display: 'none',
    };

    // console.log('++++++++++++++++', this.props);
    // console.log('cardlist>>>', this.props.cards);
    const cardList1 = this.props.cards.map((card, idx) => {
      // console.log('+++++++++++++++++++++++++', card);
      if (parseInt(card.status_id) === 1) {
        return (
          <div className="IndividualCard" style={status1Cards}>
            <div href={idx} className="showHideButton" role="button">
              <Card
                key={idx}
                id={card.id}
                title={card.title}
                body={card.body}
                priority={card.priorities}
                status={card.statuses.name}
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
          <div className="IndividualCard" style={status2Cards}>
            <div href="" cardName="showHidebutton" role="button" onClick={this.toggleShowHide}>
              <Card
                key={idx}
                id={card.id}
                title={card.title}
                body={card.body}
                priority={card.priority_id}
                status={card.status_id}
                createdBy={card.created_by}
                assignedTo={card.assigned_to}
              />
              {/* <button onClick={() => this.props.deleteCard(card.id)}>Delete</button>
              <button onClick={() => this.props.PutCard(card)}>Edit</button> */}
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
          <div className="IndividualCard" style={status3Cards}>
            <div href="" cardName="showHidebutton" role="button" onClick={this.toggleShowHide}>
              <Card
                key={idx}
                id={card.id}
                title={card.title}
                body={card.body}
                priority={card.priority_id}
                status={card.status_id}
                createdBy={card.created_by}
                assignedTo={card.assigned_to}
              />
              {/* <button onClick={() => this.props.deleteCard(card.id)}>Delete</button>
              <button onClick={() => this.props.PutCard(card.id)}>Edit</button> */}
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    //button sets state to current card id for edit form
    //find returns true/false
    //how do i know which card am i trying to edit

    return (
      // style={this.state.hidden ? hide:show} //update state so that it has a boolean false/true for hidden/shown
      <div id="board">
        <div id="gallery">
          <div id="Col1">
            <div className="IndividualCard">{cardList1}</div>
          </div>
          <div id="Col2">
            <div className="IndividualCard">{cardList2}</div>
          </div>
          <div id="Col3">
            <div className="IndividualCard">{cardList3}</div>
          </div>
          <div style={this.state.hidden === true ? hide : show}>
            <PutCardForm />
          </div>
        </div>
        <div />
        {/* <div id="detailed" style={this.state.hidden === true ? hide : show}>
          <button id="goBackButton" style={this.state.hidden ? hide : show}>
            Go Back
          </button>
          <div id="detailed-far-left">
            <div className="IndividualCard" />
          </div>
          <div id="detailed-center">
            <div className="IndividualCard">Test</div>
          </div>
          <div id="detailed-far-right">
            <div className="IndividualCard">Test</div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default CardList;
