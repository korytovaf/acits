import React from 'react';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {
  Switch,
  Route,
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
          <Route path={"/acits/login"} component={Login}/>
          <Redirect from={"/acits/"} to={"/acits/login"}/>
        </Switch>
        :
        <>
          <Header />
          <Switch>
            <Route path={"/acits/today"} component={Today}/>
            <Route path={"/acits/animals"} component={Animals}/>
            <Redirect from={"/acits/"} to={"/acits/today"}/>
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
