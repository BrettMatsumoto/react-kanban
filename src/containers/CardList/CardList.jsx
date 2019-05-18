import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './CardList.css';
import { deleteCard } from '../../actions';
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

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {hidden: true};

    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide () {
    if (this.state.hidden === true) {
      this.setState({
        hidden: false
      })
    } else {
      this.setState({
        hidden: true
      })
    }
  }

  render() {
    const show = {
      display: 'block'
    }

    const hide = {
      display: 'none'
    }

    console.log('cardlist>>>', this.props.cards);
    const cardList1 = this.props.cards.map((card, idx) => {
      // console.log(card);
      if (parseInt(card.status_id) === 1) {
        return (
          <div className="IndividualCard" style={status1Cards}>
            <button href="" className="showHideButton" role="button" onClick={this.toggleShowHide}>
              <Card key={idx} title={card.title} body={card.body} status={card.status_id} />
              <button onClick={() => this.props.deleteCard(card.id)}>Delete</button>
              <button onClick={() => this.props.PutCard(card.id)}>Edit</button>
            </button>
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
            <Card key={idx} title={card.title} body={card.body} status={card.status_id} />
            <button onClick={() => this.props.deleteCard(card.id)}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
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
            <Card key={idx} title={card.title} body={card.body} status={card.status_id} />
            <button onClick={() => this.props.deleteCard(card.id)}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      // style={this.state.hidden ? hide:show} //update state so that it has a boolean false/true for hidden/shown
      <div id="board">
        <div id="gallery" style={this.state.hidden ? show:hide}x>
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
        <div id="detailed" style={this.state.hidden ? hide:show}>
          <div id="detailed-far-left">
            <div className="IndividualCard">Test</div>
          </div>
          <div id="detailed-center">
            <div className="IndividualCard">Test</div>
          </div>
          <div id="detailed-far-right">
            <div className="IndividualCard">Test</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    },
    PutCard: (id) => {
      dispatch(PutCard(id));
    },
  };
};

CardList = connect(
  null,
  mapDispatchToProps,
)(CardList);

export default CardList;
