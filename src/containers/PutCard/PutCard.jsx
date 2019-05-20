import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { PutCard } from '../../actions';
import { CardList } from '../CardList';

class PutCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
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
    
    const { id, title, body, priority, status, created_by, assigned_to } = this.state;

    this.props.PutCard({
      id,
      title,
      body,
      priority,
      status,
      created_by,
      assigned_to,
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
        <input
          type="text"
          ref={this.titleInputRef}
          value={this.state.title}
          onChange={this.handleTitleChange}
          placeholder="Title"
        />
        <input type="text" value={this.state.body} onChange={this.handleBodyChange} placeholder="Body" />
        <input type="text" value={this.state.priority} onChange={this.handlePriorityChange} placeholder="Priority" />
        <input type="text" value={this.state.status} onChange={this.handleStatusChange} placeholder="Status" />
        <input type="text" value={this.state.created_by} onChange={this.handleCreatedChange} placeholder="Created By" />
        <input
          type="text"
          value={this.state.assigned_to}
          onChange={this.handleAssignedChange}
          placeholder="Assigned To"
        />
        <button onClick={this.handleSubmit}>Submit Edit</button>
      </form>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    PutCard: (card) => {
      const putCardAction = PutCard(card);
      dispatch(putCardAction);
    },
  };
};

PutCardForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PutCardForm);

export default PutCardForm;
