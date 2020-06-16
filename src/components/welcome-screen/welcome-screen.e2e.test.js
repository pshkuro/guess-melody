import {shallow} from "enzyme";
import React from "react";
import WelcomeScreen from "./welcome-screen";


it(`Should welcome button be pressed`, () => {
  const onWelcomeButtonClick = jest.fn(); // mock fn say about calls count, param, what return

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);
  welcomeButton.simulate(`click`);
  expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
});


