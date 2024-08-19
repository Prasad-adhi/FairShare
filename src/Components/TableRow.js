import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: "",
      product: "",
      checkedItems: new Array(props.names.length).fill(false),
      values: new Array(props.names.length + 1).fill(0)
    };
  }

  handleBlur = (event) => {
    const value = event.target.value;
    try {
      const result = eval(value);
      this.setState(prevState => {
        const newValues = [...prevState.values];
        newValues[0] = result;
        const trueCount = prevState.checkedItems.filter(item => item).length;
        const splitValue = trueCount > 0 ? (result / trueCount).toFixed(2) : 0;
        const updatedValues = newValues.map((v, i) => (i > 0 && prevState.checkedItems[i - 1] ? splitValue : v));
        this.props.onChange(this.props.id, updatedValues);
        return { values: updatedValues, calc: result };
      });
    } catch (e) {
      this.setState({ calc: value });
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState(prevState => {
      const newValues = [...prevState.values];
      newValues[0] = value;
      return { values: newValues, calc: value };
    });
  }

  handleProductChange = (event) => {
    this.setState({ product: event.target.value });
  }

  handleCheckboxChange = (index) => {
    this.setState((prevState) => {
      const updatedCheckedItems = [...prevState.checkedItems];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
  
      // Count the number of checked items
      const trueCount = updatedCheckedItems.filter(item => item).length;
  
      // Calculate the split value based on the number of checked items
      const splitValue = trueCount > 0 ? (parseFloat(prevState.values[0]) / trueCount).toFixed(2) : 0;
  
      // Update the values array based on the checked state of each checkbox
      const updatedValues = prevState.values.map((v, i) => {
        if (i === 0) {
          return prevState.values[0]; // Keep the total amount the same
        } else if (i === index + 1) {
          return updatedCheckedItems[i - 1] ? splitValue : 0; // Set to zero if unchecked
        } else if (i > 0) {
          return updatedCheckedItems[i - 1] ? splitValue : 0; // Update based on checked status
        }
        return v;
      });
  
      // Update the parent component with the new values
      this.props.onChange(this.props.id, updatedValues);
  
      return { checkedItems: updatedCheckedItems, values: updatedValues };
    });
  };

  render() {
    const { checkedItems, values, product } = this.state;
    const { names } = this.props;

    return (
      <tr>
        <th>
          <input
            type="text"
            placeholder='Enter product'
            value={product}
            onChange={this.handleProductChange}
            class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </th>
        <th>
          <input
            type="text"
            placeholder='Enter amount'
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={values[0]}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </th>
        {names.map((_, index) => (
          <th key={index}>
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => this.handleCheckboxChange(index)}
              className = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-l-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            {checkedItems[index] ? values[index + 1] : ""}
          </th>
        ))}
      </tr>
    );
  }
}

export default TableRow;
