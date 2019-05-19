import React from 'react';
import './App.css';
import AddCard from './containers/AddCard';
import CardList from './containers/CardList';
import CardListTitle from './components/CardListTitle';
import { connect } from 'react-redux';
import { loadCards } from './actions';

const addFormStyle = {
  paddingTop: '15px',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Kanban Board of Death',
    };
  }

  componentDidMount() {
    return this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardListTitle title={this.state.title} />
        </header>

        <div id="addFormHolder" style={addFormStyle}>
          <div className="add-card-form" style={addFormStyle}>
            <AddCard />
          </div>
        </div>

        <div className="cardlist-container">
          <CardList cards={this.props.cards} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
