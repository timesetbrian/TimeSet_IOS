import { combineReducers } from 'redux';

export default combineReducers({
  auth: {
    accessToken: '',
    client: '',
    uid: ''
  }
});
