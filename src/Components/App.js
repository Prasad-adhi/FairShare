import React from 'react';
import Names from './Names';
import TableRow from './TableRow';
import TotalRow from './TotalRow';

class App extends React.Component {
  state = {
    names: [],
    tableRows: [],
    totals: {
      totalPrice: 0,
      shares: []
    }
  };

  handleCallback = (childData) => {
    this.setState((prevState) => ({
      names: [...prevState.names, childData]
    }));
  };

  addTableRow = () => {
    this.setState((prevState) => ({
      tableRows: [...prevState.tableRows, { id: prevState.tableRows.length, values: [] }]
    }));
  };

  handleRowChange = (id, values) => {
    this.setState((prevState) => ({
      tableRows: prevState.tableRows.map(row =>
        row.id === id ? { ...row, values } : row
      )
    }));
  };

  calculateTotals = () => {
    const { names, tableRows } = this.state;
    const shares = new Array(names.length).fill(0);
    let totalPrice = 0;

    tableRows.forEach(row => {
      const price = parseFloat(row.values[0]) || 0;
      totalPrice += price;

      row.values.slice(1).forEach((share, index) => {
        shares[index] += parseFloat(share) || 0;
      });
    });

    this.setState({
      totals: {
        totalPrice: totalPrice.toFixed(2),
        shares: shares.map(share => share.toFixed(2))
      }
    });
  };

  render() {
    const { names, tableRows, totals } = this.state;

    return (
      <div>
        <Names parentCallback={this.handleCallback} />
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              {names.map((name, index) => (
                <th key={index}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <TableRow key={row.id} id={row.id} names={names} onChange={this.handleRowChange} />
            ))}
            {tableRows.length > 0 && <TotalRow totals={totals} />}
          </tbody>
        </table>
        <button onClick={this.addTableRow}>Add Table Row</button>
        <button onClick={this.calculateTotals}>Calculate Totals</button>
      </div>
    );
  }
}

export default App;
