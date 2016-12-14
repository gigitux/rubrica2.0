import * as types from '../constants/ActionTypes';
//import omit from 'lodash/object/omit';
//import assign from 'lodash/object/assign';
//import mapValues from 'lodash/object/mapValues';
import _ from 'lodash';
import update from 'immutability-helper';

/* Inizializziamo lo store con parametri di default. Lo store è formato da un array (friends) che contiene solo gli id e da un array di oggetti (friendsById) */
const initialState = {
  friends: [1, 2, 3],
  friendsById: [
    {
      id: 1,
      name: 'Theodore Roosevelt',
      phone: '8080880808'
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      phone: '808080880'
    },
   {
      id: 3,
      name: 'George Washington',
      phone: '9191919'
    },
  ]
};
/* Inizia la lista dei reducers */
export default function friends(state = initialState, action) {
  switch (action.type) {
/* Riusciamo a settare newid contanto la lunghezza dell'array e aggiungendoci +1.
Poi aggiungiamo all'array di oggetti un nuovo id, un nuovo nome e un nuovo telefono'*/
    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
           {
            id: newId,
            name: action.name,
            phone: action.phone
          }
        ]
      }

//    case types.DELETE_FRIEND:
//      return {
//        ...state,
//        friends: state.friends.filter(id => id !== action.id),
//        friendsById: omit(state.friendsById, action.id)
//      }

/* Elimina la persona, tramite remove che di default elimina tutti gli elementi che non corrispondono ad action.name ma grazie a !== facciamo accadere il contrario  */
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: _.remove(state.friendsById, function(n) {
          return n.id !== action.id;
      } )
      }

    case types.EDIT_FRIEND:
      return update(state,  {friendsById: {$apply:[{
          name: action.name, phone:action.phone}]}});
    default:
      return state;
  }
}
