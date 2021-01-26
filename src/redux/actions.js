import {
  SET_ANIMALS,
  SET_IS_AUTH,
  SET_ONE_ANIMALS,
  SET_PRESCRIPTIONS,
} from "./types";

export const setIsAuthAction = () => {
  return {
    type: SET_IS_AUTH
  }
}

export const setPrescriptionsAction = (data) => {
  return {
    type: SET_PRESCRIPTIONS,
    payload: data
  }
}

export const setAnimalsAction = (data) => {
  return {
    type: SET_ANIMALS,
    payload: data
  }
}

export const setOneAnimalsAction = (data) => {
  return {
    type: SET_ONE_ANIMALS,
    payload: data
  }
}
