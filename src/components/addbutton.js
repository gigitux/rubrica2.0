import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AddFriendInput from '../components/addfriend';
injectTapEventPlugin();
export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
    console.log("test")
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Chiudi"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Aggiungi"
        primary={true}
        onTouchTap={this.handleOpen}
      />,
    ];

    return (
      <div>
        <FloatingActionButton label="Modal Dialog" onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Aggiungi Persona"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <AddFriendInput />
        </Dialog>
      </div>
    );
  }
}
