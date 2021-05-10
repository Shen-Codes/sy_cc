import {fetchUser, fetchUsers} from '../../api'

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const GET_USERS_FAIL = "GET_USERS_FAIL"
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS"
export const GET_USER_BY_ID_FAIL = "GET_USER_BY_ID_FAIL"
export const START_FETCH = "START_FETCH"


export const GetUsers = () => {
  return dispatch => {
    dispatch(startFetch());

    fetchUsers()
      .then(data => dispatch(getUsersSuccess(data)))
      .catch(err => dispatch(getUsersFail(err)))

  }
}

export const GetUser = id => {
  return dispatch => {
    dispatch(startFetch())

    fetchUser(id)
      .then(data => dispatch(getUsersByIdSuccess(data)))
      .catch(err => dispatch(getUsersByIdFail(err)))
  }
}


const startFetch = () => ({
  type: START_FETCH
})

const getUsersSuccess = listOfUsers => ({
  type: GET_USERS_SUCCESS,
  payload: listOfUsers
})

const getUsersFail = err => ({
  type: GET_USERS_FAIL,
  payload: err
})

const getUsersByIdSuccess = user => ({
  type: GET_USER_BY_ID_SUCCESS,
  payload: user
})

const getUsersByIdFail = err => ({
  type: GET_USER_BY_ID_FAIL,
  payload: err
})