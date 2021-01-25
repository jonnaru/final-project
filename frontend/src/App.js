import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { Gallery } from "./pages/Gallery";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { SignIn } from "./pages/SignIn";
import { Contact } from "./pages/Contact";

const App = () => {
  return (
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
          <SignIn />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
