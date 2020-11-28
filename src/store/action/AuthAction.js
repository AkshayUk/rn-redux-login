import {loginData, users} from '../../constants/data';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FETCH_DETAILS = 'FETCH_DETAILS';

export const login = (emailId, password, showMessage) => {
  const testEmail = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false || email !== loginData.username) {
      showMessage('error', 'Please enter valid email');
      return false;
    } else {
      return true;
    }
  };
  const testPassword = pass => {
    if (pass !== loginData.password) {
      showMessage('error', 'Password Incorrect');
      return false;
    } else {
      return true;
    }
  };

  return async dispatch => {
    if (testEmail(emailId) && testPassword(password)) {
      showMessage('success', 'Logged In Successfully');
      dispatch({
        type: LOGIN,
        token: loginData.username,
      });
    }
  };
};

export const getDetails = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_DETAILS,
      payload: users,
    });
  };
};

export const logout = showMessage => {
  return async dispatch => {
    dispatch({
      type: LOGOUT,
      token: null,
    });
    showMessage('success', 'Logged Out Successfully');
  };
};
