import React, { useState, useEffect } from 'react';
import './Quotes.css';
import axios from "axios";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState({ title: '', text: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track which quote is being edited
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all quotes on component mount
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://teaching-learning-backend.onrender.com/get-quotes"
      );
      if (response.data.status === "Ok") {
        setQuotes(response.data.data || []);
        setError(null);
      } else {
        setError("Failed to fetch quotes. Invalid response from server.");
      }
    } catch (error) {
      setError("An unexpected error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuote({ ...newQuote, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://teaching-learning-backend.onrender.com/upload-quotes",
        newQuote,
        { headers: { "Content-Type": "application/json" } }
      );

      if (result.data.status === "Ok") {
        alert("Quote submitted successfully!");
        setQuotes([...quotes, { ...newQuote, _id: result.data.data._id }]); // Add new quote to list
        setNewQuote({ title: "", text: "" });
        setIsAdding(false);
      } else {
        alert("Error submitting quote: " + result.data.status);
      }
    } catch (error) {
      alert("An unexpected error occurred: " + error.message);
    }
  };

  const handleEdit = async (index) => {
    const quoteToUpdate = quotes[index];
    try {
      const result = await axios.put(
        `https://teaching-learning-backend.onrender.com/update-quote/${quoteToUpdate._id}`,
        quoteToUpdate,
        { headers: { "Content-Type": "application/json" } }
      );

      if (result.data.status === "Ok") {
        alert("Quote updated successfully!");
        setEditIndex(null);
      } else {
        alert("Error updating quote: " + result.data.status);
      }
    } catch (error) {
      alert("An unexpected error occurred: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `https://teaching-learning-backend.onrender.com/delete-quote/${id}`
      );

      if (result.data.status === "Ok") {
        alert("Quote deleted successfully!");
        setQuotes(quotes.filter((quote) => quote._id !== id));
      } else {
        alert("Error deleting quote: " + result.data.status);
      }
    } catch (error) {
      alert("An unexpected error occurred: " + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Quotes Section</h2>
      <button onClick={() => setIsAdding(!isAdding)} className="addButton">
        Add New
      </button>
      {isAdding && (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter quote title"
            value={newQuote.title}
            onChange={handleInputChange}
            className="input"
          />
          <textarea
            name="text"
            placeholder="Enter the quote"
            value={newQuote.text}
            onChange={handleInputChange}
            className="textarea"
          />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      )}
      {loading ? (
        <p>Loading quotes...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <ul className="quoteList">
          {quotes.map((quote, index) => (
            <li key={quote._id} className="quoteItem">
              {editIndex === index ? (
                <>
                <div className='box'>
                  <p>Title:</p>
                  <input
                    type="text"
                    name="title"
                    className='field1'
                    value={quote.title}
                    onChange={(e) =>
                      setQuotes(
                        quotes.map((q, i) =>
                          i === index ? { ...q, title: e.target.value } : q
                        )
                      )
                    }
                  />

                  <p>Quote:</p>
                  <textarea
                    name="text"
                    className='field2'
                    value={quote.text}
                    onChange={(e) =>
                      setQuotes(
                        quotes.map((q, i) =>
                          i === index ? { ...q, text: e.target.value } : q
                        )
                      )
                    }
                  />
                  </div>
                  <button onClick={() => handleEdit(index)} className='btn'>Save</button>
                  <button onClick={() => setEditIndex(null)} className='btn'>Cancel</button>
                </>
              ) : (
                <>
                  <h3>{quote.title}</h3>
                  <p>{quote.text}</p>
                  <button onClick={() => setEditIndex(index)} className='btn'>Edit</button>
                  <button onClick={() => handleDelete(quote._id)} className='btn'>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Quotes;
