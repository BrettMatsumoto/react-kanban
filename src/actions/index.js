import CardList from '../containers/CardList';

export const ADD_CARD = 'ADD_BOOK';
export const LOAD_CARDS = 'LOAD_CARDS';

export function addCard(newCard) {
  // console.log('newCard:', newCard);
  return (dispatch) => {
    // console.log('dispatch: ', dispatch);
    return fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((body) => {
        console.log('body: ', body);
        return dispatch({
          type: ADD_CARD,
          payload: body,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  };
}

export const loadCards = () => {
  return (dispatch) => {
    return fetch('./api/cards')
      .then((response) => {
        // console.log(response);
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
