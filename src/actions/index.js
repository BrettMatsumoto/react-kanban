import CardList from '../containers/CardList';

export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const DELETE_CARDS = 'DELETE_CARDS';
export const PUT_CARDS = 'PUT_CARDS';

export function addCard(newCard) {
  return (dispatch) => {
    return fetch('/api/cards', {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/api/cards')
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

export function DeleteCard(id) {
  return (dispatch) => {
    return fetch(`/api/cards/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: DELETE_CARDS,
          payload: body,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function PutCard(card) {
  return (dispatch) => {
    return fetch(`/api/cards/${card.id}`, {
      method: 'PUT',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response;
    })
    .then((body) => {
      return dispatch({
        type: PUT_CARDS,
        payload: body,
      });
    })
    .catch((err) => {
      console.log('action: ', err);
    })
  }
}