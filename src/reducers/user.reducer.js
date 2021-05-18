import { LOGIN_OR_SIGNIN } from './actions';

const initialState = {
  uuid: '',
  email: '',
  givenName: '',
  familyName: '',
  imageUrl: '',
  organisation: [],
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  //   const { uuid, email, givenName, familyName, imageUrl, organsation } = payload;
  switch (type) {
    case LOGIN_OR_SIGNIN:
      return {
        ...state,
        email: payload.email,
        givenName: payload.givenName,
        familyName: payload.familyName,
        imageUrl: payload.imageUrl,
      };
    default:
      return state;
  }
};

export default user;
