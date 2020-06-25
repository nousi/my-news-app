const initialState = {
  clips: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CLIP":
      return;
    case "DELETE_CLIP":
    default:
      return state;
  }
};

export default reducer;
