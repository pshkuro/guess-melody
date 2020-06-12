import PropTypes from 'prop-types';
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

export default function App(props) {
  const {errorsCount} = props;

  return (
    <WelcomeScreen errorsCount={errorsCount}/>
  );
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

