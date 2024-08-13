import React from 'react';

const TotalRow = ({ totals }) => (
  <tr>
    <th>Total</th>
    <th>{totals.totalPrice}</th>
    {totals.shares.map((total, index) => (
      <th key={index}>{total}</th>
    ))}
  </tr>
);

export default TotalRow;
