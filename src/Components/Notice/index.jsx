import React, { Component } from "react";
import Notice from "./PageNotice";

export default class Nootice extends Component {
  render() {
    return <Notice notice={this.props.notice} />;
  }
}
