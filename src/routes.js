import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Beverage from "./pages/Beverage";
import NonVeg from "./pages/NonVeg";
import Veg from "./pages/Veg";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => {
          return (
            <Layout {...props}>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/beverage" component={Beverage} />
                <Route path="/nonveg" component={NonVeg} />
                <Route path="/veg" component={Veg} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default Routes;
