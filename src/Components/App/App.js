//import boostrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

///componentes
import React from "react";
import Navbar from "../NavBar";
import NoticeList from "../NoticeList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Nofound from "../NoFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/notices" component={NoticeList} />
            <Route path="/*" component={Nofound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
