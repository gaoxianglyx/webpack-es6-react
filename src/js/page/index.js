import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import '../../css/main.scss';
import HelloHandler from './hello.js';

class App extends React.Component{
  render() {
    return (
      <div className="nav">
      <Link to="app" className="homelink"><h2>Home</h2>  </Link>
        <Link to="hello" className="hellolink">  Say Hello</Link>
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
};

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="hello" path="/hello" handler={HelloHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('react'));
});