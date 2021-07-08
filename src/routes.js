import React, {lazy, Suspense}from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// import Veg from "./pages/Veg";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
// import Layout from "./components/Layout";

const Beverage = lazy(() => import('./pages/Beverage'))
const NonVeg = lazy(() => import('./pages/NonVeg'))
const Veg = lazy(() => import('./pages/Veg'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Layout = lazy(() => import('./components/Layout'))
const Admin = lazy(() => import('./pages/Admin'))



function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => {
          console.log(props)
          return (
            <Suspense fallback = {<div>...Loading</div>}>
              <Layout {...props}>              
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/sau"  component={Admin} />
                  <Route path="/dashboard" exact component={Dashboard} />                
                  <Route path="/beverage" component={Beverage} />                
                  <Route path="/nonveg" component={NonVeg} />
                  <Route path="/veg" component={Veg} />
                  <Route component={NotFound} />               
                </Switch>                      
              </Layout>
              </Suspense>
            
          );
        }}
      />
    </BrowserRouter>
  );
}

export default Routes;
