import React, { useState, useEffect } from "react";
import axios from "axios";
import "../TableDisplay/TableDisplay";;

const BlogComments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch comments from the server
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://teaching-learning-backend.onrender.com/get-comments"
      );

      if (result.data.status === "Ok") {
        setData(result.data.result);
      } else {
        setError("Error fetching data: " + result.data.status);
      }

      setLoading(false);
    } catch (error) {
      setError("An unexpected error occurred: " + error.message);
      setLoading(false);
    }
  };

  // Delete a comment
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://teaching-learning-backend.onrender.com/delete-comment/${id}`
      );

      if (response.data.status === "Ok") {
        alert("Comment deleted successfully");
        // Remove the deleted comment from state
        setData(data.filter((item) => item._id !== id));
      } else {
        alert("Error deleting comment: " + response.data.message);
      }
    } catch (error) {
      alert("An unexpected error occurred: " + error.message);
    }
  };

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
            <th>Delete</th>
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
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
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
