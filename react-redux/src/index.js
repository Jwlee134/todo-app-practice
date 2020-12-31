import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./modules/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
