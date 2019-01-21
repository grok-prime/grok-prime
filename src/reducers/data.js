export default (state = [], action) => {
  switch (action.type) {
    case "DATA_FETCH":
    case "DATA_SAVE": 
      return action.payload;
    default:
      return state;
  }
}
