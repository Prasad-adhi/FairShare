import React from 'react';
import Names from './Names';

class App extends React.Component {
  state = {
    names: [], // Initialize state as an array
  };

  // Callback function to handle data received from the child component
  handleCallback = (childData) => {
    // Append the new name to the names array
    this.setState((prevState) => ({
      names: [...prevState.names, childData]
    }));
  };

  render() {
    const { names } = this.state;
    return (
      <div>
        <Names parentCallback={this.handleCallback} />
        {/* <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul> */}
        <table>
          
          <tr>
            <th></th>
            {
              names.map((name,index) => (
                <th key={index}>{name} <br/>
                <input type="checkbox" id={index} />
                </th>
              ))
            }
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
