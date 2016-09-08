import React from 'react'
import { Alert, Button } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },
  render() {
    console.log();
    if (this.state.alertVisible&&(!this.props.search)) {
      return (
          <Alert bsStyle="success">
            <p className="pull-right">
              <Button onClick={this.handleAlertDismiss}>x</Button>
            </p>
            <h4>Success!</h4>
            <p>Your request to capture {this.props.url} was succesful!</p>

            </Alert>
      );
    }
    return (null);
  },
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },
  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});
