import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calc: "" };
  }

  handleBlur = (event) => {
    const value = event.target.value;
    try {
      // Use eval to calculate the value
      const result = eval(value);
      this.setState({ calc: result });
    } catch (e) {
      // If there's an error, such as invalid expression, set the state to the input value
      this.setState({ calc: value });
    }
  }

  handleChange = (event) => {
    this.setState({ calc: event.target.value });
  }

  render() {
    return (
      <tr>
        <th>
          <input
            type="text"
            placeholder='Enter amount'
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.state.calc}
          />
        </th>
        {console.log(this.props.checked)}
      </tr>
    );
  }
}

export default TableRow;
