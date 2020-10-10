import React from 'react';
import {connect} from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../store/authActions';


 function Register(props) {

    if( !props.auth.isLoaded) return null;
    if(props.auth.uid) props.history.push('/');

    const handleSubmit = (e)=>{
        e.preventDefault()
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.loginWithEmail(email, password);
    };

    return (
        
        <div className="form2">
        <div className="form-control">

        <h1>Login Now</h1>  

        <form onSubmit={handleSubmit}>
            
                <label>Email</label>
                <input name="email" type="email" placeholder="email" />
            

            
                <label>Password</label>
                <input name="password" type="password" placeholder="password" />
            

            <br />

            <button type="submit"> Login </button>

            <br />
            <div className='form3'>
            <button onClick={props.loginWithGoogle}>
            <img src="https://user-images.githubusercontent.com/1531669/41761606-83b5bd42-762a-11e8-811a-b78fdf68bc04.png" width="200" alt='log' />
            
            </button>
            </div>

        </form>
             
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
};

const mapDispatchToProps = {
    loginWithEmail,
    loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
 