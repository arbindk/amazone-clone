import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

//Key generated from Stripe - Public Key
const promise = loadStripe(
  "pk_test_51HQ2b5GngXe22GQZiEgj0yIHMDAx62Wi1IyovokJPeNLcGAXnmW5ITHAju4kcY93Eks6qd1AWxzXZHhAllweUVBV00wzM5Qz6Z"
);

function App() {
  const [{}, dispatch] = useStateValue();
  //listener keep track of users signed in
  useEffect(() => {
    //will only run once

    auth.onAuthStateChanged((authUser) => {
      console.log("Signed in USER IS>>>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
