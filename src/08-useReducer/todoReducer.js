export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "something":
      throw new Error("Action.type = something no is umplement");

    default:
      return initialState;
  }
};
