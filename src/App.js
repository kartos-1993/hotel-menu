import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FoodItemDetail from "./components/FoodItemDetail";

// import Veg from "./pages/Veg";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
// import Layout from "./components/Layout";

const Beverage = lazy(() => import("./pages/Beverage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

// const Admin = lazy(() => import('./pages/Admin'))

function App() {
  const styles = {
    height: "100vw",
    width: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <BrowserRouter>
      <Route
        render={(props) => {
          return (
            <Suspense fallback={<div style={styles}>...Loading</div>}>
              <Switch>
                <Route path="/admin" component={Dashboard} />
                <Route path="/beverage" component={Beverage} />
                <Route path="/foodItem/:id">
                  <FoodItemDetail />
                </Route>
                <Route path="/" component={Dashboard} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default App;
