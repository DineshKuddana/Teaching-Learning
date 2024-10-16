import React from "react";
import "./Books.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useStickyNavbar from "../../hooks/useStickyNavbar";

const Books = () => {
  useStickyNavbar();
  const books = [
    {
      title: "Introduction to Computers and Computer Science - Kindle Edition",
      img: "https://m.media-amazon.com/images/I/51k0+cbFhRL._SY445_SX342_.jpg",
      link: "https://www.amazon.com/Introduction-Computers-Computer-Science-Pakanati-ebook/dp/B0BMZ5923J/ref=sr_1_2?keywords=chenna+reddy+pakanati&qid=1699953667&sr=8-2",
    },
    {
      title: "Introduction to C Programming - Kindle Edition",
      img: "https://m.media-amazon.com/images/I/41vVvmHyf8L._SY445_SX342_.jpg",
      link: "https://www.amazon.com/Introduction-Programming-Chenna-Reddy-Pakanati-ebook/dp/B0CLYCPXYX/ref=sr_1_1?keywords=chenna+reddy+pakanati&qid=1699953667&sr=8-1",
    },
    {
      title:
        "Introduction to Computers and Computer Science - Paperback Edition",
      img: "https://m.media-amazon.com/images/I/71ZzKUPSEoL._SY466_.jpg",
      link: "https://www.amazon.com/Introduction-Computers-Computer-Science-Pakanati/dp/B0BMTFKQXL/ref=sr_1_2?crid=1QYHT1E95L47F&keywords=chenna+reddy+pakanati+paperback&qid=1700030319&sprefix=chenna+reddy+pakanati+paper+back%2Caps%2C389&sr=8-2",
    },
    {
      title: "Introduction to C Programming - Paperback Edition",
      img: "https://m.media-amazon.com/images/I/41uFQBBzeKL._SX342_SY445_.jpg",
      link: "https://www.amazon.com/Introduction-Programming-Chenna-Reddy-Pakanati/dp/B0CLZLQ1L8/ref=sr_1_1?crid=1QYHT1E95L47F&keywords=chenna+reddy+pakanati+paperback&qid=1700030319&sprefix=chenna+reddy+pakanati+paper+back%2Caps%2C389&sr=8-1",
    },
    {
      title: "Computer Fundamentals and C Programming",
      img: "https://m.media-amazon.com/images/I/51V34g-6mCL._SX342_SY445_.jpg",
      link: "https://www.amazon.in/Computer-Fundamentals-Programming-Chenna-Reddy/dp/9388305108/ref=sr_1_15?crid=37PZPEI7QO422&keywords=computer+fundamentals+and+c+programming&qid=1700030865&sprefix=computer+fundamentals+and+c+programming%2Caps%2C301&sr=8-15",
    },
  ];

  const paymentDetails = {
    accountNumber: "11146283355",
    bank: "SBI",
    ifscCode: "SBIN0002723",
    branch: "JNTUEC Branch",
  };

  return (
    <>
      <Navbar />
      <main className="books-main">
        <section className="book-info">
          <p className="head">
            Explore my collection of books available for purchase:
          </p>

          <div className="book-container">
            {books.map((book, index) => (
              <div className="card" key={index}>
                <img src={book.img} alt={book.title} />
                <div className="book-details">
                  <h2>{book.title}</h2>
                  <a
                    href={book.link}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Available on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>

          <section className="pricing-details">
            <div className="purchase">
              <h2>Purchase Directly from Us</h2>
              <ul className="book-list">
                <li className="book-item">
                  <span className="book-title">
                    Introduction to Computers and Computer Science - Readable
                    PDF
                  </span>
                  <span className="book-price">Rs. 100/-</span>
                </li>
                <li className="book-item">
                  <span className="book-title">
                    Introduction to C Programming - Readable PDF
                  </span>
                  <span className="book-price">Rs. 200/-</span>
                </li>
                <li className="book-item">
                  <span className="book-title">
                    Introduction to Computers and Computer Science - Paperback
                  </span>
                  <span className="book-price">Rs. 350/-</span>
                </li>
                <li className="book-item">
                  <span className="book-title">
                    Introduction to C Programming - Paperback
                  </span>
                  <span className="book-price">Rs. 600/-</span>
                </li>
                <li className="book-item">
                  <span className="book-title">
                    Introduction to Python - Paperback
                  </span>
                  <span className="book-price">Rs. 500/-</span>
                </li>
              </ul>
            </div>

            <div className="payment">
              <h2>Payment Details</h2>
              <ul className="payment-list">
                <li className="payment-item">
                  <span className="payment-title">Account Number:</span>
                  <span className="value">{paymentDetails.accountNumber}</span>
                </li>
                <li className="payment-item">
                  <span className="payment-title">Bank:</span>
                  <span className="value">{paymentDetails.bank}</span>
                </li>
                <li className="payment-item">
                  <span className="payment-title">IFSC Code:</span>
                  <span className="value">{paymentDetails.ifscCode}</span>
                </li>
                <li className="payment-item">
                  <span className="payment-title">Branch:</span>
                  <span className="value">{paymentDetails.branch}</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="order-form">
            <h2>Order Form</h2>
            <p>
              Please fill out the form below and send the details to{" "}
              <a href="mailto:pcreddy10@gmail.com">pcreddy10@gmail.com</a>
            </p>
            <form action="process_order.php" method="post" className="form">
              <label htmlFor="bookName">Name of the Book:</label>
              <select id="bookName" name="bookName" required>
                <option value="" disabled>
                  Select a Book
                </option>
                <option value="Introduction to Computers and Computer Science - Readable PDF">
                  Introduction to Computers and Computer Science - Readable PDF
                </option>
                <option value="Introduction to C Programming - Readable PDF">
                  Introduction to C Programming - Readable PDF
                </option>
                <option value="Introduction to Computers and Computer Science - Paperback">
                  Introduction to Computers and Computer Science - Paperback
                </option>
                <option value="Introduction to C Programming - Paperback">
                  Introduction to C Programming - Paperback
                </option>
                <option value="Introduction to Python - Paperback">
                  Introduction to Python - Paperback
                </option>
              </select>

              <label htmlFor="fullName">Name:</label>
              <input type="text" id="fullName" name="fullName" required />

              <label htmlFor="designation">Designation:</label>
              <input type="text" id="designation" name="designation" required />

              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
              />

              <label htmlFor="address">Address (Postal):</label>
              <textarea
                id="address"
                name="address"
                rows="4"
                required
              ></textarea>

              <label htmlFor="paymentId">Unique ID of Payment:</label>
              <input type="text" id="paymentId" name="paymentId" required />

              <input type="submit" value="Submit Order" />
            </form>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Books;
