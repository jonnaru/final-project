import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { user } from "./reducers/user";

import { Header } from "./components/Header";
import { Gallery } from "./pages/Gallery";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { LoginSignUp } from "./pages/LoginSignUp";
import { Contact } from "./pages/Contact";

const URL = "http://localhost:8080";

const reducer = combineReducers({ user: user.reducer });

// Get local storage and sets as preloadedState
const persistedStateJSON = localStorage.getItem("userStore");
let preloadedState = {};
if (persistedStateJSON) {
  preloadedState = JSON.parse(persistedStateJSON);
}

// Configure store with preloadedState
export const store = configureStore({ reducer, preloadedState });

// Store the state in local storage on Redux state change
store.subscribe(() => {
  localStorage.setItem("userStore", JSON.stringify(store.getState()));
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/sign-in" exact>
            <LoginSignUp URL={URL} />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
