import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "../components/Login";
// import Add from "../components/Add";
import MainPage from "../components/MainPage";
import NotFound from "./NotFound";
import Register from "../components/register/Register.js";
import NewStatus from "../components/newStatus/NewStatus";
import NewFeeds from "../components/newFeeds/NewFeeds";
import HomePage from "../components/homePages/HomePage";
import AuthRoute from "../protectedRoute/AuthRoute";
import Cookies from "js-cookie";
function Index(props) {
  const match = useRouteMatch();
  console.log(`${match.url}`);
  const token = Cookies.get("ID");
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route path={`${match.url}newsfeeds`} component={NewFeeds} />
      <Route path={`${match.url}home`} component={HomePage} />
      <Route path={`${match.url}login`} component={Login} />
      <Route path={`${match.url}register`} component={Register} />
      {/* <Route path={`${match.url}newstatus`} component={NewStatus} /> */}
      <AuthRoute
        path={`${match.url}newstatus`}
        component={NewStatus}
        token={token}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Index;
