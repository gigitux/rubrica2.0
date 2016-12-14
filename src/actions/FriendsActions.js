 import * as types from '../constants/ActionTypes';
/*Passiamo i parametri per i reducers */
export function addFriend(name,phone) {
  return {
    type: types.ADD_FRIEND,
    name,
    phone
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function editFriend(name,phone) {
  return {
    type: types.EDIT_FRIEND,
    name,
    phone,
  };
}
