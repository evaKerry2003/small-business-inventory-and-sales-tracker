import { useState } from "react";

export default function Sales() {
  const [sales] = useState([
    {
      order: 1,
      product: "Sugar",
      quantity: 20,
      customer: "Lydia",
      amount: 2000,
      payment: "cash",
      date: "20-01-2026",
      status: "paid",
    },
  ]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Product sold</th>
            <th>Quantity sold</th>
            <th>Customer name</th>
            <th>Amount</th>
            <th>Payment method</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr key={sale.order}>
              <td>{sale.order}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.customer}</td>
              <td>{sale.amount}</td>
              <td>{sale.payment}</td>
              <td>{sale.date}</td>
              <td>
                <span className={sale.status.toLowerCase()}>{sale.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
