import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="">
        <button>Home</button>
      </Link>
      <Link to="virtualDOM">
        <button>VirtualDOM</button>
      </Link>
      <Link to="key">
        <button>key</button>
      </Link>
      <Link to="state">
        <button>State</button>
      </Link>
      <Link to="ref">
        <button>Ref</button>
      </Link>
      <Link to="handlingEvents">
        <button>HandlingEvents</button>
      </Link>
      <Link to="props">
        <button>Props</button>
      </Link>
    </div>
  );
};

export default Nav;
