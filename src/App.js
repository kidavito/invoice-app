import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Invoice from "./utils/Invoice";
import { invoiceData } from "./database";

const App = () => {
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div style={styles.outterFrame}>
      <button onClick={handlePrint} style={styles.printButton}>
        Print Invoice
      </button>
      <Invoice ref={invoiceRef} data={invoiceData} />
    </div>
  );
};

const styles = {
  outterFrame: { textAlign: "center", paddingTop: "3vh" },
  printButton: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "10px 2px",
    cursor: "pointer",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, box-shadow 0.3s",
  },
  printButtonHover: {
    backgroundColor: "#45a049",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default App;
