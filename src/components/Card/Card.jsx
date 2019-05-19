import React, { Component } from 'react';
// import PutCardForm from '../../containers/PutCard';
import { connect } from 'react-redux';
import PutCardForm from '../../containers/PutCard';
import { DeleteCard, PutCard } from '../../actions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { hidden: true };
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

    const { id, title, body, priority, status, createdBy, assignedTo } = this.props;
    console.log('********************props', this.props)

      return (
        <div className="card">
          <div>ID: {id}</div>
          <div>Title: {title}</div>
          <div>Body: {body}</div>
          <div>Priority: {priority.name}</div>
          <div>Status: {status}</div>
          <div>Created By: {createdBy.first_name} {createdBy.last_name}</div>
          <div>Assigned To: {assignedTo.first_name} {assignedTo.last_name}</div>
          <button onClick={() => this.props.DeleteCard(id)}>Delete</button>
          <button onClick={() => this.toggleShowHide()}>Edit</button>
          <DeleteCard />
          <div style={this.state.hidden === true ? hide : show}>
            <PutCardForm />
          </div>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DeleteCard: (id) => {
      dispatch(DeleteCard(id));
    },
    PutCard: (id) => {
      dispatch(PutCard(id));
    },
  };
};

Card = connect(
  null,
  mapDispatchToProps,
)(Card);

export default Card;
