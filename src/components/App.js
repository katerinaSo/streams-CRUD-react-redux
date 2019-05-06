import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Create from "../components/streams/Create";
import Edit from "../components/streams/Edit";
import Delete from "../components/streams/Delete";
import Show from "../components/streams/Show";
import List from "../components/streams/List";
import Header from "../components/Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/streams/new" component={Create} />
          <Route exact path="/streams/:id" component={Show} />
          <Route exact path="/streams/edit/:id" component={Edit} />
          <Route exact path="/streams/delete/:id" component={Delete} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
