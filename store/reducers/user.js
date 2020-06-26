const initialState = {
  clips: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CLIP":
      return {
        ...state,
        clips: [...state.clips, action.clip],
      };
    case "DELETE_CLIP":
      return {};
    default:
      return state;
  }
};

export default reducer;
