import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer from "./reducers";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

//for toasting
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const depo0223 = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={depo0223}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
