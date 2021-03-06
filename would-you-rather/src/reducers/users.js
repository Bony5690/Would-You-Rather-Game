import {
    RECEIVE_USERS,
    ANSWER_QUESTION_SUCCESS_USER,
    SAVE_QUESTION_SUCCESS_USER
  } from "../actions/types";
  
  export default function users(state = {}, action) {
    switch (action.type) {
      case RECEIVE_USERS:
        return {
          ...state,
          ...action.users
        };
      case ANSWER_QUESTION_SUCCESS_USER: {
        const { authedUser, qid, answer } = action.payload;
        const user = state[authedUser];
        return {
          ...state,
          [authedUser]: {
            ...user,
            answers: {
              ...user.answers,
              [qid]: answer
            }
          }
        };
      }
      case SAVE_QUESTION_SUCCESS_USER: {
        const { question } = action.payload;
        const user = question.payload.author;
        return {
          ...state,
          [user]: {
            ...state[user],
            questions: [...state[user].questions.concat(question.payload.id)]
          }
        };
      }
      default:
        return state;
    }
  }
  