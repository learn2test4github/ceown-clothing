import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case UserActionTypes.SET_SIGN_UP_INFO:
      return {
        ...state,
        displayName: action.payload.displayName,
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword
      };

    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
