const initialState = { contact: [], keyWord: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contact.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_BY_USERNAME":
      state.keyWord = payload.keyWord;
      break;
  }
  return { ...state };
};

export default reducer;
