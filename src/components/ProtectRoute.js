import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


function ProtectRoute({component: Component, auth, ...rest}) {
    //if user is logged in
    if ( !auth.isLoaded) return null;
    if (auth.uid) {
      return (
        <Route
          {...rest}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      );
    }
    //if user is not logged in

    return (
      <Route
        {...rest}
        render={(props) => {
          return <Redirect to={{ pathname: "/login" }} />;
        }}
      />
    );
    
}

const mSTP = (state) => {
    return {
        auth: state.firebase.auth,
    };

};

export default connect(mSTP)(ProtectRoute);
