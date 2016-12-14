import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListFriend from './components/listfriend';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import friends from './reducers/reducers';
import AddFriendInput from './components/addfriend';
import AddButton from './components/addbutton';
const reducers ={
    friends: friends
}
const reducer = combineReducers(reducers)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const App = () => {
return (
<div>
  <MuiThemeProvider>
    <div>
    <ListFriend />
    <center>
    <AddButton />
    </center>
    </div>
  </MuiThemeProvider>
</div>
)};

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
  document.getElementById('root')
);
