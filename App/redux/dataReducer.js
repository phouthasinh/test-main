const initialState = {
  data: [],
  isFetching: false,
  error: false,
};
export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_DATA":
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
