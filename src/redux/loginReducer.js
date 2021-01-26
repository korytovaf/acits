import {SET_IS_AUTH} from "./types";

const initialState = {
  isAuth: false,
  token: ""
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {isAuth: true}
    default: return state
  }
}


