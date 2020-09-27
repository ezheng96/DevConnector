import axios from 'axios';

//function that takes in token and puts it in local storage
//so we can send a token with every request instead of choosing when to send it

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
