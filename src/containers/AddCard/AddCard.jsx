import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.titleInputRef = createRef();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, body } = this.state;

    this.props.addCard({
      title,
      body,
    });

    this.setState({
      title: '',
      body: '',
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

  render() {
    return (
      <form>
        <input type="text" ref={this.titleInputRef} value={this.state.title} onChange={this.handleTitleChange} />
        <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
        <button onClick={this.handleSubmit}>Save Card</button>
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
