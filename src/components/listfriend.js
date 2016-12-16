import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as FriendsActions from '../actions/FriendsActions';
import EditFriend from '../components/editfriend';

class ListFriend extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      visible:false,
      name:"",
      phone:"",
      open:false
    }
      this.opendialog = this.opendialog.bind(this);
      this.renderEditFriend = this.renderEditFriend.bind(this);
      this.closedialog = this.closedialog.bind(this)
    }

     opendialog(listprops) {
      console.log("blablabla");
     this.setState({visible: true,
                    name: listprops.name,
                    phone: listprops.phone,
                    id: listprops.id,
                    open: true})
    }
    closedialog() {
      this.setState({open:false})
    }

     renderEditFriend() {
       if (this.state.visible === true) {
         return (
           <EditFriend
             name={this.state.name}
             phone={this.state.phone}
             id={this.state.id}
             open={this.state.open}
             close={this.closedialog}
            />
         )
       }
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
  <div>
    <List>
      {
        listprops.map((listprops) => {
          const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
              <MenuItem onTouchTap={() => this.opendialog(listprops) }>
                Modifica</MenuItem>
              <MenuItem onTouchTap={() => this.props.deletefriend(listprops.id)}>Elimina</MenuItem>
            </IconMenu>
          );
          return <ListItem key={listprops.id} primaryText={listprops.name} secondaryText={listprops.phone} rightIconButton={rightIconMenu}/>
        })
      }
    </List>
    {this.renderEditFriend()}
    </div>
)
}

};
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
