import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as FriendsActions from '../actions/FriendsActions';

class ListFriend extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      const iconButtonElement = (
          <IconButton touch={true} tooltipPosition="bottom-left">
              <MoreVertIcon/>
          </IconButton>
      );



  var listprops = this.props.list
  function SortByName(a, b){
  var aName = a.name;
  var bName = b.name;
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }
  listprops.sort(SortByName);
    return (
    <List>
      {listprops.map((listprops) => {
        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>Modifica</MenuItem>
                <MenuItem onTouchTap={() => this.props.deletefriend(listprops.id)}>Elimina</MenuItem>
            </IconMenu>
        );
                return <ListItem key={listprops.id}
                        primaryText={listprops.name}
                        secondaryText={listprops.phone}
                        rightIconButton={rightIconMenu} /> })}
    </List>
)}};

function mapStateToProps(state) {
  return { list: state.friends.friendsById}
}

function mapDispatchToProps(dispatch) {
  return {
    deletefriend: (id) => {
      dispatch(FriendsActions.deleteFriend(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListFriend)
