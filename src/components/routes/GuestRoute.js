import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'



const propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};


const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />} />
);


GuestRoute.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.token
})

export default connect(mapStateToProps)(GuestRoute);
