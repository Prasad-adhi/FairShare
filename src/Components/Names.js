import React, { useState } from 'react';

class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  // Function triggered when the form is submitted
  onTrigger = (event) => {
    // Call the parent callback function
    this.props.parentCallback(event.target.myname.value);
    this.setState({ name: '' }); // Reset input field
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value }); 
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onTrigger}>
          <input
            type="text"
            name="myname"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Names;
