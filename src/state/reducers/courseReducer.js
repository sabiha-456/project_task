export const courseReducer = (
  state = {  course: [] },
  action
) => {
  switch (action.type) {
    case "SET_COURSE":
      return {
        ...state,
        course: action.data,
      };
      break;
  }
  return state;
};
