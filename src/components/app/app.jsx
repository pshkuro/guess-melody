import PropTypes from "prop-types";
import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const welcomeButtonHandler = () => {};

export default function App(props) {
  const {errorsCount} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeButtonClick={welcomeButtonHandler}/>
  );
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

