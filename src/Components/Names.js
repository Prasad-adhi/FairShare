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
      <div className='flex flex-col items-center justify-center'>
        <form onSubmit={this.onTrigger} className="flex flex-row items-center space-x-2">
          <label className='font-bold dark:text-white'>Payers:</label>
          <input
            type="text"
            name="myname"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input type="submit" value="Submit" className="h-10 px-5 m-2 text-indigo-100 dark:text-black dark:bg-indigo-300 transition ease-in-out delay-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"/>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Names;
