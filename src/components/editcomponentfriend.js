import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as FriendsActions from '../actions/FriendsActions';

class EditComponentFriend extends Component {

    constructor (props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || '',
      button: this.props.button || "Aggiungi persona",
      id: this.props.id,
    };
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleChangeName (event) {
     this.setState({ name: event.target.value });
  }
 handleChangePhone (event) {
     this.setState({ phone: event.target.value });
  }

  handleEdit (event) {
    const name = this.state.name;
    const phone = this.state.phone;
    const id = this.state.id
      this.props.editfriend(name,phone,id)
       event.preventDefault()
      this.setState({ name: '' });
      this.setState({ phone: '' })

  }

  render () {
    return (
    <form onSubmit={this.handleEdit} >
      <input
        type="text"
        placeholder="Nome"
        value={this.state.name}
        onChange={this.handleChangeName}
        required />
            <br/>


      <input
        type="number"
        placeholder="Telefono"
        value={this.state.phone}
        onChange={this.handleChangePhone}
        required />

      <input type="submit" value={this.props.button}/>
        </form>
    );
  }

}
function mapDispatchToProps(dispatch) {
  return {
    addfriend: (name,phone) => {
      dispatch(FriendsActions.addFriend(name,phone))
    },
    editfriend: (name,phone,id) => {
      dispatch(FriendsActions.editFriend(name,phone,id))
    }
  }
}


export default connect(null,mapDispatchToProps)(EditComponentFriend)
