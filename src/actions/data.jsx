import { fetch_data } from "actions/types";

export const fetchData = () => dispatch => {
  let payload = localStorage.getItem('grok');

  if (!payload) {
    payload = ["grok = good", "good != harm"];
    const action = saveData(payload);
    dispatch(action);
  } else {
    payload = JSON.parse(payload);
  };

  dispatch({ type: fetch_data, payload });
};

export const saveData = payload => dispatch => {
  localStorage.setItem('grok', JSON.stringify(payload));
  dispatch({ type: "DATA_SAVE", payload });
};
