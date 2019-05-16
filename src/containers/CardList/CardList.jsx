import React, { Component } from 'react';
import Card from '../../components/Card';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({ input: value });
  }

  render() {
    const input = this.state.input;
    const bookList = this.props.cards
      .filter((card) => {
        return card.title.toLowerCase().includes(input.toLowerCase());
      })
      .map((card, idx) => {
        return <Card key={idx} title={card.title} author={card.author} />;
      });

    return (
      <>
        <input type="text" value={this.state.input} onChange={this.handleInputChange} />
        {CardList}
      </>
    );
  }
}

export default CardList;
