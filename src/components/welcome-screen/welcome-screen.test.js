import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";


const Settings = {
  errorsCount: 105,
};

it(`Render WelcomeScreen`, () => {
  const tree = renderer
  .create(
      <WelcomeScreen
        errorsCount={Settings.errorsCount}
        onWelcomeButtonClick={() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
