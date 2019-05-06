import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import Form from "./Form";

class Create extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);

    return;
  };

  render() {
    return (
      <div>
        <h3>Create Your Stream</h3>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(Create);
