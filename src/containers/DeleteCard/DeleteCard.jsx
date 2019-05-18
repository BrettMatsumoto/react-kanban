// import React, { Component, createRef } from 'react';
// import { connect } from 'react-redux';
// import { deleteCard } from '../../actions';

// class DeleteCard extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       id: '',
//       title: '',
//       body: '',
//       priority: '',
//       status: '',
//       created_by: '',
//       assigned_to: '',
//     };

//     this.titleInputRef = createRef();

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const { id } = this.state;

//     this.props.deleteCard({
//       id
//     });
//     console.log('id>>>>>>>',id);
//   }

//   render() {
//     console.log('delete>>>>>',this.props)
//     return (
//       <form>
//         <button onClick={this.handleSubmit}>Delete Card</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteCard: (card) => {
//       const deleteCardAction = deleteCard(card);
//       dispatch(deleteCardAction);
//     },
//   };
// };

// DeleteCard = connect(null, mapDispatchToProps)(DeleteCard);

// export default DeleteCard;
