import React from 'react';

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
            class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <br />
          <input type="submit" value="Submit" class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"/>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Names;
