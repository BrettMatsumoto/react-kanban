import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends Component {
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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedChange = this.handleCreatedChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, body, priority, status, created_by, assigned_to } = this.state;

    this.props.addCard({
      title,
      body,
      priority,
      status,
      created_by,
      assigned_to,
    });

    this.setState({
      title: '',
      body: '',
      priority: '',
      status: '',
      created_by: '',
      assigned_to: '',
    });

    this.titleInputRef.current.focus();
  }

  componentDidMount() {
    this.titleInputRef.current.focus();
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState({ title: value });
  }

  handleBodyChange(e) {
    const { value } = e.target;
    this.setState({ body: value });
  }

  handlePriorityChange(e) {
    const { value } = e.target;
    this.setState({ priority: value });
  }

  handleStatusChange(e) {
    const { value } = e.target;
    this.setState({ status: value });
  }

  handleCreatedChange(e) {
    const { value } = e.target;
    this.setState({ created_by: value });
  }

  handleAssignedChange(e) {
    const { value } = e.target;
    this.setState({ assigned_to: value });
  }

  render() {
    return (
      <form>
        <input type="text" ref={this.titleInputRef} value={this.state.title} onChange={this.handleTitleChange} placeholder="Title"/>
        <input type="text" value={this.state.body} onChange={this.handleBodyChange} placeholder="Body"/>
        <input type="text" value={this.state.priority} onChange={this.handlePriorityChange} placeholder="Priority Code"/>
        <input type="text" value={this.state.status} onChange={this.handleStatusChange} placeholder="Status Code"/>
        <input type="text" value={this.state.created_by} onChange={this.handleCreatedChange} placeholder="Created By" />
        <input type="text" value={this.state.assigned_to} onChange={this.handleAssignedChange} placeholder="Assigned To" />
        <button onClick={this.handleSubmit}>Save New Card</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      const addCardAction = addCard(card);
      dispatch(addCardAction);
    },
  };
};

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);

export default AddCard;
