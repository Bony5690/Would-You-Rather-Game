// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import './styles.css'
// import { handleSaveQuestionAnswer } from '../../actions/questions';
// import { Redirect, withRouter } from "react-router-dom";
// import { formatDate } from '../../utils/helper';

// class Poll extends Component {
// // constructor(props){
// //     super(props)
// //     this.state = {
// //         selectedQuestion: 'optionOne'
// //     }
// // }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const { dispatch, question, authedUser } = this.props;
//         console.log("Question: ", question);
//         // console.log("Question: ", answer);
//         dispatch(handleSaveQuestionAnswer( authedUser, ));
//     };


//     handleOptionChange = (e) => {
//         this.setState({
//           selectedQuestion: e.target.value
//         });
//       };


//     render() {

//        console.log('Polling', this.props)

//         const { questions, users, authedUser, id } = this.props


//         if (questions[id] === undefined) {
//             return <Redirect to="/404" />;
//           }
//           const question = questions && questions[id];
//           const user = users && users[question.author];

//           const { timestamp, optionOne, optionTwo } = question;
//           const { name, avatarURL } = user;

//        const  selectedQuestion = question.optionOne.votes.includes(authedUser)
//           ? "optionOne"
//           : question.optionTwo.votes.includes(authedUser)
//           ? "optionTwo"
//           : false;
    
//         const newQuestion = question.optionOne.votes.includes(authedUser)
//           ? true
//           : question.optionTwo.votes.includes(authedUser)
//           ? true
//           : false;


//       const votes =
//       question.optionOne.votes.length + question.optionTwo.votes.length;
       
//         return (
//             <form
//             onSubmit={this.onSubmit}
//                 className='border'
//                 style={{ display: 'flex', padding: 20 }}>
//                 <div>
//                     <img src={avatarURL}
//                         style={{ borderRadius: 21 }}
//                         height="42" width="42"
//                         alt={`Avatar of ${name}`} />
//                         <p>{name}</p>
//                     <div style={{ marginTop: 20 }}>{formatDate(timestamp)}</div>
//                 </div>
//                 <div>
//                     <label>
//                     <input
//               type="radio"
//               name="react-tips"
//               value="optionOne"
//               onChange={this.handleOptionChange}
//               checked={selectedQuestion}
//             />
//             {optionOne.text}
//                     </label>

//                     <label>
//                     <input
//               type="radio"
//               name="react-tips"
//               onChange={this.handleOptionChange}
//               value="optionTwo"
//               checked={selectedQuestion }
//             />
//             {optionTwo.text}
//                     </label>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         );
//     }
// }


// function mapStateToProps({ users, questions, authedUser }, props) {
   
//     const { id } = props.match.params;

//     return {
//         id,
//         authedUser,
//         questions,
//         users
//     };
// }

// export default withRouter(connect(mapStateToProps)(Poll));