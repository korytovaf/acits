import React from 'react';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {
  Switch,
  Route, Link,
} from "react-router-dom";
import Today from "./components/Today";
import {Redirect} from "react-router";
import Animals from "./components/Animals";
import Header from "./components/Header";

function App({isAuth}) {

  return (
    <div className="container">
      {!isAuth
        ?
        <Switch>
          <Route path={"/login"} component={Login}/>
          <Redirect from={"/"} to={"/login"}/>
        </Switch>
        :
        <>
          <Header />
          <Switch>
            <Route path={"/today"} component={Today}/>
            <Route path={"/animals"} component={Animals}/>
            <Redirect from={"/"} to={"/today"}/>
          </Switch>
        </>

      }
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: state.login.isAuth
});

export default connect(mapStateToProps)(App);
