import React, { useState, useEffect } from "react";
import axios from "axios";
import "../TableDisplay.css";

const BlogComments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state
        const result = await axios.get(
          "https://teaching-learning-backend.onrender.com/get-comments"
        );

        if (result.data.status === "Ok") {
          setData(result.data.result); // Access the result directly
        } else {
          setError("Error fetching data: " + result.data.status);
        }

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError("An unexpected error occurred: " + error.message);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-display">
      <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
        Submitted Comments
      </h4>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            <th>Blog ID</th>
            <th>Created At</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.comment}</td>
                <td>{item.blogId}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No comments available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogComments;
