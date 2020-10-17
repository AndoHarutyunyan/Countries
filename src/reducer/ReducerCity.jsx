import { NOT_SEE_SEARCH_VALUE, SEE_SEARCH_VALUE } from "../action/ActionCity";

const initialState = {
  thereIsSearchvalue: false,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEE_SEARCH_VALUE: {
      const newState = { ...state };
      newState.thereIsSearchvalue = true;
      return newState;
    }
    case NOT_SEE_SEARCH_VALUE: {
      const newState = { ...state };
      newState.thereIsSearchvalue = false;
      return newState;
    }
    default:
      return state;
  }
}
