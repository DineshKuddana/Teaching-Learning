import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Fetch blog data
    const blogData = {
      1: {
        title: "Introduction to Machine Learning",
        image: "https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg",
        content: `Machine Learning (ML) is a subset of artificial intelligence (AI) focused on building systems that learn from data. 
                  Unlike traditional programming, where a developer writes explicit rules, ML systems derive rules and patterns automatically from the data. 
                  Key concepts in ML include supervised learning, unsupervised learning, and reinforcement learning. 
                  Supervised learning is often used in classification and regression problems, while unsupervised learning is helpful for clustering data.`,
      },
      2: {
        title: "Deep Dive into Algorithms",
        image: "https://www.thekainatchaudhary.com/assets/images/posts/machine-learning-algorithms-basics.jpeg",
        content: `Algorithms are essential in computer science because they define the step-by-step process to solve a specific problem.
                  Some of the most well-known algorithms include sorting algorithms (e.g., QuickSort, MergeSort), search algorithms (e.g., Binary Search),
                  and graph traversal algorithms (e.g., Depth-First Search, Breadth-First Search). 
                  Understanding the time complexity of algorithms through Big O Notation is crucial in determining their efficiency.`,
      },
      3: {
        title: "Understanding Data Structures",
        image: "https://media.licdn.com/dms/image/D4E12AQG4D7tUCtraPg/article-cover_image-shrink_720_1280/0/1674957981022?e=2147483647&v=beta&t=m1_7vPOllFBLi_sqiko34ht-Xf_UH8ihdOVhe28Ufjk",
        content: `Data structures are critical for organizing and storing data in an efficient manner. 
                  Some common data structures include arrays, linked lists, stacks, queues, trees, and graphs.
                  Choosing the right data structure can significantly affect the performance of an algorithm or program. 
                  For example, hash tables provide O(1) time complexity for lookup, while trees like binary search trees enable fast searching and sorting.`,
      },
      4: {
        title: 'Cloud Computing Essentials',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFpWk3pM9EqPp0QEcbCxQlWNDQ69oJatvdg&s',
        content: `Cloud computing is the delivery of computing services like storage, servers, databases, networking, and software over the internet. 
                  It allows businesses and individuals to access and store data on remote servers rather than on local hardware. 
                  The most popular cloud service providers include AWS (Amazon Web Services), Microsoft Azure, and Google Cloud Platform (GCP). 
                  Key cloud computing models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). 
                  These models provide flexibility, scalability, and cost-efficiency for various business needs.`,
      },
      5: {
        title: 'Introduction to Web Development',
        image: 'https://seldomindia.com/wp-content/uploads/2023/12/mern-stack-development-1.jpg',
        content: `Web development refers to the process of creating websites or web applications for the internet or intranet.
                  It includes front-end development, which involves building the visual and interactive aspects of a website using technologies like HTML, CSS, and JavaScript, 
                  and back-end development, which involves working on server-side logic, databases, and APIs using languages like Node.js, Python, or PHP.
                  Frameworks like React, Angular, and Vue.js are commonly used in front-end development, while the back-end often relies on Express.js, Django, or Ruby on Rails.
                  Web development is essential for creating dynamic, responsive, and user-friendly websites.`,
      },
      6: {
        title: 'Exploring Machine Learning',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnGbHh20gMklUoEjIzjm7ZuiF1I7mQugQWA&s',
        content: `Machine learning is a branch of artificial intelligence (AI) that enables computers to learn from data and make decisions without explicit programming.
                  It involves training models using algorithms that learn from historical data to make predictions or decisions based on new data. 
                  The main types of machine learning are supervised learning (e.g., regression and classification), unsupervised learning (e.g., clustering), and reinforcement learning.
                  Applications of machine learning include image and speech recognition, recommendation systems, and autonomous systems. 
                  Popular libraries for machine learning include TensorFlow, PyTorch, and Scikit-learn.`,
      }
    };
    setBlog(blogData[id]);

    // Fetch comments for this blog
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  const handleSubmit = async () => {
    if (!name || !comment) {
      alert("Please fill in both fields!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/comments', { name, comment, blogId: id });
      alert('Comment submitted successfully!');
      setComments([...comments, response.data.comment]);  
      setName('');
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('There was an error submitting your comment. Please try again.');
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      
      <h1>{blog.title}</h1>
      <p>Last Updated: {new Date().toLocaleString()}</p>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Leave a comment</h3>
        <input
          type="text"
          className="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your comment here..."
          className="comment"
          style={{ width: '100%', height: '100px' }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit Comment</button>


        <h2>Comments</h2>
        {/* Display Comments */}
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <div key={index} className="comment-item">
                <p><strong>{item.name}:</strong> {item.comment}</p>
                <span>{new Date(item.createdAt).toLocaleString()}</span>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
