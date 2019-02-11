import {
  FETCH_USER,
  FETCH_USER_ERROR,
  FETCH_USER_AUTHORIZED,
  SET_USER_UNAUTHORIZED
} from './action-types';

const initialState = {
  isFetching: false,
  isFetched: false,
  isAuthorizing: false,
  isAuthorized: false,
  profile: {},
  error: null,    
};

const user = (state = initialState, action) => {
  switch(action.type) {
      case FETCH_USER:
          return { 
              ...state, 
              isFetching: true,
              isAuthorizing: true,
          }

      case FETCH_USER_ERROR:
          return {
              ...state,
              isFetching: false,
              error: action.payload
          }
      case FETCH_USER_AUTHORIZED:
          return {
              ...state,
              isFetching: false,
              isFetched: true,
              isAuthorizing: false,
              isAuthorized: true,
              profile: action.payload,
          }
      case SET_USER_UNAUTHORIZED:
          return {
              ...state,
              isFetching: false,
              isFetched: false,
              profile: {},
              isAuthorized: false
          }
      default:
          return state;
  }
}

export default user;