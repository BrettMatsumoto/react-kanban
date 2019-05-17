import { ADD_CARD, LOAD_CARDS } from '../actions';

const initialState = {
  cards: [],
};

function cardReducer(state = initialState, action) {
  console.log('Action cardReducer: ', action);
  // console.log('state cardReducer: ', state);
  switch (action.type) {
    case ADD_CARD:
      return Object.assign({}, { cards: [...state.cards, action.payload] });
    case LOAD_CARDS:
      return Object.assign({}, { cards: [...action.payload] });
    default:
      return state;
  }
}

export default cardReducer;
