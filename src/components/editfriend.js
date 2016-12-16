import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditComponentFriend from '../components/editcomponentfriend'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class EditFriend extends React.Component {

  render() {
    const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.props.close}
      />
    ]
    return (
      <div>
        <Dialog
          title="Modifica Persona"
          actions={actions}
          modal={true}
          open={this.props.open}
          >
        <EditComponentFriend {...this.props}/>
        </Dialog>
      </div>
    );
  }
}
