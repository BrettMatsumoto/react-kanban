import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCard from './containers/AddCard';
import CardList from './containers/CardList';
import CardListTitle from './components/CardListTitle';
import { connect } from 'react-redux';
import { loadCards } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Mr. Popo with his eyes closed',
    };
  }

  componentDidMount() {
    console.log(this.props);
    return this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardListTitle title={this.state.title} />
        </header>

        <div className="cardlist-container">
          <CardList cards={this.props.cards} />
        </div>

        <div className="add-card-form">
          <AddCard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('App.js mapStateToProps: ', state) 
  return {
    cards: state.cardReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
