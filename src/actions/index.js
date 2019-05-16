import CardList from '../containers/CardList';

export const ADD_CARD = 'ADD_BOOK';
export const LOAD_CARDS = 'LOAD_CARDS';

export function addCard(newCard) {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: ADD_CARD,
          payload: body,
        });
      });
  };
}

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/cards')
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return dispatch({
          type: LOAD_CARDS,
          payload: cards,
        });
      });
  };
};
