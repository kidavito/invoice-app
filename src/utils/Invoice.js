import { forwardRef } from "react";

const Invoice = forwardRef(({ data }, ref) => (
  <div ref={ref} style={styles.invoiceContainer}>
    <h1 style={styles.header}>Invoice</h1>
    <p style={styles.paragraph}>Date: {data.date}</p>
    <p style={styles.paragraph}>Invoice Number: {data.invoiceNumber}</p>
    <p style={styles.paragraph}>Customer Name: {data.customerName}</p>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.tableHeader}>Description</th>
          <th style={styles.tableHeader}>Quantity</th>
          <th style={styles.tableHeader}>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.items.map((item, index) => (
          <tr key={index} style={styles.tableRow}>
            <td style={styles.tableCell}>{item.description}</td>
            <td style={styles.tableCell}>{item.quantity}</td>
            <td style={styles.tableCell}>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2 style={styles.total}>Total: ${data.totalAmount}</h2>
  </div>
));

const styles = {
  invoiceContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "80%",
    margin: "20px auto",
  },
  header: {
    textAlign: "center",
    textDecoration: "underline",
    color: "#333",
  },
  paragraph: {
    fontSize: "14px",
    margin: "5px 0",
    color: "#555",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    padding: "8px",
    backgroundColor: "#f9f9f9",
    fontWeight: "bold",
    color: "#333",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "8px",
    color: "#555",
  },
  total: {
    marginTop: "20px",
    textAlign: "right",
    color: "#333",
  },
};

export default Invoice;
