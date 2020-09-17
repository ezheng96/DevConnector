import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

//want to be able to dispatch more than one action type from this function
//able to do dispatch using thunk middleware
//action called setAlert that will dispatch type of setAlert to the reducer and add the alert to the state
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  // alert will have id, msg and alert type
  // want to randomly generate id so install package called uuid
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};
