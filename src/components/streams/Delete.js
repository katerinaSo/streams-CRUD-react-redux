import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";

class Delete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions = () => {
    const id = this.props.match.params.id;
    return (
      <>
        <Link to="/" className="ui button negative">
          CANCEL
        </Link>
        <div
          onClick={() => {
            this.props.deleteStream(id);
          }}
          class="ui primary button"
        >
          APPROVE
        </div>
      </>
    );
  };
  renderContent = () => {
    if (!this.props.stream) {
      return "Approve the delete of the stream, please. ";
    }
    return `Approve the delete of stream "${this.props.stream.title}", please.`;
  };

  render() {
    return (
      <Modal
        title="Delete Your Stream?"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(Delete);
