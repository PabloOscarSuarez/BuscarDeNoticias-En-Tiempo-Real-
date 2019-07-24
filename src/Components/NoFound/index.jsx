import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import "./style.css";
function Nofound() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>
            4<span />4
          </h1>
        </div>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <MDBBtn gradient="aqua" className="text-center">
            BACK HOME
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
}

export default Nofound;
