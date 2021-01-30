import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

import { user } from "./reducers/user";

import { StartPage } from "./pages/StartPage";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { GalleryPage } from "./pages/GalleryPage";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { ui } from "./reducers/ui";

export const URL = "http://localhost:8080";

const reducer = combineReducers({ user: user.reducer, ui: ui.reducer });

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
        <Nav />

        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>

          <Route path="/gallery" exact>
            <GalleryPage />
          </Route>
          <Route path="/shop" exact>
            <ShopPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
