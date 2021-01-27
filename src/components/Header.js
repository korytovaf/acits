import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={"navbar navbar-light bg-light"}>
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" to={"/acits/today"}>Сегодня</Link>
          <Link className="navbar-brand" to={"/acits/animals"}>Животные</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header
