import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { getUserOperation } from "./redux/operation/contactsOperation";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOperation());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Link to="/">
        <CSSTransition in={true} appear={true} timeout={500} classNames="title">
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
      </Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
