import React, { useState, useEffect } from 'react';
import './Quotes.css';
import axios from 'axios';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState({ title: '', text: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the quote being edited
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
        'https://teaching-learning-backend.onrender.com/get-quotes'
      );
      if (response.data.status === 'Ok') {
        setQuotes(response.data.data || []);
        setError(null);
      } else {
        setError('Failed to fetch quotes. Invalid response from server.');
      }
    } catch (error) {
      setError('An unexpected error occurred: ' + error.message);
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
    if (!newQuote.title || !newQuote.text) {
      alert('Please fill out both the title and the quote.');
      return;
    }
    try {
      const result = await axios.post(
        'https://teaching-learning-backend.onrender.com/upload-quotes',
        newQuote,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (result.data.status === 'Ok') {
        alert('Quote submitted successfully!');
        setQuotes([...quotes, newQuote]); // Add the new quote to the list
        setNewQuote({ title: '', text: '' }); // Clear input fields
        setIsAdding(false); // Close the form
      } else {
        alert('Error submitting quote: ' + result.data.status);
      }
    } catch (error) {
      alert('An unexpected error occurred: ' + error.message);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const saveEdit = async (index) => {
    try {
      const updatedQuote = quotes[index];
      const result = await axios.put(
        'https://teaching-learning-backend.onrender.com/update-quote',
        updatedQuote,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (result.data.status === 'Ok') {
        alert('Quote updated successfully!');
        setEditIndex(null); // Exit edit mode
      } else {
        alert('Error updating quote: ' + result.data.status);
      }
    } catch (error) {
      alert('An unexpected error occurred: ' + error.message);
    }
  };

  const handleDelete = async (index) => {
    try {
      const result = await axios.delete(
        'https://teaching-learning-backend.onrender.com/delete-quote',
        { data: quotes[index] }
      );

      if (result.data.status === 'Ok') {
        alert('Quote deleted successfully!');
        setQuotes(quotes.filter((_, i) => i !== index)); // Remove quote from the list
      } else {
        alert('Error deleting quote: ' + result.data.status);
      }
    } catch (error) {
      alert('An unexpected error occurred: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Quotes Section</h2>
      <button onClick={() => setIsAdding(!isAdding)} className="addButton">
        {isAdding ? 'Cancel' : 'Add New'}
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
            <li key={index} className="quoteItem">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={quote.title}
                    onChange={(e) =>
                      setQuotes(
                        quotes.map((q, i) =>
                          i === index ? { ...q, title: e.target.value } : q
                        )
                      )
                    }
                    className="editInput"
                  />
                  <textarea
                    name="text"
                    value={quote.text}
                    onChange={(e) =>
                      setQuotes(
                        quotes.map((q, i) =>
                          i === index ? { ...q, text: e.target.value } : q
                        )
                      )
                    }
                    className="editTextarea"
                  />
                  <button onClick={() => saveEdit(index)} className="btn">
                    Save
                  </button>
                  <button onClick={() => setEditIndex(null)} className="btn">
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3>{quote.title}</h3>
                  <p>{quote.text}</p>
                  <button onClick={() => handleEdit(index)} className="btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="btn">
                    Delete
                  </button>
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
