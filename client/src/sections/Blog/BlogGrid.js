import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const blogPosts = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    image: 'https://t3.ftcdn.net/jpg/01/99/08/50/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m.jpg',
    shortDescription: 'A brief introduction to the field of machine learning and its core concepts.',
  },
  {
    id: '2',
    title: 'Deep Dive into Algorithms',
    image: 'https://www.thekainatchaudhary.com/assets/images/posts/machine-learning-algorithms-basics.jpeg',
    shortDescription: 'Learn about the most important algorithms in computer science.',
  },
  {
    id: '3',
    title: 'Understanding Data Structures',
    image: 'https://media.licdn.com/dms/image/D4E12AQG4D7tUCtraPg/article-cover_image-shrink_720_1280/0/1674957981022?e=2147483647&v=beta&t=m1_7vPOllFBLi_sqiko34ht-Xf_UH8ihdOVhe28Ufjk',
    shortDescription: 'Discover the essential data structures for efficient data storage and manipulation.',
  },
  {
    id: '4',
    title: 'Cloud Computing Essentials',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFpWk3pM9EqPp0QEcbCxQlWNDQ69oJatvdg&s',
    shortDescription: 'Dive into cloud computing and explore services from AWS, Azure, and Google Cloud.',
  },
  {
    id: '5',
    title: 'Introduction to Web Development',
    image: 'https://seldomindia.com/wp-content/uploads/2023/12/mern-stack-development-1.jpg',
    shortDescription: 'Explore the fundamentals of web development, from HTML to modern frameworks like React.',
  },
  {
    id: '6',
    title: 'Exploring Machine Learning',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnGbHh20gMklUoEjIzjm7ZuiF1I7mQugQWA&s',
    shortDescription: 'Understand the basics of machine learning, including supervised and unsupervised learning techniques.',
  },
];

const BlogGrid = () => {
  return (
    <>
    <NavBar/>
    <h1>My Blogs</h1>
    <div className="blog-grid">
      
      {blogPosts.map(blog => (
        <div key={blog.id} className="blog-item">
          <img src={blog.image} alt={blog.title} />
          <h2>{blog.title}</h2>
          <p>{blog.shortDescription}</p>
          <Link to={`/blog/${blog.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
      
    </div>
    <Footer/>
    </>
    
  );
  
};

export default BlogGrid;
