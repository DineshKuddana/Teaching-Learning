// TableDisplay.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TableDisplay.css"; // Add any specific styling for the table if needed

const TableDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://teaching-learning-backend.onrender.com/get-data"
        );
        if (result.data.status === "Ok") {
          setData(result.data.data);
        } else {
          alert("Error fetching data: " + result.data.status);
        }
      } catch (error) {
        alert("An unexpected error occurred: " + error.message);
      }
    };

    fetchData();
  }, []);

  const message = () => {
    alert("Message sent successfully");
  };

  return (
    <div className="table-display">
      <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
        Submitted Forms
      </h4>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
              <td>
                <button onClick={message}>Yes</button>&nbsp; <button>No</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
