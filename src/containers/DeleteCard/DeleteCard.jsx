import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions';

class deleteCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority: '',
      status: '',
      created_by: '',
      assigned_to: '',
    };

    this.titleInputRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, body, priority, status, created_by, assigned_to } = this.state;

    this.props.deleteCard({
      title,
      body,
      priority,
      status,
      created_by,
      assigned_to,
    });
  }

  render() {
    return (
      <form>
        <button onClick={this.handleSubmit}>Delete Card</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (card) => {
      const deleteCardAction = deleteCard(card);
      dispatch(deleteCardAction);
    },
  };
};

DeleteCard = connect(mapDispatchToProps)(DeleteCard);

export default DeleteCard;
