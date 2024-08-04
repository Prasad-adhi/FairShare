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
      const trueCount = updatedCheckedItems.filter(item => item).length;
      const splitValue = trueCount > 0 ? (parseFloat(prevState.values[0]) / trueCount).toFixed(2) : 0;
      const updatedValues = prevState.values.map((v, i) => (i > 0 && updatedCheckedItems[i - 1] ? splitValue : v));
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
          />
        </th>
        <th>
          <input
            type="text"
            placeholder='Enter amount'
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={values[0]}
          />
        </th>
        {names.map((_, index) => (
          <th key={index}>
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => this.handleCheckboxChange(index)}
            />
            {checkedItems[index] ? values[index + 1] : ""}
          </th>
        ))}
      </tr>
    );
  }
}

export default TableRow;
