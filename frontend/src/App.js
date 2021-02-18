import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { user } from "./reducers/user";
import { ui } from "./reducers/ui";
import { cart } from "./reducers/cart";

import { StartPage } from "./pages/StartPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ShopPage } from "./pages/ShopPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { LoginDrawer } from "./components/LoginDrawer";
import { CartDrawer } from "./components/CartDrawer";
import { Footer } from "./components/Footer";

import { LoadingSpinner } from "./lib/LoadingSpinner";

export const URL = process.env.REACT_APP_URL;

const reducer = combineReducers({
  user: user.reducer,
  ui: ui.reducer,
  cart: cart.reducer,
});

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
        <LoadingSpinner />
        <LoginDrawer />
        <CartDrawer />

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
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
