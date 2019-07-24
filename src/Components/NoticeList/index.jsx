import React, { Component } from "react";

import { connect } from "react-redux";
import PageNoticeList from "./PageNoticeList";
import Loader from "../Loader";

class NoticeList extends Component {
  render() {
    const { stateNotices } = this.props;

    return (
      <div>
        {Object.keys(stateNotices).length === 0 ? (
          <Loader />
        ) : (
          <PageNoticeList listnotices={this.props.stateNotices.articles} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stateNotices: state.notices.notices
});

export default connect(mapStateToProps)(NoticeList);
