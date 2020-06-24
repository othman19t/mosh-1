let lastId = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case "BUG_ADDED":
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "BUG_REMOVED":
      return state.filter((bug) => bug.id === action.payload.id);
  }
  return state;
};

export default reducer;
