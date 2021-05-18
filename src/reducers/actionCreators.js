import { LOGIN_OR_SIGNIN } from './actions';

export const loginOrSignin = (data) => (dispatch) => {
  dispatch({ type: LOGIN_OR_SIGNIN, payload: data });
};
