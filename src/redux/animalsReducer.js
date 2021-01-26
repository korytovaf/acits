import {SET_ANIMALS, SET_NEXT_PAGE_ANIMALS, SET_ONE_ANIMALS} from "./types";

const initialState = {
  animals: [],
  animal: null,
  pageSize: 10,
  count: null,
  nextPageAnimals: "",
  prevPageAnimals: "",
}

export const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANIMALS:
      return {
        ...state,
        animals: [...action.payload.results],
        nextPageAnimals: action.payload.next,
        prevPageAnimals: action.payload.previous,
        count: action.payload.count,
      }
    case SET_ONE_ANIMALS:
      return {
        ...state,
        animal: action.payload
      }
    case SET_NEXT_PAGE_ANIMALS:
      return {
        ...state,
        animals: [...action.payload.results],
        nextPageAnimals: action.payload.next,
        prevPageAnimals: action.payload.prev,
      }
    default: return state
  }
}
