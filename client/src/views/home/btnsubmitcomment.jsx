import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class SubmitButton extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        isSubmitting: false
      };
    }
  
    handleClick() {
      this.setState({ isSubmitting: true });
  
      // This probably where you would have an `ajax` call
      setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({ isSubmitting: false });
      }, 2000);
    }
  
    render() {
      const { isSubmitting } = this.state;
  
      return (
        <Button
          bsStyle="primary"
          disabled={isSubmitting}
          onClick={!isSubmitting ? this.handleClick : null}
        >
          {isSubmitting ? 'Submitting Comment...' : 'Submit'}
        </Button>
      );
    }
  }
  
