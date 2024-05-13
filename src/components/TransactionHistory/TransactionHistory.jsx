import some from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={some.container}>
      <thead className={some.caption}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={some.cells}>{item.type}</td>
            <td className={some.cells}>{item.amount}</td>
            <td className={some.cells}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
