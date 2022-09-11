export const RefreshReducer = (state=false, action) => {
    switch (action.type) {
      case "Refresh":
        return action.payload;
      default:
        return state;
    }
  };