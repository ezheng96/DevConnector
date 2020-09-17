import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

//array of objects that have an id and message
const initialState = [
  // array of alert objects that represent alerts
  //   {
  //     id: 1,
  //     msg: 'Please log in',
  //     alertType: 'success',
  //   },
];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
