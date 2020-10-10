import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser, getAllUsers } from './store/usersActions';
import {logoutUser} from './store/authActions';
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo';

export class App extends Component {
 
  

  addNewUser = (newUser) => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id);
  };

  componentDidMount() {
    this.props.getAllUsers();
  }


  render() {
    return (
      <div className="App">

      <div className="logout">

      <button onClick={this.props.logoutUser}>Logout</button>
      </div>

        <div className="form1">
          {/* Form to add new user */}
        <UsersForm addUser={this.addNewUser} />
        </div>



         {/* List of users */}
        <div className="App__user-info">
          {this.props.users.map((item, index) => {
            return (
              <UserInfo
                key={item.id}
                id={item.id}
                name={item.name}
                email={item.email}
                gen={item.gen}
                removeUser={this.deleteUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.usersState.users,
  };
}; 

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  getAllUsers: getAllUsers,
  logoutUser: logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
