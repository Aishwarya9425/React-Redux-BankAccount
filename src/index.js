import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

// store.dispatch(deposit(500));
// store.dispatch(createCustomer("Aishwarya J", "12345678"));
// console.log(store.getState());

// store.dispatch(withdraw(100));
// console.log(store.getState());

// store.dispatch(requestLoan(1000, "buy home"));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(updateName("Deepika"));
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* entire app has access to store */}
      <App />
    </Provider>
  </React.StrictMode>
);
