import axios from "axios";

export const getToken = (login, password) => {
  return axios({
    method: "post",
    url: "https://acits-api.herokuapp.com/api/token/",
    data: {
      username: login,
      password: password
    },
    headers: {"Content-Type": "application/json"}
  })
}

export const getPrescriptions = (token) => {
  return axios({
    method: "get",
    url: "https://acits-api.herokuapp.com/api/v1/prescriptions/today/",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      'current-shelter': 1
    }
  })
}

export const getAnimals = (token, pageSize) => {
  return axios({
    method: "get",
    url: `https://acits-api.herokuapp.com/api/v1/animals/?limit=${pageSize}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      'current-shelter': 1
    }
  })
}

export const getNextAnimals = (token, nextPage) => {
  return axios({
    method: "get",
    url: `https://acits-api.herokuapp.com/${nextPage}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      'current-shelter': 1
    }
  })
}

export const getOneAnimal = (token, idAnimal) => {
  return axios({
    method: "get",
    url: `https://acits-api.herokuapp.com/api/v1/animals/${idAnimal}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      'current-shelter': 1
    }
  })
}
