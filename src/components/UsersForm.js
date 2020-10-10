import React, { Component } from 'react'

export class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSumit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
    <div className="form-control">
      <form onSubmit={this.handleSumit} >
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder=" Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
        

       
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter Valid Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
        

        
          <label>Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
          <br />
        
        
          <button type="submit">
          Add User
          </button>
        
      </form>
      </div>
    );
  }
}

export default UsersForm;
