import UsersRepo from '../../services/UsersRepo';
import { CustomError } from '../../utils/CustomError';

const LOAD_SUCCESS = 'boilerplate/users/LOAD_SUCCESS';
const LOAD_ERROR = 'boilerplate/users/LOAD_ERROR';

const initialState = {
  users: [],
  error: null,
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        users: action.data,
        error: null,
      };
    case LOAD_ERROR:
      return {
        ...state,
        users: [],
        error: action.data,
      };
    default:
      return state;
  }
}

export function loadUsers () {
  return async (dispatch) => {
    const response = await UsersRepo.load();
    if (response instanceof CustomError) {
      dispatch(loadError(response));
    } else {
      dispatch(loadSuccess(response));
    }
  };
}

export function loadError (data) {
  return {
    type: LOAD_ERROR,
    data,
  };
}

export function loadSuccess (data) {
  return {
    type: LOAD_SUCCESS,
    data,
  };
}

export const getUsers = state => state.users.users;
