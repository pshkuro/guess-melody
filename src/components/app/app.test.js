import App from "./app.jsx";
import React from "react";
import renderer from "react-test-renderer";

const Settings = {
  errorsCount: 105,
};

it(`Render App`, () => {
  const tree = renderer
  .create(<App
    errorsCount={Settings.errorsCount}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
