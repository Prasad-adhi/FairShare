import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: "",
      checkedItems: new Array(props.names.length).fill(false) // Initialize checkedItems array with false values
    };
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

  // Handle checkbox change
  handleCheckboxChange = (index) => {
    this.setState((prevState) => {
      const updatedCheckedItems = [...prevState.checkedItems];
      updatedCheckedItems[index] = !updatedCheckedItems[index]; // Toggle the checked status
      return { checkedItems: updatedCheckedItems };
    });
  };

  render() {
    const { checkedItems, calc } = this.state;
    const { names } = this.props;
    const trueCount = checkedItems.filter(item => item).length;
    const valueToDisplay = trueCount > 0 ? (parseFloat(calc) / trueCount).toFixed(2) : "0.00"; // Ensure 2 decimal points

    return (
      <tr>
        <th><input
            type="text"
            placeholder='Enter product'/></th>
        <th>
          <input
            type="text"
            placeholder='Enter amount'
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.state.calc}
          />
        </th>
        {checkedItems.map((bool, index) => (
          <th key={index}>
            <input
              type="checkbox"
              checked={bool}
              onChange={() => this.handleCheckboxChange(index)}
            />
            {bool ? valueToDisplay : ""}
          </th>
        ))}
      </tr>
    );
  }
}

export default TableRow;
