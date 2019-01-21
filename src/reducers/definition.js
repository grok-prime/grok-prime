const definition = {
  "word": "benevolent",
  "pronunciation": ["be", "nev", "o", "lent"],
  "type": "adjective",
  "definitions": [
    "well meaning and kindly"
  ],
  "examples": [
    "\"a benevolent smile\""
  ],
  "details": []
};

export default (state = definition, action) => {
  switch (action.type) {
    case "FETCH DEFINITION":
      return action.payload;
    default:
      return state;
  }
}
