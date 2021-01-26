import {SET_PRESCRIPTIONS} from "./types";

const initialState = {
  prescriptions: [],
}

export const todayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESCRIPTIONS:
      return {...state, prescriptions: [...action.payload]}
    default: return state
  }
}
