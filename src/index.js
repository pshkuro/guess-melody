import App from "./components/app/app.jsx";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import {settings} from "./mocks/settings.js";
import {questions} from "./mocks/questions.js";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={settings.errorsCount}
        questions={questions}/>,
    </Provider>,
    document.querySelector(`#root`)
);
