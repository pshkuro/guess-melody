import App from "./components/app/app.jsx";
import React from "react";
import ReactDOM from "react-dom";
import {settings} from "./mocks/settings.js";
import {questions} from "./mocks/questions.js";


ReactDOM.render(
    <App
      errorsCount={settings.errorsCount}
      questions={questions}/>,
    document.querySelector(`#root`)
);
