import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//Container
import App from './App'
// pages
import ComicPage from './components/ComicPage'

ReactDOM.render(
    <BrowserRouter basename="">
      <Switch>
        
        <Route 
            path="/home"
            render={(props) => <App {...props} />}>
        </Route>
        <Route 
            path="/comic-page"
            render={(props) => <ComicPage {...props} />}>

        </Route>
      </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


