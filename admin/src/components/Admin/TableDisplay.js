import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TableDisplay.css"; // Add any specific styling for the table if needed

const TableDisplay = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server
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

  // Handle delete request
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://teaching-learning-backend.onrender.com/delete-contact/${id}`
      );
      if (response.data.status === "Ok") {
        alert("Record deleted successfully!");
        // Update the table by removing the deleted record
        setData(data.filter((item) => item._id !== id));
      } else {
        alert("Error deleting record: " + response.data.message);
      }
    } catch (error) {
      alert("An unexpected error occurred: " + error.message);
    }
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
