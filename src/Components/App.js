import React from 'react';
import Names from './Names';
import TableRow from './TableRow';

class App extends React.Component {
  state = {
    names: [], // Initialize state as an array
    checkedItems: {}, // Object to hold the checked status of each checkbox
  };

  // Callback function to handle data received from the child component
  handleCallback = (childData) => {
    // Append the new name to the names array
    this.setState((prevState) => ({
      names: [...prevState.names, childData]
    }));
  };

  // Handle checkbox change
  handleCheckboxChange = (index) => {
    this.setState((prevState) => ({
      checkedItems: {
        ...prevState.checkedItems,
        [index]: !prevState.checkedItems[index], // Toggle the checked status
      },
    }));
  };

  // Get indices of checked checkboxes
  getCheckedIndices = () => {
    const { checkedItems } = this.state;
    return Object.keys(checkedItems).filter(index => checkedItems[index]);
  };

  render() {
    const { names, checkedItems } = this.state;
    const checkedIndices = this.getCheckedIndices();

    return (
      <div>
        <Names parentCallback={this.handleCallback} />
        <table>
          <thead>
            <tr>
              <th></th>
              {names.map((name, index) => (
                <th key={index}>
                  {name} <br/>
                  <input
                    type="checkbox"
                    id={index}
                    checked={!!checkedItems[index]} // Set the checkbox checked state
                    onChange={() => this.handleCheckboxChange(index)}
                  />
                </th>
              ))}
            </tr>
            <TableRow checked={checkedIndices} ></TableRow>
          </thead>
        </table>
      </div>
    );
  }
}

export default App;
