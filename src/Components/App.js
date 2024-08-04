import React from 'react';
import Names from './Names';
import TableRow from './TableRow';

class App extends React.Component {
  state = {
    names: [], // Initialize state as an array
    tableRows: [] // Initialize tableRows as an array to store TableRow components
  };

  // Callback function to handle data received from the child component
  handleCallback = (childData) => {
    // Append the new name to the names array
    this.setState((prevState) => ({
      names: [...prevState.names, childData]
    }));
  };

  // Function to add a new TableRow component
  addTableRow = () => {
    this.setState((prevState) => ({
      tableRows: [...prevState.tableRows, { id: prevState.tableRows.length }]
    }));
  };

  render() {
    const { names, tableRows } = this.state;

    return (
      <div>
        <Names parentCallback={this.handleCallback} />
        
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              {names.map((name, index) => (
                <th key={index}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <TableRow key={row.id} names={names} />
            ))}
          </tbody>
        </table>
        <button onClick={this.addTableRow}>Add Table Row</button>
      </div>
    );
  }
}

export default App;
