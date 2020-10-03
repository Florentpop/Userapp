import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser, deleteUser, getAllUsers } from './store/usersActions'
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo';

export class App extends Component {
 
  

  addNewUser = (newUser) => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
  };

  componentDidMount() {
    this.props.getAllUsers();
  }


  render() {
    return (
      <div className="App">

        <UsersForm addUser={this.addNewUser} />

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
const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  getAllUsers: getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
