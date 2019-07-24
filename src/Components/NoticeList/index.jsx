import React, { Component } from "react";

import { connect } from "react-redux";
import PageNoticeList from "./PageNoticeList";

class NoticeList extends Component {
  render() {
    const { articles } = this.props.stateNotices;

    return (
      <div>
        <PageNoticeList listnotices={articles} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stateNotices: state.notices.notices
});

export default connect(mapStateToProps)(NoticeList);
